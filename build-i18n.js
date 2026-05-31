const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, 'site');
const DOMAIN = normalizeSiteUrl(process.env.SITE_URL, 'https://aicompare.jtlcook.com');
const SITEMAP_HTML_LIMIT = Number(process.env.SITEMAP_HTML_LIMIT || 49);
const BAIDU_ANALYTICS_ID = '8130ef5ed84040f852fe324d6702fddc';

function normalizeSiteUrl(value, fallback) {
  const raw = String(value || fallback || '').trim().replace(/\/+$/, '');
  return raw.replace(/^http:\/\//i, 'https://');
}

function baiduAnalyticsScript() {
  return `<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?${BAIDU_ANALYTICS_ID}";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>`;
}

// Translation dictionary for common Chinese text -> English
const TRANSLATIONS = {
  // Site-wide
  'AI 工具对比': 'AI Tool Comparison',
  '首页': 'Home',
  'AI 编程工具': 'AI Coding Tools',
  'AI 对话助手': 'AI Chat Assistants',
  'AI 图像生成': 'AI Image Generation',
  'AI 视频生成': 'AI Video Generation',
  'AI 语音与音乐': 'AI Voice & Music',
  'AI 写作与营销': 'AI Writing & Marketing',
  'AI 办公效率': 'AI Productivity',
  'AI 设计工具': 'AI Design Tools',
  'AI 搜索与研究': 'AI Search & Research',
  'AI 数据分析': 'AI Data Analytics',
  'AI 客服与支持': 'AI Customer Service',
  'AI 翻译与本地化': 'AI Translation & Localization',
  'AI 教育学习': 'AI Education',
  'AI 3D 与游戏': 'AI 3D & Gaming',
  '更多 ▾': 'More ▾',
  '推荐': 'Recommended',
  '关于': 'About',
  '关于我们': 'About Us',
  '隐私政策': 'Privacy Policy',
  '使用条款': 'Terms of Use',
  '联系我们': 'Contact Us',
  // Meta descriptions (full strings to avoid partial replacement)
  'AI 工具对比 - 覆盖 100 款主流 AI 工具的独立对比评测，包括 ChatGPT、Claude、Cursor 等，帮你找到最适合的 AI 工具。': 'AI Tool Comparison - Independent reviews of 100+ popular AI tools including ChatGPT, Claude, Cursor, and more. Find the best AI tool for your needs.',
  '独立客观的 AI 工具对比评测平台 - AI 工具对比': 'Independent AI Tool Comparison Platform - AI Tool Comparison',
  // Section titles
  '工具分类': 'Tool Categories',
  '热门对比': 'Popular Comparisons',
  '最新收录工具': 'Latest Tools',
  '场景推荐': 'Scenario Recommendations',
  '免费版够用吗？': 'Is the Free Version Enough?',
  '常见问题': 'FAQ',
  // Navigation & UI
  '对比': 'Comparison',
  '替代品': 'Alternatives',
  '功能对比': 'Feature Comparison',
  '核心差异对比': 'Key Differences',
  '优势': 'Advantages',
  '劣势': 'Disadvantages',
  '适合人群': 'Best For',
  '定价': 'Pricing',
  '对比维度': 'Dimension',
  '胜出': 'Winner',
  '结论：': 'Verdict: ',
  '有免费版': 'Free Tier',
  '款工具': ' Tools',
  // Footer
  '工具分类': 'Tool Categories',
  '热门对比': 'Popular Comparisons',
  '关于本站': 'About This Site',
  '最后更新：': 'Last updated: ',
  '信息收集': 'Information Collection',
  'AI 工具对比 是纯静态网站，我们不收集用户提交的个人身份信息。百度统计等访问统计服务可能使用 Cookie 或类似技术生成匿名、汇总的访问指标。': 'AI Tool Comparison is a static website. We do not collect personal identity information submitted by users. Baidu Analytics and similar analytics services may use cookies or similar technology to generate anonymous, aggregated visit metrics.',
  '第三方服务': 'Third-Party Services',
  '本站已接入百度统计（Baidu Analytics），用于了解汇总访问量、访问来源和页面使用情况，不用于识别个人身份。': 'This site uses Baidu Analytics for aggregated visit counts, traffic sources, and page usage. It is not used to identify individuals.',
  '外部链接': 'External Links',
  '本站包含指向第三方网站的链接。我们对这些网站的隐私政策不承担责任，建议您在访问时查阅其各自的隐私政策。': 'This site contains links to third-party websites. We are not responsible for their privacy policies, and we recommend reviewing each site policy when you visit.',
  '联系方式': 'Contact',
  '如对隐私政策有疑问，请联系：1055567003@qq.com': 'For questions about this privacy policy, contact: 1055567003@qq.com',
  '如对隐私政策有疑问，请联系：': 'For questions about this privacy policy, contact: ',
  // Index page
  '找到最适合你的 AI 工具': 'Find the Best AI Tool for You',
  '独立客观的 AI 工具对比评测，覆盖 100 款主流工具，帮你做出明智选择': 'Independent AI tool comparisons covering 100+ popular tools to help you make informed decisions',
  '搜索 AI 工具（如 ChatGPT、Cursor...）': 'Search AI tools (e.g. ChatGPT, Cursor...)',
  '帮助你找到最适合的 AI 工具。独立客观的对比评测，不受任何厂商赞助。': 'Helping you find the best AI tools. Independent comparisons, no vendor sponsorship.',
  '根据不同使用场景，为你推荐最合适的 AI 工具': 'Recommending the best AI tools for different use cases',
  '深度分析热门 AI 工具的免费版，帮你决定是否值得付费': 'In-depth analysis of free tiers to help you decide if upgrading is worth it',
  // Common page content
  '独立客观的 AI 工具对比评测平台': 'Independent AI Tool Comparison Platform',
  '哪个更适合你？': 'Which One is Right for You?',
  '原工具：': 'Original Tool: ',
  '轻度使用够用': 'Enough for light use',
  '评估够用，日常不够': 'Enough to evaluate, not for daily use',
  '日常使用完全够用': 'Fully sufficient for daily use',
  '学习够用，工作不够': 'Enough for learning, not for work',
  '基础设计够用，AI 功能不够': 'Enough for basic design, not AI features',
  // Tool descriptions (common patterns)
  'AI 驱动的代码编辑器、补全工具和编程 Agent，帮助开发者提升编码效率': 'AI-powered code editors, completion tools, and coding agents to boost developer productivity',
  '通用 AI 对话助手，覆盖日常问答、深度研究和信息搜索': 'General AI chat assistants for Q&A, deep research, and information search',
  'AI 图像生成和编辑工具，从概念设计到成品输出': 'AI image generation and editing tools, from concept to final output',
  'AI 驱动的视频生成和数字人工具，从文字到影像一键创作': 'AI-powered video generation and digital avatar tools',
  'AI 语音生成、克隆、音视频编辑和音乐创作工具': 'AI voice generation, cloning, audio/video editing, and music creation tools',
  'AI 营销内容生成、SEO 优化和文案写作工具，提升内容产出效率': 'AI marketing content, SEO optimization, and copywriting tools',
  'AI 演示文稿、会议记录和项目管理工具，让办公自动化': 'AI presentations, meeting notes, and project management tools',
  'AI 辅助的平面设计、UI 设计和图片编辑工具，降低设计门槛': 'AI-assisted graphic design, UI design, and image editing tools',
  'AI 驱动的学术搜索、论文分析和研究辅助工具，加速知识发现': 'AI-powered academic search, paper analysis, and research tools',
  'AI 数据分析、可视化和预测建模工具，让数据洞察触手可及': 'AI data analysis, visualization, and predictive modeling tools',
  'AI 客服机器人、工单管理和自动化支持工具，提升客户满意度': 'AI chatbots, ticket management, and automated support tools',
  'AI 翻译、本地化管理和多语言内容工具，打破语言壁垒': 'AI translation, localization management, and multilingual content tools',
  'AI 家教、课程生成和个性化学习工具，让教育更高效': 'AI tutoring, course generation, and personalized learning tools',
  'AI 3D 模型生成、游戏资产创建和虚拟环境工具': 'AI 3D model generation, game asset creation, and virtual environment tools',
  // FAQ
  '这个网站是做什么的？': 'What is this website about?',
  '评测内容是否客观？': 'Are the reviews objective?',
  '工具信息多久更新一次？': 'How often is tool information updated?',
  '如何选择适合自己的 AI 工具？': 'How to choose the right AI tool?',
  // FAQ answers
  'AI 工具对比是一个独立的 AI 工具评测对比平台。我们帮助用户了解各种 AI 工具的优缺点、价格和适用场景，做出最适合自己的选择。': 'AI Tool Comparison is an independent AI tool review platform. We help users understand the pros, cons, pricing, and use cases of various AI tools to make the best choice.',
  '我们不接受任何 AI 工具厂商的赞助或广告费用，所有评测基于实际使用体验和公开信息，力求客观公正。': 'We do not accept sponsorship or advertising from any AI tool vendor. All reviews are based on actual usage experience and public information.',
  '我们持续跟踪各 AI 工具的更新动态，通常在重大版本发布后 1-2 周内更新相关信息。': 'We continuously track updates to AI tools and typically update information within 1-2 weeks of major releases.',
  '建议先明确你的核心需求（编程、写作、图像生成等），然后查看对应分类页面，通过对比页了解各工具差异，最后利用免费版本实际体验。': 'Start by identifying your core needs (coding, writing, image generation, etc.), then browse the relevant category pages, compare tools, and try free versions.',
  // Best pages
  '最适合写代码的 AI 工具推荐': 'Best AI Tools for Coding',
  '最适合写文案的 AI 工具推荐': 'Best AI Tools for Writing',
  '最适合生成图片的 AI 工具推荐': 'Best AI Tools for Image Generation',
  '最适合学生的免费 AI 工具推荐': 'Best Free AI Tools for Students',
  '最适合自由职业者的 AI 工具推荐': 'Best AI Tools for Freelancers',
  '最适合团队协作的 AI 工具推荐': 'Best AI Tools for Teams',
  '最适合中文用户的 AI 工具推荐': 'Best AI Tools for Chinese Users',
  // Footer
  '本站内容仅供参考，不构成购买建议。': 'Content is for reference only and does not constitute purchase advice.',
};

// Extended translation patterns (regex-based)
const REGEX_TRANSLATIONS = [
  [/(\d+) 个 (.+?) 替代品推荐（(\d+) 年）/g, (m, n, tool, year) => `${n} Best ${tool} Alternatives (${year})`],
  [/(.+?)是最知名的 AI 助手，但它并非唯一选择。根据你的具体需求，以下替代品可能更适合你。/g, (m, tool) => `${tool} is the most well-known AI assistant, but it's not the only option. Based on your specific needs, these alternatives might be a better fit.`],
  [/ChatGPT vs Claude：哪个更适合你？/g, () => 'ChatGPT vs Claude: Which One is Right for You?'],
  [/(.+?) vs (.+?)：(.+)/g, (m, a, b, desc) => {
    const descEn = translateText(desc);
    return `${a} vs ${b}: ${descEn}`;
  }],
  [/哪个更适合你？/g, () => 'Which One is Right for You?'],
  [/哪个更强？/g, () => 'Which is Better?'],
  [/谁更强？/g, () => 'Which is Better?'],
  [/终极对决/g, () => 'Ultimate Showdown'],
  [/全面对比/g, () => 'Complete Comparison'],
  [/谁更值得用？/g, () => 'Which is Worth Using?'],
];

// Words that should NOT be replaced inside longer Chinese sentences
// (they cause partial corruption of untranslated text)
const SHORT_WORDS_SKIP_IN_SENTENCES = new Set([
  '对比', '优势', '劣势', '定价', '关于', '推荐'
]);

/**
 * Translate Chinese text to English using dictionary + patterns
 */
function translateText(text) {
  if (!text) return text;
  let result = text.trim();

  // Exact match first (highest priority)
  if (TRANSLATIONS[result]) return TRANSLATIONS[result];

  // Try regex patterns
  for (const [regex, replacer] of REGEX_TRANSLATIONS) {
    regex.lastIndex = 0;
    if (regex.test(result)) {
      regex.lastIndex = 0;
      result = result.replace(regex, replacer);
    }
  }

  // Always do dictionary replacement for remaining Chinese text
  // For longer text (likely descriptions/sentences), skip short ambiguous keys
  const isLongText = result.length > 30;
  const sortedKeys = Object.keys(TRANSLATIONS).sort((a, b) => b.length - a.length);
  for (const zh of sortedKeys) {
    if (isLongText && SHORT_WORDS_SKIP_IN_SENTENCES.has(zh)) continue;
    if (isLongText && zh.length < 3) continue; // Skip very short keys in long text
    if (result.includes(zh)) {
      result = result.split(zh).join(TRANSLATIONS[zh]);
    }
  }

  return result;
}

/**
 * Get relative path depth for a file
 */
function getDepth(relPath) {
  return relPath.split('/').length - 1;
}

/**
 * Compute the prefix to reach root from a given file path
 */
function getPathToRoot(relPath) {
  const depth = getDepth(relPath);
  if (depth === 0) return './';
  return '../'.repeat(depth);
}

/**
 * Language switch HTML
 */
function getLangSwitch(relPath, lang) {
  const zhHref = lang === 'zh' ? '#' : `/${relPath}`.replace(/^\//, '/zh/');
  const enHref = lang === 'en' ? '#' : `/${relPath}`.replace(/^\//, '/en/');

  // Build relative paths
  const depth = getDepth(relPath);
  const toRoot = depth === 0 ? './' : '../'.repeat(depth);

  const zhLink = lang === 'zh'
    ? `<a href="#" class="active">中文</a>`
    : `<a href="${toRoot}../zh/${relPath}">中文</a>`;
  const enLink = lang === 'en'
    ? `<a href="#" class="active">EN</a>`
    : `<a href="${toRoot}../en/${relPath}">EN</a>`;

  return `<div class="lang-switch">${zhLink}${enLink}</div>`;
}

/**
 * Get the canonical URL path for a file
 */
function getCanonicalPath(relPath) {
  // Remove .html extension and handle index
  let urlPath = relPath.replace(/\.html$/, '');
  if (urlPath === 'index') urlPath = '';
  return urlPath;
}

/**
 * Process an HTML file for a specific language version
 */
function processHtml(content, relPath, lang) {
  let html = content;
  const canonicalPath = getCanonicalPath(relPath);
  const langPrefix = lang === 'zh' ? '/zh' : '/en';
  const altLang = lang === 'zh' ? 'en' : 'zh';
  const altPrefix = lang === 'zh' ? '/en' : '/zh';
  const langCode = lang === 'zh' ? 'zh-CN' : 'en';

  // 1. Update html lang attribute
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${langCode}"`);

  // 2. Update canonical URL
  const newCanonical = `${DOMAIN}${langPrefix}${canonicalPath ? '/' + canonicalPath : ''}`;
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${newCanonical}">`);

  // 3. Add hreflang tags after canonical
  const hreflangTags = [
    `<link rel="alternate" hreflang="zh" href="${DOMAIN}/zh${canonicalPath ? '/' + canonicalPath : ''}">`,
    `<link rel="alternate" hreflang="en" href="${DOMAIN}/en${canonicalPath ? '/' + canonicalPath : ''}">`,
    `<link rel="alternate" hreflang="x-default" href="${DOMAIN}/zh${canonicalPath ? '/' + canonicalPath : ''}">`
  ].join('\n');

  html = html.replace(
    /(<link rel="canonical" href="[^"]*">)/,
    `$1\n${hreflangTags}`
  );

  // 4. Update og:url
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${newCanonical}$2`
  );

  // 5. Fix resource paths (assets, favicon) - add one more ../ since we're in zh/ or en/
  // For root-level files (index.html, about.html, etc.)
  const depth = getDepth(relPath);

  // Fix relative paths: ./assets -> ../assets, ../assets -> ../../assets, etc.
  if (depth === 0) {
    // Root level files: ./something -> ../something
    html = html.replace(/href="\.\/favicon\.svg"/g, 'href="../favicon.svg"');
    html = html.replace(/href="\.\/assets\//g, 'href="../assets/');
    html = html.replace(/src="\.\/assets\//g, 'src="../assets/');
  } else {
    // Subdirectory files: ../something -> ../../something
    html = html.replace(/href="\.\.\/favicon\.svg"/g, 'href="../../favicon.svg"');
    html = html.replace(/href="\.\.\/assets\//g, 'href="../../assets/');
    html = html.replace(/src="\.\.\/assets\//g, 'src="../../assets/');
  }

  // Fix absolute paths for icons
  html = html.replace(/src="\/assets\//g, 'src="/assets/');

  // 6. Fix internal links - they should point within the same language version
  // For root-level files
  if (depth === 0) {
    // ./something.html -> ./something.html (stays same since we mirror structure)
    // href="category/xxx" -> href="category/xxx" (relative, stays same)
    // No change needed for same-level relative links
  }
  // For subdirectory files, links like ../index.html stay the same since structure is mirrored

  // 7. Add language switch button in header nav
  const langSwitchCss = `<style>.lang-switch{margin-left:auto;display:flex;gap:8px;align-items:center}.lang-switch a{font-size:14px;color:var(--text-secondary,#666);text-decoration:none;padding:4px 8px;border-radius:4px;border:1px solid transparent}.lang-switch a:hover{border-color:var(--primary,#2563eb)}.lang-switch a.active{color:var(--primary,#2563eb);font-weight:600;border-color:var(--primary,#2563eb)}</style>`;

  // Insert CSS before </head>
  html = html.replace('</head>', `${langSwitchCss}\n</head>`);

  // Build lang switch links
  let zhHref, enHref;
  if (depth === 0) {
    zhHref = lang === 'zh' ? '#' : `../zh/${relPath}`;
    enHref = lang === 'en' ? '#' : `../en/${relPath}`;
  } else {
    zhHref = lang === 'zh' ? '#' : `../../zh/${relPath}`;
    enHref = lang === 'en' ? '#' : `../../en/${relPath}`;
  }

  const langSwitchHtml = `<div class="lang-switch"><a href="${zhHref}"${lang === 'zh' ? ' class="active"' : ''}>中文</a><a href="${enHref}"${lang === 'en' ? ' class="active"' : ''}>EN</a></div>`;

  // Insert before </nav>
  html = html.replace('</nav>', `${langSwitchHtml}\n</nav>`);

  // 8. Translate content for English version
  if (lang === 'en') {
    html = translateHtmlContent(html);
  }

  return html;
}

/**
 * Translate HTML content to English (preserving HTML tags)
 */
function translateHtmlContent(html) {
  let result = html;

  // Translate title tag
  result = result.replace(/<title>([^<]+)<\/title>/, (m, title) => {
    return `<title>${translateText(title)}</title>`;
  });

  // Translate meta description
  result = result.replace(
    /(<meta name="description" content=")([^"]+)(")/,
    (m, pre, content, post) => `${pre}${translateText(content)}${post}`
  );

  // Translate og:title
  result = result.replace(
    /(<meta property="og:title" content=")([^"]+)(")/,
    (m, pre, content, post) => `${pre}${translateText(content)}${post}`
  );

  // Translate og:description
  result = result.replace(
    /(<meta property="og:description" content=")([^"]+)(")/,
    (m, pre, content, post) => `${pre}${translateText(content)}${post}`
  );

  // Translate og:site_name
  result = result.replace(
    /(<meta property="og:site_name" content=")([^"]+)(")/,
    (m, pre, content, post) => `${pre}${translateText(content)}${post}`
  );

  // Translate twitter:title
  result = result.replace(
    /(<meta name="twitter:title" content=")([^"]+)(")/,
    (m, pre, content, post) => `${pre}${translateText(content)}${post}`
  );

  // Translate twitter:description
  result = result.replace(
    /(<meta name="twitter:description" content=")([^"]+)(")/,
    (m, pre, content, post) => `${pre}${translateText(content)}${post}`
  );

  // Translate visible text content (between tags)
  // Site logo
  result = result.replace(
    /class="site-logo">([^<]+)</,
    (m, text) => `class="site-logo">${translateText(text)}<`
  );

  // Navigation links text
  result = result.replace(
    /(<a href="[^"]*">)([^<]+)(<\/a>)/g,
    (m, pre, text, post) => {
      const translated = translateText(text);
      return `${pre}${translated}${post}`;
    }
  );

  // Button text
  result = result.replace(
    /(<button[^>]*>)([^<]+)(<\/button>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Headings
  result = result.replace(
    /(<h[1-6][^>]*>)([^<]+)(<\/h[1-6]>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Paragraphs (simple ones without nested tags)
  result = result.replace(
    /(<p[^>]*>)([^<]+)(<\/p>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  result = result.replace(
    /<p>如对隐私政策有疑问，请联系：<a href="mailto:1055567003@qq.com">1055567003@qq.com<\/a><\/p>/g,
    '<p>For questions about this privacy policy, contact: <a href="mailto:1055567003@qq.com">1055567003@qq.com</a></p>'
  );

  // Spans with specific classes
  result = result.replace(
    /(<span class="compare-card-title">)([^<]+)(<\/span>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  result = result.replace(
    /(<span class="compare-vs">)([^<]+)(<\/span>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Div text content for specific classes
  result = result.replace(
    /(<div class="category-card-name">)([^<]+)(<\/div>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  result = result.replace(
    /(<div class="category-card-desc">)([^<]+)(<\/div>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  result = result.replace(
    /(<div class="category-card-count">)([^<]+)(<\/div>)/g,
    (m, pre, text, post) => {
      const translated = text.replace(/(\d+) 款工具/, '$1 Tools');
      return `${pre}${translated}${post}`;
    }
  );

  // Tool card tagline
  result = result.replace(
    /(<div class="tool-card-tagline">)([^<]+)(<\/div>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Tags
  result = result.replace(
    /(<span class="tag tag-free">)([^<]+)(<\/span>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  result = result.replace(
    /(<span class="tag tag-category">)([^<]+)(<\/span>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Strong tags
  result = result.replace(
    /(<strong>)([^<]+)(<\/strong>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Verdict box
  result = result.replace(
    /(<div class="verdict-box">[\s\S]*?<strong>)([^<]+)(<\/strong>)([^<]*)(<\/div>)/g,
    (m, pre, label, mid, text, post) => `${pre}${translateText(label)}${mid}${translateText(text)}${post}`
  );

  // Table headers
  result = result.replace(
    /(<th>)([^<]+)(<\/th>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Dimension cells
  result = result.replace(
    /(<td class="dimension-cell">)([^<]+)(<\/td>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Breadcrumb text
  result = result.replace(
    /(<div class="breadcrumb"><div class="container">)([\s\S]*?)(<\/div><\/div>)/,
    (m, pre, content, post) => {
      let translated = content;
      translated = translated.replace(/>([^<]+)</g, (m2, text) => {
        return `>${translateText(text)}<`;
      });
      return `${pre}${translated}${post}`;
    }
  );

  // Placeholder/input
  result = result.replace(
    /placeholder="([^"]+)"/g,
    (m, text) => `placeholder="${translateText(text)}"`
  );

  // Section title class
  result = result.replace(
    /(<[^>]* class="section-title"[^>]*>)([^<]+)(<\/[^>]+>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Footer h4
  result = result.replace(
    /(<h4>)([^<]+)(<\/h4>)/g,
    (m, pre, text, post) => `${pre}${translateText(text)}${post}`
  );

  // Footer bottom copyright - keep year, translate text
  result = result.replace(
    /(&copy; \d{4}-\d{4}) ([^<]+)/,
    (m, years, text) => `${years} ${translateText(text)}`
  );

  // Translate JSON-LD
  result = result.replace(
    /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
    (m, pre, json, post) => {
      try {
        const data = JSON.parse(json);
        if (data.name) data.name = translateText(data.name);
        if (data.description) data.description = translateText(data.description);
        if (data.headline) data.headline = translateText(data.headline);
        return `${pre}${JSON.stringify(data)}${post}`;
      } catch (e) {
        return m;
      }
    }
  );

  return result;
}

/**
 * Collect all HTML files (excluding zh/ and en/ directories)
 */
function collectHtmlFiles(dir, base) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['zh', 'en', 'assets', '.git', 'node_modules'].includes(entry.name)) continue;
      files.push(...collectHtmlFiles(fullPath, base));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const relPath = path.relative(base, fullPath).replace(/\\/g, '/');
      files.push(relPath);
    }
  }
  return files;
}

/**
 * Ensure directory exists
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Generate root index.html with language detection
 */
function generateRootIndex() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Tool Comparison - AI 工具对比</title>
<link rel="canonical" href="${DOMAIN}">
<link rel="alternate" hreflang="zh" href="${DOMAIN}/zh/">
<link rel="alternate" hreflang="en" href="${DOMAIN}/en/">
<link rel="alternate" hreflang="x-default" href="${DOMAIN}/zh/">
<meta name="robots" content="noindex">
${baiduAnalyticsScript()}
<script>
(function() {
  var lang = navigator.language || navigator.userLanguage || '';
  var stored = localStorage.getItem('preferred-lang');
  if (stored) {
    window.location.replace('/' + stored + '/index.html');
    return;
  }
  if (lang.startsWith('zh')) {
    window.location.replace('/zh/index.html');
  } else {
    window.location.replace('/en/index.html');
  }
})();
</script>
<noscript>
<meta http-equiv="refresh" content="0;url=/zh/index.html">
</noscript>
</head>
<body>
<p>Redirecting... <a href="/zh/index.html">中文</a> | <a href="/en/index.html">English</a></p>
</body>
</html>`;
}

/**
 * Generate sitemap.xml
 */
function generateSitemap(htmlFiles) {
  const today = new Date().toISOString().split('T')[0];
  const sitemapFiles = selectSitemapHtmlFiles(htmlFiles);
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  for (const relPath of sitemapFiles) {
    const urlPath = getCanonicalPath(relPath);
    const zhUrl = `${DOMAIN}/zh${urlPath ? '/' + urlPath : ''}`;
    const enUrl = `${DOMAIN}/en${urlPath ? '/' + urlPath : ''}`;

    // Chinese version
    xml += `  <url>
    <loc>${zhUrl}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${zhUrl}"/>
  </url>
`;

    // English version
    xml += `  <url>
    <loc>${enUrl}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${zhUrl}"/>
  </url>
`;
  }

  xml += `</urlset>`;
  return xml;
}

function selectSitemapHtmlFiles(htmlFiles) {
  const score = (relPath) => {
    if (relPath === 'index.html') return 0;
    if (/^(about|contact|privacy|terms)\.html$/.test(relPath)) return 1;
    if (/^category\//.test(relPath)) return 2;
    if (/^compare\//.test(relPath)) return 3;
    if (/^alternatives\//.test(relPath)) return 4;
    if (/^best\//.test(relPath)) return 5;
    if (/^free\//.test(relPath)) return 6;
    if (/^tools\//.test(relPath)) return 8;
    return 20;
  };
  return [...htmlFiles]
    .sort((a, b) => score(a) - score(b) || a.localeCompare(b))
    .slice(0, SITEMAP_HTML_LIMIT);
}

/**
 * Main build function
 */
function build() {
  console.log('Starting i18n build...');
  console.log(`Site directory: ${SITE_DIR}`);
  console.log(`Domain: ${DOMAIN}`);

  // Collect all HTML files
  const htmlFiles = collectHtmlFiles(SITE_DIR, SITE_DIR);
  console.log(`Found ${htmlFiles.length} HTML files to process`);

  // Read all file contents first (before any writes)
  const fileContents = {};
  for (const relPath of htmlFiles) {
    const srcPath = path.join(SITE_DIR, relPath);
    fileContents[relPath] = fs.readFileSync(srcPath, 'utf-8');
  }

  // Create zh/ and en/ directories
  const zhDir = path.join(SITE_DIR, 'zh');
  const enDir = path.join(SITE_DIR, 'en');
  ensureDir(zhDir);
  ensureDir(enDir);

  // Process each file
  let processed = 0;
  for (const relPath of htmlFiles) {
    const content = fileContents[relPath];

    // Skip if this is already the redirect page (from a previous run)
    if (relPath === 'index.html' && content.includes('noindex') && content.includes('location.replace')) {
      // Use the zh version as source if available
      const zhSrc = path.join(zhDir, 'index.html');
      if (fs.existsSync(zhSrc)) {
        // Already processed in a previous run, skip
        processed++;
        continue;
      }
    }

    // Generate zh version
    const zhContent = processHtml(content, relPath, 'zh');
    const zhPath = path.join(zhDir, relPath);
    ensureDir(path.dirname(zhPath));
    fs.writeFileSync(zhPath, zhContent, 'utf-8');

    // Generate en version
    const enContent = processHtml(content, relPath, 'en');
    const enPath = path.join(enDir, relPath);
    ensureDir(path.dirname(enPath));
    fs.writeFileSync(enPath, enContent, 'utf-8');

    processed++;
    if (processed % 20 === 0) {
      console.log(`  Processed ${processed}/${htmlFiles.length} files...`);
    }
  }

  console.log(`  Processed ${processed}/${htmlFiles.length} files total`);

  // Generate root index.html (language detection)
  const rootIndex = generateRootIndex();
  fs.writeFileSync(path.join(SITE_DIR, 'index.html'), rootIndex, 'utf-8');
  console.log('Generated root index.html with language detection');

  // Generate sitemap.xml
  const sitemap = generateSitemap(htmlFiles);
  fs.writeFileSync(path.join(SITE_DIR, 'sitemap.xml'), sitemap, 'utf-8');
  console.log('Generated sitemap.xml');

  // Generate robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
  fs.writeFileSync(path.join(SITE_DIR, 'robots.txt'), robots, 'utf-8');
  console.log('Generated robots.txt');

  console.log('\nBuild complete!');
  console.log(`  zh/ : ${htmlFiles.length} files`);
  console.log(`  en/ : ${htmlFiles.length} files`);
}

build();
