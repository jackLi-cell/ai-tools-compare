/**
 * Add 10 new comparisons to the database
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');
const path = join(DATA, 'comparisons.json');
const comparisons = JSON.parse(readFileSync(path, 'utf-8'));

const newComparisons = [
  {
    slug: "grok-vs-chatgpt",
    toolA: "grok",
    toolB: "chatgpt",
    title: "Grok vs ChatGPT：实时信息 AI 对决全能选手",
    verdict: "Grok 胜在实时信息和图像生成，ChatGPT 胜在生态完整和多模态",
    keyDifferences: [
      { dimension: "实时信息", toolA: "原生实时访问网络和 X 平台数据", toolB: "需要通过搜索插件获取实时信息", winner: "a" },
      { dimension: "图像生成", toolA: "Aurora 引擎照片级真实感极强", toolB: "DALL-E 4 风格多样但真实感稍逊", winner: "a" },
      { dimension: "插件生态", toolA: "生态尚在建设，功能相对单一", toolB: "GPTs 商店数百万应用，生态最完整", winner: "b" },
      { dimension: "多模态", toolA: "文字+图像+语音", toolB: "文字+图像+语音+视频+代码执行", winner: "b" },
      { dimension: "对话风格", toolA: "直率幽默，不回避争议话题", toolB: "中立谨慎，安全性优先", winner: "tie" }
    ],
    bestForA: "Grok 更适合需要实时信息、高质量图像生成、以及喜欢直率对话风格的用户",
    bestForB: "ChatGPT 更适合需要完整生态、多模态能力和企业级功能的用户",
    pricingComparison: "Grok 免费版有限，SuperGrok $30/月；ChatGPT 免费版较慷慨，Plus $20/月，Pro $200/月"
  },
  {
    slug: "cursor-vs-windsurf",
    toolA: "cursor",
    toolB: "windsurf",
    title: "Cursor vs Windsurf：AI 代码编辑器谁更强？",
    verdict: "Cursor 在 Agent 能力和社区成熟度上领先，Windsurf 在价格和流畅体验上有优势",
    keyDifferences: [
      { dimension: "Agent 能力", toolA: "Composer 跨文件实现完整功能，成熟稳定", toolB: "Cascade Agent 能力强但偶尔不稳定", winner: "a" },
      { dimension: "价格", toolA: "Pro $20/月，500 次快速请求", toolB: "Pro $15/月，更多请求额度", winner: "b" },
      { dimension: "代码理解", toolA: "全仓库索引，上下文理解深入", toolB: "全仓库索引，理解能力接近", winner: "tie" },
      { dimension: "用户体验", toolA: "功能丰富但界面略复杂", toolB: "界面简洁流畅，上手更快", winner: "b" },
      { dimension: "社区生态", toolA: "用户基数大，教程和讨论丰富", toolB: "较新，社区规模较小", winner: "a" }
    ],
    bestForA: "Cursor 更适合需要成熟稳定 Agent 能力、重度 AI 编程的专业开发者",
    bestForB: "Windsurf 更适合预算敏感、追求简洁体验的开发者",
    pricingComparison: "Cursor Pro $20/月，Windsurf Pro $15/月，两者均基于 VS Code"
  },
  {
    slug: "deepl-vs-google-translate",
    toolA: "deepl",
    toolB: "gemini",
    title: "DeepL vs Google 翻译：AI 翻译质量对比",
    verdict: "DeepL 在欧洲语言翻译质量上领先，Google 在语言覆盖和免费额度上更强",
    keyDifferences: [
      { dimension: "翻译质量", toolA: "欧洲语言对翻译质量业界领先", toolB: "覆盖广但部分语言对质量一般", winner: "a" },
      { dimension: "语言数量", toolA: "支持 30+ 语言", toolB: "支持 130+ 语言", winner: "b" },
      { dimension: "文档翻译", toolA: "保持格式翻译 PDF/Word/PPT", toolB: "基础文档翻译，格式保持一般", winner: "a" },
      { dimension: "免费额度", toolA: "有限字数，3 文档/月", toolB: "基本无限制免费使用", winner: "b" },
      { dimension: "写作辅助", toolA: "DeepL Write 润色和改写功能", toolB: "无专门写作辅助功能", winner: "a" }
    ],
    bestForA: "DeepL 更适合欧洲语言翻译、需要保持文档格式、以及需要写作润色的专业用户",
    bestForB: "Google 翻译更适合需要广泛语言覆盖、免费使用、以及日常快速翻译的用户",
    pricingComparison: "DeepL Starter $10.49/月，Advanced $34.49/月；Google 翻译基本免费"
  },
  {
    slug: "sora-vs-runway",
    toolA: "sora",
    toolB: "runway",
    title: "Sora vs Runway：AI 视频生成谁是王者？",
    verdict: "Sora 在物理模拟和场景理解上领先，Runway 在工具完整性和可控性上更强",
    keyDifferences: [
      { dimension: "视频质量", toolA: "物理模拟极其自然，场景构建出色", toolB: "质量高但物理一致性偶有瑕疵", winner: "a" },
      { dimension: "可控性", toolA: "主要通过文字描述控制", toolB: "支持运动笔刷、参考图、精细控制", winner: "b" },
      { dimension: "工具生态", toolA: "集成在 ChatGPT 中，功能单一", toolB: "完整视频编辑工作台，功能丰富", winner: "b" },
      { dimension: "视频时长", toolA: "最长约 20 秒", toolB: "Gen-3 支持更长片段和延展", winner: "b" },
      { dimension: "获取方式", toolA: "需要 ChatGPT Plus 以上订阅", toolB: "独立订阅，有免费试用", winner: "b" }
    ],
    bestForA: "Sora 更适合追求极致物理真实感、已有 ChatGPT 订阅的创作者",
    bestForB: "Runway 更适合需要精细控制、完整编辑工具链的专业视频创作者",
    pricingComparison: "Sora 需 ChatGPT Plus $20/月起；Runway Standard $15/月，Pro $35/月"
  },
  {
    slug: "midjourney-vs-firefly",
    toolA: "midjourney",
    toolB: "adobe-firefly",
    title: "Midjourney vs Adobe Firefly：创意 vs 商业安全",
    verdict: "Midjourney 在艺术创意和美学上领先，Firefly 在商业安全和工具集成上更强",
    keyDifferences: [
      { dimension: "图像美学", toolA: "艺术感和创意表现力业界最强", toolB: "质量好但风格偏保守", winner: "a" },
      { dimension: "商业安全", toolA: "训练数据来源有争议", toolB: "全部授权数据，附带赔偿保障", winner: "b" },
      { dimension: "工具集成", toolA: "仅通过 Discord 或网页使用", toolB: "深度集成 Photoshop、Illustrator", winner: "b" },
      { dimension: "编辑能力", toolA: "生成后编辑能力有限", toolB: "生成填充、扩展等精细编辑强大", winner: "b" },
      { dimension: "社区", toolA: "活跃的创意社区，灵感丰富", toolB: "社区较小，以专业设计师为主", winner: "a" }
    ],
    bestForA: "Midjourney 更适合追求极致艺术效果的创意工作者和独立艺术家",
    bestForB: "Adobe Firefly 更适合需要商业授权、与设计工具集成的企业和专业设计师",
    pricingComparison: "Midjourney Basic $10/月，Standard $30/月；Firefly Premium $4.99/月，Creative Cloud $54.99/月"
  },
  {
    slug: "replit-ai-vs-lovable",
    toolA: "replit-ai",
    toolB: "lovable",
    title: "Replit AI vs Lovable：AI 应用生成器对比",
    verdict: "Replit 在开发环境完整性上领先，Lovable 在 UI 质量和易用性上更强",
    keyDifferences: [
      { dimension: "开发环境", toolA: "完整 IDE + 终端 + 数据库 + 部署", toolB: "专注前端生成，后端通过 Supabase", winner: "a" },
      { dimension: "UI 质量", toolA: "生成 UI 质量一般，需要调整", toolB: "生成 UI 设计精美，可直接使用", winner: "b" },
      { dimension: "易用性", toolA: "功能多但界面复杂", toolB: "对话式交互，极其简单", winner: "b" },
      { dimension: "语言支持", toolA: "50+ 编程语言", toolB: "主要 React/TypeScript", winner: "a" },
      { dimension: "价格", toolA: "Core $25/月起", toolB: "Pro $25/月，免费版可用", winner: "b" }
    ],
    bestForA: "Replit 更适合需要完整开发环境、多语言支持的开发者",
    bestForB: "Lovable 更适合快速生成精美 Web 应用的非技术用户和创业者",
    pricingComparison: "Replit Core $25/月，Pro $100/月；Lovable Free 可用，Pro $25/月"
  },
  {
    slug: "elevenlabs-vs-speechify",
    toolA: "elevenlabs",
    toolB: "speechify",
    title: "ElevenLabs vs Speechify：AI 语音工具对比",
    verdict: "ElevenLabs 在语音克隆和创作上领先，Speechify 在文字朗读和日常使用上更强",
    keyDifferences: [
      { dimension: "语音克隆", toolA: "业界最强语音克隆，几秒音频即可复制", toolB: "不支持自定义语音克隆", winner: "a" },
      { dimension: "朗读体验", toolA: "主要面向内容创作者", toolB: "专为阅读优化，浏览器扩展便捷", winner: "b" },
      { dimension: "API 能力", toolA: "强大的开发者 API，适合集成", toolB: "API 有限，主要面向终端用户", winner: "a" },
      { dimension: "使用场景", toolA: "配音、有声书、游戏角色", toolB: "文章朗读、电子书、学习辅助", winner: "tie" },
      { dimension: "价格", toolA: "Starter $5/月起", toolB: "Premium $11.58/月", winner: "a" }
    ],
    bestForA: "ElevenLabs 更适合内容创作者、开发者和需要语音克隆的专业用户",
    bestForB: "Speechify 更适合日常阅读、学习辅助和有阅读障碍的用户",
    pricingComparison: "ElevenLabs Starter $5/月，Pro $22/月；Speechify Premium $11.58/月"
  },
  {
    slug: "julius-ai-vs-hex",
    toolA: "julius-ai",
    toolB: "hex",
    title: "Julius AI vs Hex：AI 数据分析工具对比",
    verdict: "Julius 在易用性和零门槛上领先，Hex 在专业协作和企业功能上更强",
    keyDifferences: [
      { dimension: "易用性", toolA: "纯自然语言交互，零技术门槛", toolB: "需要基础 SQL/Python 知识", winner: "a" },
      { dimension: "专业深度", toolA: "适合探索性分析和快速洞察", toolB: "支持复杂分析和生产级工作流", winner: "b" },
      { dimension: "协作", toolA: "基础协作功能", toolB: "实时多人协作，类似 Google Docs", winner: "b" },
      { dimension: "数据源", toolA: "CSV、Excel、基础数据库", toolB: "数据仓库、数据湖、全部主流数据库", winner: "b" },
      { dimension: "价格", toolA: "Essential $20/月", toolB: "Professional $36/编辑者/月", winner: "a" }
    ],
    bestForA: "Julius 更适合不会编程但需要数据分析的业务人员和个人用户",
    bestForB: "Hex 更适合数据团队协作、需要连接企业数据源的专业分析师",
    pricingComparison: "Julius Essential $20/月，Pro $45/月；Hex Professional $36/编辑者/月"
  },
  {
    slug: "notion-ai-vs-taskade",
    toolA: "notion-ai",
    toolB: "taskade",
    title: "Notion AI vs Taskade：AI 办公工具对比",
    verdict: "Notion AI 在知识管理和文档上领先，Taskade 在任务管理和 AI Agent 上更强",
    keyDifferences: [
      { dimension: "知识管理", toolA: "强大的数据库和知识库系统", toolB: "基础知识管理，不如 Notion 灵活", winner: "a" },
      { dimension: "AI Agent", toolA: "AI 辅助写作和搜索", toolB: "可创建自定义 AI Agent 自动化工作流", winner: "b" },
      { dimension: "任务管理", toolA: "基础任务和项目管理", toolB: "任务、项目、思维导图一体化", winner: "b" },
      { dimension: "模板", toolA: "海量社区模板", toolB: "AI 生成模板，数量较少", winner: "a" },
      { dimension: "价格", toolA: "Plus $10/月 + AI $10/月", toolB: "Pro $19/月（含 AI）", winner: "tie" }
    ],
    bestForA: "Notion AI 更适合需要强大知识管理和文档协作的团队",
    bestForB: "Taskade 更适合需要 AI 自动化工作流和轻量项目管理的小团队",
    pricingComparison: "Notion Plus + AI 约 $20/月；Taskade Pro $19/月含全部 AI 功能"
  },
  {
    slug: "khanmigo-vs-duolingo-max",
    toolA: "khanmigo",
    toolB: "duolingo-max",
    title: "Khanmigo vs Duolingo Max：AI 教育工具对比",
    verdict: "Khanmigo 在学科辅导深度上领先，Duolingo Max 在语言学习体验上更强",
    keyDifferences: [
      { dimension: "学科覆盖", toolA: "数学、科学、编程等全学科", toolB: "仅语言学习", winner: "a" },
      { dimension: "教学方法", toolA: "苏格拉底式引导，深度理解", toolB: "游戏化 + AI 对话，轻松有趣", winner: "tie" },
      { dimension: "语言学习", toolA: "不专注语言学习", toolB: "40+ 语言，AI 角色扮演练口语", winner: "b" },
      { dimension: "教师工具", toolA: "教师版免费，备课和批改辅助", toolB: "无教师专用功能", winner: "a" },
      { dimension: "价格", toolA: "学生 $9/月，教师免费", toolB: "Max $13.99/月", winner: "a" }
    ],
    bestForA: "Khanmigo 更适合 K-12 学生的全学科辅导和教师教学辅助",
    bestForB: "Duolingo Max 更适合语言学习者，尤其是想要 AI 口语练习的用户",
    pricingComparison: "Khanmigo 学生 $9/月，教师免费；Duolingo Max $13.99/月"
  }
];

const existingSlugs = new Set(comparisons.map(c => c.slug));
const toAdd = newComparisons.filter(c => !existingSlugs.has(c.slug));
comparisons.push(...toAdd);
writeFileSync(path, JSON.stringify(comparisons, null, 2), 'utf-8');
console.log(`Added ${toAdd.length} comparisons. Total: ${comparisons.length}`);
