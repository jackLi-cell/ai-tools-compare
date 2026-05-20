#!/usr/bin/env node
/**
 * AI 工具对比站 - 静态站点生成脚本
 * 生成首页、工具详情页、对比页、替代品页、分类页、信任页面、sitemap、robots.txt
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = join(ROOT, 'data');
const SITE_SRC = join(ROOT, 'site');
const OUT = join(ROOT, 'site');

const DOMAIN = 'https://aicompare.jtlcook.com';
const SITE_NAME = 'AI 工具对比';
const CONTACT_EMAIL = '1055567003@qq.com';
const NOW = new Date().toISOString().split('T')[0];

// Load data
const tools = JSON.parse(readFileSync(join(DATA, 'tools.json'), 'utf-8'));
const comparisons = JSON.parse(readFileSync(join(DATA, 'comparisons.json'), 'utf-8'));
const alternatives = JSON.parse(readFileSync(join(DATA, 'alternatives.json'), 'utf-8'));
const categories = JSON.parse(readFileSync(join(DATA, 'categories.json'), 'utf-8'));

// Helper: tool lookup
const toolMap = Object.fromEntries(tools.map(t => [t.slug, t]));

// Clean URL for SEO (no .html suffix)
function cleanUrl(path) {
  return DOMAIN + '/' + path.replace(/\.html$/, '').replace(/^\//, '');
}

// Get relative prefix from a page path to root
function getPrefix(pagePath) {
  const dir = dirname(pagePath);
  if (dir === '.') return './';
  const rel = relative(dir, '.');
  return rel ? rel + '/' : './';
}

// Relativize a path from current page
function relativize(from, to) {
  const fromDir = dirname(from);
  const rel = relative(fromDir, to);
  return rel.startsWith('.') ? rel : './' + rel;
}

// Ensure directory exists
function ensureDir(filePath) {
  mkdirSync(dirname(filePath), { recursive: true });
}

// Write file helper
function writePage(relPath, content) {
  const fullPath = join(OUT, relPath);
  ensureDir(fullPath);
  writeFileSync(fullPath, content, 'utf-8');
}

// Category icon map
const categoryIcons = { code: '💻', chat: '💬', image: '🎨' };

// HTML layout wrapper
function layout(pagePath, { title, description, canonical, ogType = 'website', jsonLd = '', bodyContent }) {
  const prefix = getPrefix(pagePath);
  const cssPath = prefix + 'assets/styles.css';
  const jsPath = prefix + 'assets/app.js';
  const canonicalUrl = canonical || cleanUrl(pagePath);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} - ${SITE_NAME}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonicalUrl}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
${jsonLd}
<link rel="stylesheet" href="${cssPath}">
</head>
<body>
<header class="site-header">
<div class="container">
<a href="${prefix}index.html" class="site-logo">${SITE_NAME}</a>
<nav class="site-nav">
<a href="${prefix}index.html">首页</a>
${categories.map(c => `<a href="${prefix}category/${c.slug}.html">${c.name}</a>`).join('\n')}
<a href="${prefix}about.html">关于</a>
</nav>
</div>
</header>
${bodyContent}
<footer class="site-footer">
<div class="container">
<div class="footer-grid">
<div class="footer-brand">
<strong>${SITE_NAME}</strong>
<p>帮助你找到最适合的 AI 工具。独立客观的对比评测，不受任何厂商赞助。</p>
</div>
<div class="footer-links">
<h4>工具分类</h4>
<ul>
${categories.map(c => `<li><a href="${prefix}category/${c.slug}.html">${c.name}</a></li>`).join('\n')}
</ul>
</div>
<div class="footer-links">
<h4>热门对比</h4>
<ul>
${comparisons.slice(0, 4).map(c => `<li><a href="${prefix}compare/${c.slug}.html">${c.title.split('：')[0]}</a></li>`).join('\n')}
</ul>
</div>
<div class="footer-links">
<h4>关于本站</h4>
<ul>
<li><a href="${prefix}about.html">关于我们</a></li>
<li><a href="${prefix}privacy.html">隐私政策</a></li>
<li><a href="${prefix}terms.html">使用条款</a></li>
<li><a href="${prefix}contact.html">联系我们</a></li>
</ul>
</div>
</div>
<div class="footer-bottom">
<p>&copy; 2024-2026 ${SITE_NAME}. 本站内容仅供参考，不构成购买建议。</p>
</div>
</div>
</footer>
<script src="${jsPath}"></script>
</body>
</html>`;
}

// PLACEHOLDER_PAGE_GENERATORS

// ============ HOME PAGE ============
function buildHomePage() {
  const pagePath = 'index.html';
  const jsonLd = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","name":"${SITE_NAME}","url":"${DOMAIN}","description":"独立客观的 AI 工具对比评测平台","potentialAction":{"@type":"SearchAction","target":"${DOMAIN}/tools/{search_term_string}","query-input":"required name=search_term_string"}}
</script>`;

  const toolsData = JSON.stringify(tools.map(t => ({ slug: t.slug, name: t.name, company: t.company, tagline: t.tagline })));

  const bodyContent = `
<section class="hero">
<div class="container">
<h1>找到最适合你的 AI 工具</h1>
<p>独立客观的 AI 工具对比评测，覆盖 ${tools.length} 款主流工具，帮你做出明智选择</p>
<div class="hero-search">
<input type="text" id="hero-search" placeholder="搜索 AI 工具（如 ChatGPT、Cursor...）" autocomplete="off">
<div id="search-results"></div>
</div>
</div>
</section>
<script>window.__TOOLS_DATA__=${toolsData};</script>

<section class="section">
<div class="container">
<h2 class="section-title">工具分类</h2>
<div class="category-grid">
${categories.map(c => {
  const icon = categoryIcons[c.icon] || '🤖';
  return `<a href="category/${c.slug}.html" class="category-card">
<div class="category-card-icon">${icon}</div>
<div class="category-card-name">${c.name}</div>
<div class="category-card-desc">${c.description}</div>
<div class="category-card-count">${c.tools.length} 款工具</div>
</a>`;
}).join('\n')}
</div>
</div>
</section>

<section class="section" style="background:var(--gray-50)">
<div class="container">
<h2 class="section-title">热门对比</h2>
<div class="compare-grid">
${comparisons.slice(0, 6).map(c => {
  const tA = toolMap[c.toolA];
  const tB = toolMap[c.toolB] || { name: c.toolB };
  const nameA = tA ? tA.name : c.toolA;
  const nameB = tB ? tB.name : c.toolB;
  return `<a href="compare/${c.slug}.html" class="compare-card">
<span class="compare-vs">${nameA} VS ${nameB}</span>
<span class="compare-card-title">${c.title}</span>
</a>`;
}).join('\n')}
</div>
</div>
</section>

<section class="section">
<div class="container">
<h2 class="section-title">最新收录工具</h2>
<div class="tool-grid">
${tools.slice(0, 6).map(t => toolCard(t, pagePath)).join('\n')}
</div>
</div>
</section>

<section class="section" style="background:var(--gray-50)">
<div class="container">
<h2 class="section-title">常见问题</h2>
<div class="faq-list">
<div class="faq-item">
<h3>这个网站是做什么的？</h3>
<p>${SITE_NAME}是一个独立的 AI 工具评测对比平台。我们帮助用户了解各种 AI 工具的优缺点、价格和适用场景，做出最适合自己的选择。</p>
</div>
<div class="faq-item">
<h3>评测内容是否客观？</h3>
<p>我们不接受任何 AI 工具厂商的赞助或广告费用，所有评测基于实际使用体验和公开信息，力求客观公正。</p>
</div>
<div class="faq-item">
<h3>工具信息多久更新一次？</h3>
<p>我们持续跟踪各 AI 工具的更新动态，通常在重大版本发布后 1-2 周内更新相关信息。</p>
</div>
<div class="faq-item">
<h3>如何选择适合自己的 AI 工具？</h3>
<p>建议先明确你的核心需求（编程、写作、图像生成等），然后查看对应分类页面，通过对比页了解各工具差异，最后利用免费版本实际体验。</p>
</div>
</div>
</div>
</section>`;

  writePage(pagePath, layout(pagePath, {
    title: '独立客观的 AI 工具对比评测平台',
    description: `${SITE_NAME} - 覆盖 ${tools.length} 款主流 AI 工具的独立对比评测，包括 ChatGPT、Claude、Cursor 等，帮你找到最适合的 AI 工具。`,
    canonical: DOMAIN,
    jsonLd,
    bodyContent
  }));
}

// Tool card component
function toolCard(t, fromPage) {
  const prefix = getPrefix(fromPage);
  const hasFree = t.pricing.some(p => p.price === 0);
  const cat = categories.find(c => c.slug === t.category);
  return `<a href="${prefix}tools/${t.slug}.html" class="tool-card">
<div class="tool-card-header">
<div class="tool-card-logo">${t.name.charAt(0)}</div>
<div>
<div class="tool-card-name">${t.name}</div>
<div class="tool-card-company">${t.company}</div>
</div>
</div>
<div class="tool-card-tagline">${t.tagline}</div>
<div class="tool-card-tags">
${hasFree ? '<span class="tag tag-free">有免费版</span>' : ''}
${cat ? `<span class="tag tag-category">${cat.name}</span>` : ''}
</div>
</a>`;
}

// ============ TOOL DETAIL PAGES ============
function buildToolPages() {
  for (const t of tools) {
    const pagePath = `tools/${t.slug}.html`;
    const prefix = getPrefix(pagePath);

    const jsonLd = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"SoftwareApplication","name":"${t.name}","applicationCategory":"AI Tool","operatingSystem":"Web","offers":${JSON.stringify(t.pricing.map(p => ({"@type":"Offer","name":p.plan,"price":p.price,"priceCurrency":"USD"})))},"description":"${t.tagline}","author":{"@type":"Organization","name":"${t.company}"}}
</script>`;

    // Find related comparisons
    const relatedComparisons = comparisons.filter(c => c.toolA === t.slug || c.toolB === t.slug);
    // Find related alternatives
    const relatedAlts = alternatives.filter(a => a.tool === t.slug);

    const bodyContent = `
<div class="breadcrumb"><div class="container"><a href="${prefix}index.html">首页</a><span>/</span><a href="${prefix}category/${t.category}.html">${categories.find(c=>c.slug===t.category)?.name||''}</a><span>/</span>${t.name}</div></div>
<div class="tool-detail">
<div class="container">
<div class="tool-detail-header">
<div class="tool-detail-logo">${t.name.charAt(0)}</div>
<div class="tool-detail-info">
<h1>${t.name}</h1>
<p class="company">${t.company}</p>
<p class="tagline">${t.tagline}</p>
</div>
<div class="tool-detail-actions">
<a href="${t.website}" target="_blank" rel="nofollow noopener" class="btn btn-primary">访问官网</a>
</div>
</div>

<h2 class="section-title">价格方案</h2>
<div class="pricing-grid">
${t.pricing.map((p, i) => `<div class="pricing-card${i === 1 ? ' featured' : ''}">
<div class="pricing-plan">${p.plan}</div>
<div class="pricing-price">${p.price === 0 ? '免费' : '$' + p.price}<span>/${p.period}</span></div>
<ul class="pricing-features">
${p.features.map(f => `<li>${f}</li>`).join('\n')}
</ul>
</div>`).join('\n')}
</div>
${t.freeLimit ? `<p style="font-size:14px;color:var(--gray-500);margin-bottom:32px"><strong>免费版限制：</strong>${t.freeLimit}</p>` : ''}

<h2 class="section-title">核心功能</h2>
<div class="features-grid">
${Object.entries(t.keyFeatures).map(([k, v]) => `<div class="feature-item"><h4>${k}</h4><p>${v}</p></div>`).join('\n')}
</div>

<h2 class="section-title">优缺点分析</h2>
<div class="pros-cons">
<div>
<h3 style="color:var(--success);margin-bottom:12px">优点</h3>
<ul class="pros-list">
${t.pros.map(p => `<li>${p}</li>`).join('\n')}
</ul>
</div>
<div>
<h3 style="color:var(--danger);margin-bottom:12px">缺点</h3>
<ul class="cons-list">
${t.cons.map(c => `<li>${c}</li>`).join('\n')}
</ul>
</div>
</div>

<h2 class="section-title">适合与不适合</h2>
<div class="best-for-grid">
<div class="best-for-card">
<h3>适合</h3>
${t.bestFor.map(b => `<p>• ${b}</p>`).join('\n')}
</div>
<div class="best-for-card">
<h3 style="color:var(--danger)">不适合</h3>
${t.notFor.map(n => `<p>• ${n}</p>`).join('\n')}
</div>
</div>

${relatedComparisons.length > 0 ? `<h2 class="section-title">相关对比</h2>
<div class="compare-grid" style="margin-bottom:32px">
${relatedComparisons.map(c => `<a href="${prefix}compare/${c.slug}.html" class="compare-card">
<span class="compare-vs">${c.title.split('：')[0]}</span>
</a>`).join('\n')}
</div>` : ''}

${relatedAlts.length > 0 ? `<h2 class="section-title">替代品推荐</h2>
<p style="margin-bottom:16px"><a href="${prefix}alternatives/${relatedAlts[0].slug}.html">查看 ${t.name} 的 5 个替代品 →</a></p>` : ''}
</div>
</div>`;

    writePage(pagePath, layout(pagePath, {
      title: `${t.name} 评测 - 价格、功能、优缺点全面分析`,
      description: `${t.name} 由 ${t.company} 开发，${t.tagline}。查看详细价格方案、核心功能、优缺点分析和替代品推荐。`,
      ogType: 'article',
      jsonLd,
      bodyContent
    }));
  }
}

// ============ COMPARISON PAGES ============
function buildComparePages() {
  for (const c of comparisons) {
    const pagePath = `compare/${c.slug}.html`;
    const prefix = getPrefix(pagePath);
    const tA = toolMap[c.toolA];
    const tB = toolMap[c.toolB] || c.toolBInfo;
    const nameA = tA ? tA.name : c.toolA;
    const nameB = tB ? tB.name : c.toolB;

    const jsonLd = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"${c.title}","description":"${c.verdict}","dateModified":"${NOW}","author":{"@type":"Organization","name":"${SITE_NAME}"}}
</script>`;

    const bodyContent = `
<div class="breadcrumb"><div class="container"><a href="${prefix}index.html">首页</a><span>/</span>对比<span>/</span>${nameA} vs ${nameB}</div></div>
<div class="tool-detail">
<div class="container">
<h1 style="font-size:28px;margin-bottom:16px">${c.title}</h1>

<div class="verdict-box">
<strong>结论：</strong>${c.verdict}
</div>

<h2 class="section-title">核心差异对比</h2>
<div class="compare-table-wrapper">
<table class="compare-table">
<thead>
<tr><th>对比维度</th><th>${nameA}</th><th>${nameB}</th><th>胜出</th></tr>
</thead>
<tbody>
${c.keyDifferences.map(d => {
  const winnerName = d.winner === 'a' ? nameA : d.winner === 'b' ? nameB : '平手';
  return `<tr>
<td class="dimension-cell">${d.dimension}</td>
<td${d.winner === 'a' ? ' data-winner="true"' : ''}>${d.toolA}</td>
<td${d.winner === 'b' ? ' data-winner="true"' : ''}>${d.toolB}</td>
<td><strong>${winnerName}</strong></td>
</tr>`;
}).join('\n')}
</tbody>
</table>
</div>

<h2 class="section-title">各自适合谁？</h2>
<div class="best-for-grid">
<div class="best-for-card">
<h3>${nameA} 更适合</h3>
<p>${c.bestForA}</p>
${tA ? `<p style="margin-top:12px"><a href="${prefix}tools/${tA.slug}.html">查看 ${nameA} 详情 →</a></p>` : ''}
</div>
<div class="best-for-card">
<h3>${nameB} 更适合</h3>
<p>${c.bestForB}</p>
${toolMap[c.toolB] ? `<p style="margin-top:12px"><a href="${prefix}tools/${c.toolB}.html">查看 ${nameB} 详情 →</a></p>` : ''}
</div>
</div>

<h2 class="section-title">价格对比</h2>
<p style="font-size:15px;color:var(--gray-600);margin-bottom:32px">${c.pricingComparison}</p>

${tA && toolMap[c.toolB] ? `<h2 class="section-title">价格方案详情</h2>
<div class="best-for-grid">
<div class="best-for-card">
<h3>${nameA} 价格</h3>
${tA.pricing.map(p => `<p>• ${p.plan}: ${p.price === 0 ? '免费' : '$' + p.price + '/' + p.period}</p>`).join('\n')}
</div>
<div class="best-for-card">
<h3>${nameB} 价格</h3>
${toolMap[c.toolB].pricing.map(p => `<p>• ${p.plan}: ${p.price === 0 ? '免费' : '$' + p.price + '/' + p.period}</p>`).join('\n')}
</div>
</div>` : ''}
</div>
</div>`;

    writePage(pagePath, layout(pagePath, {
      title: c.title,
      description: `${c.verdict}。详细对比 ${nameA} 和 ${nameB} 的功能、价格、优缺点，帮你选择最适合的工具。`,
      ogType: 'article',
      jsonLd,
      bodyContent
    }));
  }
}

// ============ ALTERNATIVES PAGES ============
function buildAlternativePages() {
  for (const alt of alternatives) {
    const pagePath = `alternatives/${alt.slug}.html`;
    const prefix = getPrefix(pagePath);
    const mainTool = toolMap[alt.tool];

    const bodyContent = `
<div class="breadcrumb"><div class="container"><a href="${prefix}index.html">首页</a><span>/</span>替代品<span>/</span>${alt.title}</div></div>
<div class="tool-detail">
<div class="container">
<h1 style="font-size:28px;margin-bottom:16px">${alt.title}</h1>
<p style="font-size:15px;color:var(--gray-600);margin-bottom:32px">${alt.description}</p>

${mainTool ? `<div style="background:var(--gray-50);padding:16px 20px;border-radius:var(--radius);margin-bottom:32px">
<p><strong>原工具：</strong><a href="${prefix}tools/${mainTool.slug}.html">${mainTool.name}</a> - ${mainTool.tagline}</p>
</div>` : ''}

<div class="alt-list">
${alt.alternatives.map((a, i) => {
  const link = a.slug ? `${prefix}tools/${a.slug}.html` : a.website;
  const target = a.slug ? '' : ' target="_blank" rel="nofollow noopener"';
  return `<div class="alt-card">
<h3>${i + 1}. <a href="${link}"${target}>${a.name}</a></h3>
<p class="alt-reason">${a.reason}</p>
<div class="alt-pros-cons">
<div>
<h4 style="font-size:13px;color:var(--success);margin-bottom:8px">相比 ${mainTool ? mainTool.name : '原工具'} 的优势</h4>
<ul class="pros-list">
${a.prosVsOriginal.map(p => `<li>${p}</li>`).join('\n')}
</ul>
</div>
<div>
<h4 style="font-size:13px;color:var(--danger);margin-bottom:8px">相比 ${mainTool ? mainTool.name : '原工具'} 的不足</h4>
<ul class="cons-list">
${a.consVsOriginal.map(c => `<li>${c}</li>`).join('\n')}
</ul>
</div>
</div>
</div>`;
}).join('\n')}
</div>
</div>
</div>`;

    writePage(pagePath, layout(pagePath, {
      title: alt.title,
      description: alt.description,
      ogType: 'article',
      bodyContent
    }));
  }
}

// ============ CATEGORY PAGES ============
function buildCategoryPages() {
  for (const cat of categories) {
    const pagePath = `category/${cat.slug}.html`;
    const prefix = getPrefix(pagePath);
    const catTools = cat.tools.map(slug => toolMap[slug]).filter(Boolean);

    const bodyContent = `
<div class="breadcrumb"><div class="container"><a href="${prefix}index.html">首页</a><span>/</span>${cat.name}</div></div>
<div class="tool-detail">
<div class="container">
<h1 style="font-size:28px;margin-bottom:8px">${cat.name}</h1>
<p style="font-size:15px;color:var(--gray-600);margin-bottom:32px">${cat.description}，共收录 ${catTools.length} 款工具。</p>

<div class="tool-grid">
${catTools.map(t => toolCard(t, pagePath)).join('\n')}
</div>

${(() => {
  const catComparisons = comparisons.filter(c => {
    const tA = toolMap[c.toolA];
    const tB = toolMap[c.toolB];
    return (tA && tA.category === cat.slug) || (tB && tB.category === cat.slug);
  });
  if (catComparisons.length === 0) return '';
  return `<h2 class="section-title" style="margin-top:40px">相关对比</h2>
<div class="compare-grid">
${catComparisons.map(c => `<a href="${prefix}compare/${c.slug}.html" class="compare-card">
<span class="compare-vs">${c.title.split('：')[0]}</span>
</a>`).join('\n')}
</div>`;
})()}
</div>
</div>`;

    writePage(pagePath, layout(pagePath, {
      title: `${cat.name} - 最佳 AI 工具推荐与对比`,
      description: `${cat.description}。对比 ${catTools.map(t=>t.name).join('、')} 等 ${catTools.length} 款工具的功能和价格。`,
      bodyContent
    }));
  }
}

// ============ TRUST PAGES ============
function buildTrustPages() {
  const pages = [
    {
      file: 'about.html',
      title: '关于我们',
      content: `<h1>关于 ${SITE_NAME}</h1>
<p>${SITE_NAME} 是一个独立的 AI 工具评测对比平台。我们的使命是帮助用户在众多 AI 工具中找到最适合自己需求的产品。</p>
<h2>我们的原则</h2>
<ul>
<li><strong>独立客观</strong> - 我们不接受任何 AI 工具厂商的赞助，所有评测基于实际使用体验</li>
<li><strong>持续更新</strong> - AI 领域发展迅速，我们持续跟踪各工具的最新动态</li>
<li><strong>用户至上</strong> - 我们从用户实际需求出发，提供有针对性的推荐</li>
</ul>
<h2>联系我们</h2>
<p>如有任何问题或建议，欢迎通过邮件联系：<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>`
    },
    {
      file: 'privacy.html',
      title: '隐私政策',
      content: `<h1>隐私政策</h1>
<p>最后更新：${NOW}</p>
<h2>信息收集</h2>
<p>${SITE_NAME} 是纯静态网站，我们不收集任何个人身份信息。我们不使用 Cookie 追踪用户行为。</p>
<h2>第三方服务</h2>
<p>本站托管于 Cloudflare Pages，Cloudflare 可能会收集基本的访问日志（IP 地址、浏览器类型等）用于安全防护。详情请参阅 Cloudflare 的隐私政策。</p>
<h2>外部链接</h2>
<p>本站包含指向第三方网站的链接。我们对这些网站的隐私政策不承担责任，建议您在访问时查阅其各自的隐私政策。</p>
<h2>联系方式</h2>
<p>如对隐私政策有疑问，请联系：<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>`
    },
    {
      file: 'terms.html',
      title: '使用条款',
      content: `<h1>使用条款</h1>
<p>最后更新：${NOW}</p>
<h2>内容声明</h2>
<p>本站提供的所有信息仅供参考，不构成购买建议。AI 工具的功能、价格可能随时变化，请以各工具官网信息为准。</p>
<h2>知识产权</h2>
<p>本站原创内容（评测文字、对比分析等）版权归 ${SITE_NAME} 所有。各 AI 工具的名称、Logo 等为其各自公司的商标。</p>
<h2>免责声明</h2>
<p>我们尽力确保信息准确，但不对因使用本站信息而产生的任何损失承担责任。用户应自行判断并承担使用 AI 工具的风险。</p>
<h2>联系方式</h2>
<p>如有任何问题，请联系：<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>`
    },
    {
      file: 'contact.html',
      title: '联系我们',
      content: `<h1>联系我们</h1>
<p>感谢您对 ${SITE_NAME} 的关注。如有以下需求，欢迎联系我们：</p>
<ul>
<li>工具信息纠错或更新</li>
<li>建议收录新的 AI 工具</li>
<li>合作咨询</li>
<li>其他问题或反馈</li>
</ul>
<h2>联系方式</h2>
<p>邮箱：<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>
<p>我们通常会在 1-3 个工作日内回复。</p>`
    }
  ];

  for (const page of pages) {
    const bodyContent = `<div class="tool-detail"><div class="container" style="max-width:800px">${page.content}</div></div>`;
    writePage(page.file, layout(page.file, {
      title: page.title,
      description: `${SITE_NAME} - ${page.title}`,
      bodyContent
    }));
  }
}

// ============ SITEMAP & ROBOTS ============
function buildSitemap() {
  const urls = [];

  // Home
  urls.push({ loc: DOMAIN, priority: '1.0', changefreq: 'daily' });

  // Tool pages
  for (const t of tools) {
    urls.push({ loc: cleanUrl(`tools/${t.slug}.html`), priority: '0.8', changefreq: 'weekly', lastmod: t.lastUpdated });
  }

  // Comparison pages
  for (const c of comparisons) {
    urls.push({ loc: cleanUrl(`compare/${c.slug}.html`), priority: '0.8', changefreq: 'weekly', lastmod: NOW });
  }

  // Alternative pages
  for (const a of alternatives) {
    urls.push({ loc: cleanUrl(`alternatives/${a.slug}.html`), priority: '0.7', changefreq: 'weekly', lastmod: NOW });
  }

  // Category pages
  for (const c of categories) {
    urls.push({ loc: cleanUrl(`category/${c.slug}.html`), priority: '0.7', changefreq: 'weekly', lastmod: NOW });
  }

  // Trust pages
  urls.push({ loc: cleanUrl('about.html'), priority: '0.3', changefreq: 'monthly' });
  urls.push({ loc: cleanUrl('privacy.html'), priority: '0.2', changefreq: 'monthly' });
  urls.push({ loc: cleanUrl('terms.html'), priority: '0.2', changefreq: 'monthly' });
  urls.push({ loc: cleanUrl('contact.html'), priority: '0.3', changefreq: 'monthly' });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : `<lastmod>${NOW}</lastmod>`}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  writePage('sitemap.xml', xml);

  const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml`;
  writePage('robots.txt', robots);
}

// ============ COPY ASSETS ============
function copyAssets() {
  const assetsOut = join(OUT, 'assets');
  mkdirSync(assetsOut, { recursive: true });
  const srcAssets = join(SITE_SRC, 'assets');
  if (existsSync(srcAssets)) {
    const files = readdirSync(srcAssets);
    for (const file of files) {
      const content = readFileSync(join(srcAssets, file));
      writeFileSync(join(assetsOut, file), content);
    }
  }
}

// ============ MAIN BUILD ============
console.log('Building AI Compare site...');
console.log('Output directory:', OUT);

// Clean and create output
mkdirSync(OUT, { recursive: true });

try {
  console.log('  Copying assets...');
  copyAssets();
  console.log('  Building home page...');
  buildHomePage();
  console.log('  Building tool pages...');
  buildToolPages();
  console.log('  Building comparison pages...');
  buildComparePages();
  console.log('  Building alternative pages...');
  buildAlternativePages();
  console.log('  Building category pages...');
  buildCategoryPages();
  console.log('  Building trust pages...');
  buildTrustPages();
  console.log('  Building sitemap...');
  buildSitemap();
} catch (e) {
  console.error('BUILD ERROR:', e.message);
  console.error(e.stack);
  process.exit(1);
}

// Count pages
const pageCount = 1 + tools.length + comparisons.length + alternatives.length + categories.length + 4;
console.log(`\nBuild complete!`);
console.log(`Total pages: ${pageCount}`);
console.log(`  - Home: 1`);
console.log(`  - Tool pages: ${tools.length}`);
console.log(`  - Comparison pages: ${comparisons.length}`);
console.log(`  - Alternative pages: ${alternatives.length}`);
console.log(`  - Category pages: ${categories.length}`);
console.log(`  - Trust pages: 4`);
console.log(`  - sitemap.xml + robots.txt`);
console.log(`\nDomain: ${DOMAIN}`);
