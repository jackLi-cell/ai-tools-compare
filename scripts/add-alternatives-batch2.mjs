/**
 * Add 5 new alternative recommendation pages
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');
const path = join(DATA, 'alternatives.json');
const alternatives = JSON.parse(readFileSync(path, 'utf-8'));

const newAlternatives = [
  {
    slug: "cursor-alternatives",
    tool: "cursor",
    title: "5 个 Cursor 替代品推荐（2026 年）",
    description: "Cursor 是目前最热门的 AI 代码编辑器，但 $20/月的价格和封闭生态让部分开发者寻找替代方案。",
    alternatives: [
      { slug: "windsurf", name: "Windsurf", reason: "同样基于 VS Code 的 AI 编辑器，价格更低（$15/月），界面更简洁流畅", prosVsOriginal: ["价格更低", "界面更简洁", "上手更快"], consVsOriginal: ["Agent 稳定性稍逊", "社区较小", "插件生态不如 Cursor"] },
      { slug: "aider", name: "Aider", reason: "完全开源免费的终端 AI 编程工具，支持任意 LLM，适合终端党", prosVsOriginal: ["完全免费开源", "支持任意 LLM", "Git 原生集成"], consVsOriginal: ["纯命令行界面", "需自备 API Key", "无图形化调试"] },
      { slug: "github-copilot", name: "GitHub Copilot", reason: "覆盖所有主流 IDE，企业集成最完善，适合不想换编辑器的开发者", prosVsOriginal: ["支持所有主流 IDE", "企业功能完善", "GitHub 深度集成"], consVsOriginal: ["Agent 能力较弱", "跨文件编辑不如 Cursor", "自定义程度低"] },
      { slug: "claude-code", name: "Claude Code", reason: "终端 AI Agent，擅长大型项目理解和复杂重构，适合高级开发者", prosVsOriginal: ["大型项目理解更深", "终端原生体验", "复杂重构能力强"], consVsOriginal: ["无图形界面", "需要 Claude API 订阅", "学习曲线较陡"] },
      { slug: "openai-codex", name: "OpenAI Codex", reason: "云端并行 Agent，可同时处理多个编程任务，适合需要批量开发的场景", prosVsOriginal: ["并行多任务", "云端沙箱安全", "GitHub PR 集成"], consVsOriginal: ["非实时交互", "需要 ChatGPT Plus", "延迟较高"] }
    ]
  },
  {
    slug: "deepl-alternatives",
    tool: "deepl",
    title: "4 个 DeepL 替代品推荐（2026 年）",
    description: "DeepL 翻译质量出色但支持语言有限且付费版价格不低，以下是值得考虑的替代方案。",
    alternatives: [
      { slug: "smartcat", name: "Smartcat", reason: "AI + 人工翻译一体化平台，适合需要高质量翻译且有预算的团队", prosVsOriginal: ["AI + 人工混合", "内置翻译人才市场", "CAT 工具完整"], consVsOriginal: ["纯机器翻译不如 DeepL", "界面复杂", "价格较高"] },
      { slug: "phrase", name: "Phrase", reason: "企业级翻译管理系统，适合需要持续本地化的软件产品", prosVsOriginal: ["TMS 功能完整", "开发工具集成好", "工作流自动化"], consVsOriginal: ["翻译质量依赖配置", "学习曲线陡", "面向企业定价"] },
      { slug: "lokalise", name: "Lokalise", reason: "专为软件本地化设计，支持 OTA 更新和 UI 截图上下文", prosVsOriginal: ["软件本地化专精", "OTA 更新", "截图上下文"], consVsOriginal: ["不适合文档翻译", "价格较高", "功能过于专业"] },
      { name: "Google Translate", website: "https://translate.google.com", reason: "完全免费且支持 130+ 语言，适合日常翻译和小语种需求", prosVsOriginal: ["完全免费", "130+ 语言", "即时翻译"], consVsOriginal: ["翻译质量不如 DeepL", "无文档格式保持", "无术语管理"] }
    ]
  },
  {
    slug: "runway-alternatives",
    tool: "runway",
    title: "5 个 Runway 替代品推荐（2026 年）",
    description: "Runway 是 AI 视频生成的先驱，但价格较高且额度有限。以下是值得考虑的替代方案。",
    alternatives: [
      { slug: "luma-dream-machine", name: "Luma Dream Machine", reason: "视频质量和运动自然度与 Runway 不相上下，多镜头工作流更强", prosVsOriginal: ["运动自然度极高", "多镜头工作流", "Ray3 模型物理模拟强"], consVsOriginal: ["编辑工具不如 Runway 完整", "价格也不低", "免费额度少"] },
      { slug: "sora", name: "Sora", reason: "OpenAI 出品，物理模拟最自然，适合已有 ChatGPT 订阅的用户", prosVsOriginal: ["物理模拟业界最强", "含在 ChatGPT 订阅中", "场景构建出色"], consVsOriginal: ["时长限制严格", "可控性不如 Runway", "排队时间长"] },
      { slug: "kling", name: "Kling", reason: "快手出品，中文提示词理解好，价格亲民，适合国内创作者", prosVsOriginal: ["中文理解优秀", "价格更低", "人物动作自然"], consVsOriginal: ["国际版功能有限", "画质稍逊", "风格偏向写实"] },
      { slug: "minimax-hailuo", name: "MiniMax (海螺AI)", reason: "生成速度极快且有免费额度，适合快速原型和轻度使用", prosVsOriginal: ["生成速度最快", "免费额度慷慨", "中文优化好"], consVsOriginal: ["视频时长短", "画质不如 Runway", "功能单一"] },
      { slug: "pika", name: "Pika", reason: "界面简洁易用，特效功能有趣，适合社交媒体短视频创作", prosVsOriginal: ["界面更简洁", "特效功能有趣", "价格更低"], consVsOriginal: ["视频质量稍逊", "时长限制", "专业功能少"] }
    ]
  },
  {
    slug: "notion-ai-alternatives",
    tool: "notion-ai",
    title: "4 个 Notion AI 替代品推荐（2026 年）",
    description: "Notion AI 需要额外 $10/月订阅，且 AI 功能相对基础。以下是值得考虑的替代方案。",
    alternatives: [
      { slug: "taskade", name: "Taskade", reason: "AI Agent + 任务管理一体化，可创建自定义自动化工作流", prosVsOriginal: ["AI Agent 自动化", "任务管理更强", "思维导图集成"], consVsOriginal: ["知识管理不如 Notion", "模板较少", "数据库功能弱"] },
      { slug: "gamma", name: "Gamma", reason: "AI 演示文稿生成专精，适合需要快速制作 PPT 的用户", prosVsOriginal: ["演示文稿生成更强", "设计质量高", "免费版可用"], consVsOriginal: ["不是通用办公工具", "无知识管理", "功能单一"] },
      { slug: "granola", name: "Granola", reason: "AI 会议笔记专精，隐私优先设计，适合重视隐私的专业人士", prosVsOriginal: ["隐私保护更好", "会议笔记专精", "界面极简"], consVsOriginal: ["仅 macOS", "功能单一", "无协作文档"] },
      { name: "Obsidian + AI 插件", website: "https://obsidian.md", reason: "本地优先的知识管理 + 社区 AI 插件，适合注重数据所有权的用户", prosVsOriginal: ["数据完全本地", "插件生态丰富", "一次付费永久使用"], consVsOriginal: ["需要自行配置 AI", "协作功能弱", "学习曲线较陡"] }
    ]
  },
  {
    slug: "elevenlabs-alternatives",
    tool: "elevenlabs",
    title: "4 个 ElevenLabs 替代品推荐（2026 年）",
    description: "ElevenLabs 语音克隆和生成质量极高，但价格不低且有字符限制。以下是替代方案。",
    alternatives: [
      { slug: "speechify", name: "Speechify", reason: "专注文字朗读场景，1000+ 语音，适合日常阅读和学习", prosVsOriginal: ["朗读体验更好", "浏览器扩展便捷", "OCR 扫描朗读"], consVsOriginal: ["无语音克隆", "创作功能弱", "API 有限"] },
      { slug: "murf-ai", name: "Murf AI", reason: "企业级配音平台，支持视频同步和团队协作", prosVsOriginal: ["视频同步配音", "团队协作", "企业功能完善"], consVsOriginal: ["语音自然度稍逊", "克隆能力弱", "价格也不低"] },
      { slug: "play-ht", name: "Play.ht", reason: "语音克隆质量接近 ElevenLabs，API 更灵活，适合开发者", prosVsOriginal: ["API 灵活", "语音克隆质量好", "价格稍低"], consVsOriginal: ["整体自然度略逊", "界面不如 ElevenLabs 精致", "社区较小"] },
      { slug: "descript", name: "Descript", reason: "音视频编辑 + AI 语音一体化，适合播客和视频创作者", prosVsOriginal: ["音视频编辑集成", "文字编辑音频", "屏幕录制"], consVsOriginal: ["语音生成不是核心", "克隆质量一般", "价格较高"] }
    ]
  }
];

const existingSlugs = new Set(alternatives.map(a => a.slug));
const toAdd = newAlternatives.filter(a => !existingSlugs.has(a.slug));
alternatives.push(...toAdd);
writeFileSync(path, JSON.stringify(alternatives, null, 2), 'utf-8');
console.log(`Added ${toAdd.length} alternatives. Total: ${alternatives.length}`);
