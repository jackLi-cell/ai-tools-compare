/**
 * Batch 5: Add 54 new tools to expand database to ~100 tools
 * All data verified against official websites (2026-05-24)
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');
const toolsPath = join(DATA, 'tools.json');

const tools = JSON.parse(readFileSync(toolsPath, 'utf-8'));

const newTools = [
  // ===== AI Chat (+2) =====
  {
    slug: "grok",
    name: "Grok",
    company: "xAI",
    category: "ai-chat",
    tagline: "xAI 打造的真相导向 AI 助手，实时信息访问与图像生成一体化",
    website: "https://grok.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础对话", "有限次数使用", "实时信息访问"] },
      { plan: "SuperGrok", price: 30, period: "月", features: ["无限对话", "DeepSearch 深度搜索", "Think 深度推理", "图像生成 Aurora", "语音对话"] },
      { plan: "SuperGrok Heavy", price: 300, period: "月", features: ["最高优先级", "最大用量上限", "企业级功能"] }
    ],
    pros: [
      "实时信息访问，无需额外搜索插件",
      "Aurora 图像生成质量极高，风格多样",
      "DeepSearch 深度搜索能力强，自动多步研究",
      "幽默风趣的对话风格，不回避争议话题"
    ],
    cons: [
      "免费版用量极少",
      "中文能力相比英文有差距",
      "生态系统不如 ChatGPT 丰富"
    ],
    bestFor: ["想要实时信息 + AI 对话一体化的用户", "需要高质量 AI 图像生成", "喜欢直率不回避话题的对话风格"],
    notFor: ["需要丰富插件生态的用户", "对 AI 安全性有极高要求的企业"],
    keyFeatures: {
      "DeepSearch": "自动多步网络搜索，综合多个来源生成带引用的深度报告",
      "Aurora 图像生成": "内置高质量图像生成，支持照片级真实感和多种艺术风格",
      "Think 模式": "深度推理模式，适合复杂逻辑和数学问题",
      "实时信息": "直接访问 X 平台和网络实时数据，无信息延迟"
    },
    freeLimit: "每天约 10 条消息，无 DeepSearch 和图像生成",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "notebooklm",
    name: "NotebookLM",
    company: "Google",
    category: "ai-chat",
    tagline: "基于你上传资料的 AI 研究助手，生成播客式音频摘要",
    website: "https://notebooklm.google",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础笔记本功能", "音频概览", "有限来源数量"] },
      { plan: "Plus", price: 7.99, period: "月", features: ["更多笔记本和来源", "5x 音频概览", "更多查询次数", "优先访问"] }
    ],
    pros: [
      "完全基于你上传的资料回答，极少幻觉",
      "Audio Overview 播客式摘要功能独一无二",
      "免费版功能已经非常强大",
      "支持 PDF、网页、YouTube 视频等多种来源"
    ],
    cons: [
      "不能联网搜索，只能基于已上传资料",
      "音频概览生成时间较长",
      "协作功能有限"
    ],
    bestFor: ["学术研究者需要快速理解大量论文", "学生复习备考", "想把长文档转为播客收听的用户"],
    notFor: ["需要实时联网搜索的用户", "需要通用 AI 对话的用户"],
    keyFeatures: {
      "Audio Overview": "将上传资料自动生成两人对话式播客音频摘要",
      "来源锚定": "所有回答都标注具体来源段落，可一键跳转验证",
      "多来源整合": "支持 PDF、Google Docs、网页、YouTube 等多种格式",
      "深度研究": "基于上传资料进行多步推理和主题分析"
    },
    freeLimit: "每个笔记本最多 50 个来源，有限音频概览次数",
    lastUpdated: "2026-05-24"
  },

  // ===== AI Coding (+4) =====
  {
    slug: "openai-codex",
    name: "Codex",
    company: "OpenAI",
    category: "ai-coding",
    tagline: "OpenAI 云端 AI 编程 Agent，支持并行多任务自主开发",
    website: "https://openai.com/codex/",
    pricing: [
      { plan: "ChatGPT Plus", price: 20, period: "月", features: ["30-150 本地任务/5小时", "基础 Agent 功能"] },
      { plan: "Pro", price: 200, period: "月", features: ["无限任务", "最高优先级", "最强模型访问"] },
      { plan: "API", price: 0, period: "按量", features: ["$1.5/百万输入 token", "$6/百万输出 token", "无限并发"] }
    ],
    pros: [
      "云端沙箱执行，不影响本地环境",
      "支持并行多个编程任务同时进行",
      "自动运行测试验证代码正确性",
      "与 GitHub 深度集成，可直接创建 PR"
    ],
    cons: [
      "需要 ChatGPT Plus 以上订阅",
      "云端执行有延迟，不如本地工具即时",
      "复杂项目理解能力有时不足"
    ],
    bestFor: ["需要同时处理多个编程任务的开发者", "想要 AI 自主完成完整功能开发", "团队协作中的代码审查和重构"],
    notFor: ["需要即时代码补全的场景", "离线开发环境"],
    keyFeatures: {
      "并行 Agent": "同时启动多个编程任务，各自独立运行在云端沙箱",
      "自动测试": "编写代码后自动运行项目测试套件验证正确性",
      "GitHub 集成": "直接读取仓库代码、创建分支和 Pull Request",
      "沙箱环境": "每个任务在隔离的云端环境中执行，安全可控"
    },
    freeLimit: "需要 ChatGPT Plus ($20/月) 起步",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "replit-ai",
    name: "Replit AI",
    company: "Replit",
    category: "ai-coding",
    tagline: "浏览器内 AI Agent，用自然语言描述即可生成全栈应用",
    website: "https://replit.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础 AI 辅助", "公开项目", "有限计算资源"] },
      { plan: "Core", price: 25, period: "月", features: ["$25 Agent 额度", "5 协作者", "无限工作区", "私有项目"] },
      { plan: "Pro", price: 100, period: "月", features: ["$100 Agent 额度", "15 协作者", "最强 AI 模型", "优先支持"] }
    ],
    pros: [
      "零配置开发环境，浏览器内完成一切",
      "AI Agent 可自主完成从设计到部署全流程",
      "内置数据库、认证、部署等基础设施",
      "支持 50+ 编程语言"
    ],
    cons: [
      "Agent 额度消耗快，复杂项目成本高",
      "生成代码质量不稳定，需要人工审查",
      "不适合大型企业级项目"
    ],
    bestFor: ["快速原型开发和 MVP 验证", "非程序员想要构建 Web 应用", "教育场景中的编程学习"],
    notFor: ["大型企业级项目开发", "需要精细控制开发环境的专业开发者"],
    keyFeatures: {
      "AI Agent": "描述需求后 AI 自主编写代码、安装依赖、调试错误",
      "即时部署": "一键将应用部署到生产环境，自动配置域名和 HTTPS",
      "协作开发": "实时多人协作编辑，类似 Google Docs 的体验",
      "全栈支持": "内置 PostgreSQL 数据库、认证系统、对象存储"
    },
    freeLimit: "有限 AI 辅助次数，公开项目，基础计算资源",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "aider",
    name: "Aider",
    company: "Paul Gauthier",
    category: "ai-coding",
    tagline: "开源终端 AI 结对编程工具，直接编辑本地文件并自动 Git 提交",
    website: "https://aider.chat",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["完全开源免费", "支持所有主流 LLM", "无限使用（需自备 API Key）"] }
    ],
    pros: [
      "完全开源免费，无订阅费用",
      "支持几乎所有 LLM（Claude、GPT、DeepSeek、本地模型）",
      "Git 原生：每次修改自动创建原子提交",
      "终端运行，与现有工作流无缝集成"
    ],
    cons: [
      "需要自备 LLM API Key（有 API 费用）",
      "纯命令行界面，学习曲线较陡",
      "没有图形界面，不适合可视化调试"
    ],
    bestFor: ["熟悉终端的资深开发者", "想要灵活选择 LLM 的用户", "注重隐私不想代码上传云端"],
    notFor: ["不熟悉命令行的初学者", "需要图形化 IDE 体验的用户"],
    keyFeatures: {
      "多 LLM 支持": "兼容 Claude、GPT-4o、DeepSeek、Gemini 及本地模型",
      "Git 原生": "每次代码修改自动创建描述性 Git 提交",
      "全仓库理解": "自动分析项目结构，理解文件间依赖关系",
      "IDE 集成": "支持在 VS Code、Neovim 等编辑器中通过 AI 注释触发"
    },
    freeLimit: "工具本身免费，需自付 LLM API 费用",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "lovable",
    name: "Lovable",
    company: "Lovable",
    category: "ai-coding",
    tagline: "AI 全栈应用生成器，用对话描述需求即可构建完整 Web 应用",
    website: "https://lovable.dev",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["5 每日额度", "公开项目", "5 子域名部署"] },
      { plan: "Pro", price: 25, period: "月", features: ["100 月额度 + 5 日额度", "私有项目", "自定义域名", "去除品牌标识"] },
      { plan: "Business", price: 50, period: "月", features: ["更多额度", "团队协作", "优先支持"] }
    ],
    pros: [
      "生成的应用质量高，UI 设计精美",
      "支持 Supabase 后端集成，真正全栈",
      "迭代式开发，可持续对话优化应用",
      "免费版即可体验完整功能"
    ],
    cons: [
      "复杂业务逻辑处理能力有限",
      "生成代码的可维护性需要评估",
      "额度消耗较快，频繁迭代成本高"
    ],
    bestFor: ["快速验证产品想法的创业者", "需要精美 UI 的 MVP 开发", "非技术人员构建内部工具"],
    notFor: ["需要复杂后端逻辑的企业应用", "对代码质量有极高要求的团队"],
    keyFeatures: {
      "对话式开发": "用自然语言描述需求，AI 生成完整前后端代码",
      "实时预览": "每次修改即时预览效果，所见即所得",
      "Supabase 集成": "一键连接 Supabase 数据库和认证系统",
      "一键部署": "生成的应用可直接部署到自定义域名"
    },
    freeLimit: "每天 5 次生成额度，仅公开项目",
    lastUpdated: "2026-05-24"
  },

  // ===== AI Image (+4) =====
  {
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    company: "Adobe",
    category: "ai-image",
    tagline: "商业安全的生成式 AI 图像工具，深度集成 Creative Cloud",
    website: "https://firefly.adobe.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限生成额度", "基础功能", "带水印"] },
      { plan: "Premium", price: 4.99, period: "月", features: ["更多生成额度", "无水印", "商业使用授权"] },
      { plan: "Creative Cloud", price: 54.99, period: "月", features: ["全套 Adobe 应用", "大量生成额度", "完整集成"] }
    ],
    pros: [
      "商业安全：训练数据均有授权，生成内容可商用",
      "与 Photoshop、Illustrator 等 Adobe 工具深度集成",
      "生成填充和扩展功能精准度极高",
      "支持矢量图形和设计模板生成"
    ],
    cons: [
      "创意自由度不如 Midjourney",
      "免费额度很少，需要付费订阅",
      "独立使用时功能不如集成在 Adobe 应用中强大"
    ],
    bestFor: ["需要商业授权的企业和设计师", "已使用 Adobe 生态的创意工作者", "需要精确编辑和局部生成的场景"],
    notFor: ["追求极致艺术创意的独立艺术家", "预算有限的个人用户"],
    keyFeatures: {
      "商业安全": "所有训练数据均获授权，生成内容附带知识产权赔偿保障",
      "生成填充": "在 Photoshop 中选区后用 AI 智能填充，无缝融合",
      "文字效果": "为文字添加 AI 生成的纹理和材质效果",
      "矢量生成": "在 Illustrator 中生成可编辑的矢量图形"
    },
    freeLimit: "每月约 25 生成额度，带水印",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "recraft",
    name: "Recraft",
    company: "Recraft",
    category: "ai-image",
    tagline: "专注品牌一致性的 AI 图像生成器，擅长矢量图和设计素材",
    website: "https://www.recraft.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["每日有限生成", "基础功能", "社区分享"] },
      { plan: "Pro", price: 25, period: "月", features: ["无限生成", "私有项目", "高分辨率输出", "API 访问"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["自定义模型训练", "品牌风格锁定", "专属支持"] }
    ],
    pros: [
      "矢量图生成质量业界领先",
      "品牌风格一致性控制出色",
      "支持 SVG 输出，设计师可直接编辑",
      "图标和 Logo 生成效果优秀"
    ],
    cons: [
      "照片级真实感不如 Midjourney",
      "社区和生态不如主流工具丰富",
      "中文提示词支持一般"
    ],
    bestFor: ["需要品牌一致性设计素材的团队", "UI/UX 设计师生成图标和插画", "需要可编辑矢量图的场景"],
    notFor: ["追求照片级真实感的用户", "纯艺术创作"],
    keyFeatures: {
      "矢量生成": "直接生成可编辑的 SVG 矢量图形",
      "品牌风格": "上传品牌素材后保持所有生成内容风格一致",
      "批量生成": "一次生成多个变体，快速迭代设计方案",
      "精确控制": "支持颜色、构图、风格的精细参数调节"
    },
    freeLimit: "每天约 10 次生成，基础分辨率",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "freepik-ai",
    name: "Freepik AI",
    company: "Freepik",
    category: "ai-image",
    tagline: "集成 30+ AI 模型的图像生成平台，内置海量素材库",
    website: "https://www.freepik.com/ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["每日有限生成", "带水印下载", "基础模型"] },
      { plan: "Premium", price: 8.99, period: "月", features: ["无限生成", "无水印", "全部 AI 模型", "商业授权"] }
    ],
    pros: [
      "集成 Flux、DALL-E、Stable Diffusion 等 30+ 模型",
      "与 Freepik 素材库无缝结合",
      "商业授权清晰，适合商用",
      "价格相对便宜"
    ],
    cons: [
      "单个模型的调优不如专门平台",
      "高级编辑功能有限",
      "生成速度受模型选择影响"
    ],
    bestFor: ["需要多种风格素材的设计师", "预算有限但需要商用授权", "想一站式获取素材和 AI 生成的用户"],
    notFor: ["追求单一模型极致效果的专业用户", "需要精细参数控制的技术用户"],
    keyFeatures: {
      "多模型选择": "30+ AI 模型可选，覆盖照片、插画、3D 等风格",
      "素材库集成": "AI 生成与亿级素材库无缝结合",
      "AI 编辑器": "对生成图像进行局部修改和风格调整",
      "商业授权": "所有生成内容均可商业使用"
    },
    freeLimit: "每天 3 次生成，带水印",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "grok-aurora",
    name: "Grok Aurora",
    company: "xAI",
    category: "ai-image",
    tagline: "Grok 内置的 AI 图像生成引擎，以照片级真实感著称",
    website: "https://grok.com",
    pricing: [
      { plan: "SuperGrok", price: 30, period: "月", features: ["包含在 SuperGrok 订阅中", "无限图像生成", "高分辨率输出"] }
    ],
    pros: [
      "照片级真实感极强，人物生成自然",
      "与 Grok 对话无缝集成，描述即生成",
      "风格多样性好，从写实到艺术均可",
      "生成速度快"
    ],
    cons: [
      "需要 SuperGrok 订阅（$30/月）",
      "无法独立使用，必须通过 Grok 对话",
      "编辑和精细控制功能有限"
    ],
    bestFor: ["已订阅 SuperGrok 的用户", "需要快速生成高质量配图", "社交媒体内容创作"],
    notFor: ["需要精细编辑控制的专业设计师", "预算有限的用户"],
    keyFeatures: {
      "照片级真实": "人物、场景生成极度逼真，细节丰富",
      "对话集成": "在 Grok 对话中直接描述即可生成图像",
      "风格多样": "支持写实、动漫、油画、水彩等多种风格",
      "快速迭代": "生成速度快，支持连续修改优化"
    },
    freeLimit: "需要 SuperGrok 订阅",
    lastUpdated: "2026-05-24"
  },

  // ===== AI Video (+4) =====
  {
    slug: "luma-dream-machine",
    name: "Luma Dream Machine",
    company: "Luma AI",
    category: "ai-video",
    tagline: "电影级 AI 视频生成器，支持多镜头工作流和迭代创作",
    website: "https://lumalabs.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限免费额度", "基础分辨率", "带水印"] },
      { plan: "Plus", price: 30, period: "月", features: ["更多生成额度", "720p 输出", "无水印"] },
      { plan: "Pro", price: 90, period: "月", features: ["大量额度", "1080p 输出", "4K 升级", "优先队列"] },
      { plan: "Ultra", price: 300, period: "月", features: ["最大额度", "最高优先级", "API 访问"] }
    ],
    pros: [
      "视频质量和运动自然度业界领先",
      "支持图像转视频和视频延展",
      "多镜头工作流，可构建连贯叙事",
      "Ray3 模型物理模拟极其逼真"
    ],
    cons: [
      "高质量生成需要较高订阅",
      "生成时间较长（1-3 分钟/段）",
      "免费版额度很少"
    ],
    bestFor: ["短视频和广告创意制作", "电影概念预览和分镜", "社交媒体视频内容创作"],
    notFor: ["需要长视频的用户", "预算有限的个人创作者"],
    keyFeatures: {
      "Ray3 模型": "最新一代视频模型，物理运动和光影极其自然",
      "多镜头工作流": "支持连续多个镜头生成，保持角色和场景一致性",
      "图像转视频": "上传静态图像，AI 赋予其自然运动",
      "4K 升级": "生成视频可升级至 4K 分辨率"
    },
    freeLimit: "每月约 5 次免费生成，带水印",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "sora",
    name: "Sora",
    company: "OpenAI",
    category: "ai-video",
    tagline: "OpenAI 文本转视频模型，生成逼真短视频片段",
    website: "https://openai.com/sora/",
    pricing: [
      { plan: "ChatGPT Plus", price: 20, period: "月", features: ["有限视频生成", "720p 输出", "5秒片段"] },
      { plan: "ChatGPT Pro", price: 200, period: "月", features: ["更多生成次数", "1080p 输出", "更长时长", "优先访问"] }
    ],
    pros: [
      "物理世界理解能力强，运动极其自然",
      "与 ChatGPT 生态集成，使用便捷",
      "文字理解和场景构建能力出色",
      "支持多种宽高比和风格"
    ],
    cons: [
      "生成时长有限（最长约 20 秒）",
      "需要 ChatGPT Plus 以上订阅",
      "排队时间较长，非即时生成"
    ],
    bestFor: ["需要高质量短视频素材的创作者", "广告和营销视频制作", "概念验证和创意探索"],
    notFor: ["需要长视频的用户", "需要精确控制每一帧的专业剪辑师"],
    keyFeatures: {
      "物理模拟": "理解物理规律，液体、布料、光影运动自然",
      "场景构建": "从文字描述构建复杂的三维场景",
      "风格控制": "支持电影、动画、纪录片等多种视觉风格",
      "音频生成": "部分版本支持同步生成环境音效"
    },
    freeLimit: "需要 ChatGPT Plus ($20/月) 起步",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "veo",
    name: "Veo",
    company: "Google DeepMind",
    category: "ai-video",
    tagline: "Google 最先进的视频生成模型，支持 4K 输出和电影级效果",
    website: "https://deepmind.google/technologies/veo/",
    pricing: [
      { plan: "Gemini Advanced", price: 19.99, period: "月", features: ["通过 Gemini 访问", "有限生成次数", "1080p 输出"] },
      { plan: "Vertex AI", price: 0, period: "按量", features: ["API 访问", "4K 输出", "企业级功能"] }
    ],
    pros: [
      "视频质量极高，支持 4K 分辨率",
      "与 Google 生态深度集成",
      "理解电影语言，镜头运动专业",
      "支持长达 2 分钟的视频生成"
    ],
    cons: [
      "独立消费者入口有限",
      "主要通过 Gemini 或 Vertex AI 访问",
      "生成速度较慢"
    ],
    bestFor: ["Google 生态用户", "需要 4K 高质量输出的专业制作", "企业级视频内容生产"],
    notFor: ["需要独立简单界面的个人用户", "预算有限的创作者"],
    keyFeatures: {
      "4K 输出": "支持生成 4K 分辨率视频，细节丰富",
      "电影镜头": "理解推拉摇移等专业镜头语言",
      "长时长": "支持生成长达 2 分钟的连贯视频",
      "物理一致性": "场景内物体运动符合物理规律"
    },
    freeLimit: "通过 Gemini Advanced 订阅访问",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "minimax-hailuo",
    name: "MiniMax (海螺AI)",
    company: "MiniMax",
    category: "ai-video",
    tagline: "国产 AI 视频生成器，速度快且有免费体验额度",
    website: "https://hailuoai.video",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["每日免费额度", "基础分辨率", "标准速度"] },
      { plan: "Pro", price: 9.99, period: "月", features: ["更多额度", "高分辨率", "优先队列", "无水印"] }
    ],
    pros: [
      "生成速度极快，通常 30 秒内出结果",
      "免费额度慷慨，适合体验和轻度使用",
      "中文提示词理解优秀",
      "人物动作和表情生成自然"
    ],
    cons: [
      "视频时长较短（5-10 秒）",
      "复杂场景偶尔出现物理错误",
      "国际版功能可能与国内版有差异"
    ],
    bestFor: ["快速生成短视频素材", "中文用户和中国市场内容", "预算有限想体验 AI 视频的用户"],
    notFor: ["需要长视频的专业制作", "对画质有极致要求的用户"],
    keyFeatures: {
      "极速生成": "30 秒内生成视频片段，业界最快之一",
      "中文优化": "对中文提示词理解准确，场景还原度高",
      "图像转视频": "上传图片即可生成动态视频",
      "免费体验": "每日提供免费生成额度"
    },
    freeLimit: "每天约 3-5 次免费生成",
    lastUpdated: "2026-05-24"
  },

  // ===== AI Voice & Music (+3) =====
  {
    slug: "udio",
    name: "Udio",
    company: "Udio",
    category: "ai-voice",
    tagline: "AI 音乐生成器，从文字描述创作完整歌曲含人声",
    website: "https://www.udio.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["每月 100 首", "基础功能", "非商用"] },
      { plan: "Standard", price: 10, period: "月", features: ["每月 1200 首", "商业使用", "高质量音频"] },
      { plan: "Pro", price: 30, period: "月", features: ["每月 4800 首", "优先生成", "API 访问"] }
    ],
    pros: [
      "人声质量极高，多语言演唱自然",
      "音乐风格覆盖广，从古典到电子均可",
      "支持歌词输入，精确控制歌曲内容",
      "免费版额度慷慨（100 首/月）"
    ],
    cons: [
      "生成歌曲版权归属仍有争议",
      "偶尔出现音频伪影",
      "长歌曲（>3分钟）质量可能下降"
    ],
    bestFor: ["独立音乐人寻找灵感和 Demo", "视频创作者需要背景音乐", "播客和内容创作者"],
    notFor: ["需要完全原创版权的商业音乐制作", "对音质有录音棚级要求的专业人士"],
    keyFeatures: {
      "全歌曲生成": "从文字描述生成包含人声、乐器的完整歌曲",
      "多语言演唱": "支持中文、英文、日文等多语言自然演唱",
      "风格控制": "精确指定音乐风格、情绪、节奏和乐器编排",
      "歌词输入": "可输入自定义歌词，AI 谱曲并演唱"
    },
    freeLimit: "每月 100 首歌曲生成，非商用",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "aiva",
    name: "AIVA",
    company: "AIVA Technologies",
    category: "ai-voice",
    tagline: "AI 作曲家，专注影视、游戏和广告配乐创作",
    website: "https://www.aiva.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["每月 3 首下载", "非商用", "有限风格"] },
      { plan: "Standard", price: 15, period: "月", features: ["每月 15 首下载", "商业使用", "全部风格"] },
      { plan: "Pro", price: 49, period: "月", features: ["每月 300 首下载", "完整版权", "MIDI/分轨导出"] }
    ],
    pros: [
      "古典和管弦乐编曲质量极高",
      "支持 MIDI 和分轨导出，可后期编辑",
      "预设风格丰富，覆盖影视游戏场景",
      "Pro 版拥有完整版权"
    ],
    cons: [
      "不擅长流行音乐和人声",
      "免费版限制严格",
      "界面相对复杂，学习成本高"
    ],
    bestFor: ["独立游戏开发者需要配乐", "视频创作者需要背景音乐", "广告和企业宣传片配乐"],
    notFor: ["需要人声歌曲的用户", "追求流行音乐风格的创作者"],
    keyFeatures: {
      "管弦乐编曲": "古典和电影配乐风格的 AI 作曲质量业界领先",
      "MIDI 导出": "导出 MIDI 文件，可在 DAW 中进一步编辑",
      "情绪控制": "精确控制音乐情绪、节奏和强度变化",
      "分轨输出": "Pro 版支持各乐器分轨导出"
    },
    freeLimit: "每月 3 首下载，非商用，版权归 AIVA",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "speechify",
    name: "Speechify",
    company: "Speechify",
    category: "ai-voice",
    tagline: "AI 文字转语音平台，1000+ 逼真语音，支持多场景朗读",
    website: "https://speechify.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限朗读", "基础语音", "浏览器扩展"] },
      { plan: "Premium", price: 11.58, period: "月", features: ["无限朗读", "1000+ 语音", "OCR 扫描", "多设备同步"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["API 访问", "自定义语音", "团队管理"] }
    ],
    pros: [
      "语音自然度极高，接近真人朗读",
      "支持 1000+ 种语音和 60+ 语言",
      "浏览器扩展可朗读任何网页",
      "支持 PDF、电子书、图片 OCR 朗读"
    ],
    cons: [
      "免费版功能非常有限",
      "高级语音需要付费订阅",
      "离线功能有限"
    ],
    bestFor: ["有阅读障碍或视力问题的用户", "通勤时想听文章/书籍的用户", "内容创作者需要配音"],
    notFor: ["需要语音克隆的专业用户", "预算有限的轻度用户"],
    keyFeatures: {
      "超自然语音": "AI 语音接近真人，支持情感和语调变化",
      "全平台朗读": "浏览器扩展、移动 App、桌面端全覆盖",
      "OCR 识别": "拍照或扫描纸质文档即可朗读",
      "速度控制": "支持 0.5x-4.5x 变速朗读"
    },
    freeLimit: "有限字数朗读，基础语音",
    lastUpdated: "2026-05-24"
  },

  // ===== AI Writing (+2) =====
  {
    slug: "sudowrite",
    name: "Sudowrite",
    company: "Sudowrite",
    category: "ai-writing",
    tagline: "专为小说作者设计的 AI 写作工具，擅长创意写作和故事构建",
    website: "https://www.sudowrite.com",
    pricing: [
      { plan: "Hobby", price: 19, period: "月", features: ["30000 AI 字数/月", "基础功能", "故事引擎"] },
      { plan: "Professional", price: 29, period: "月", features: ["90000 AI 字数/月", "全部功能", "优先支持"] },
      { plan: "Max", price: 59, period: "月", features: ["300000 AI 字数/月", "最大用量", "团队功能"] }
    ],
    pros: [
      "专为小说创作优化，理解叙事结构",
      "Story Engine 可生成完整章节大纲",
      "描写扩展功能让文字更生动",
      "保持角色一致性和故事连贯性"
    ],
    cons: [
      "不适合非虚构写作",
      "生成内容需要大量人工润色",
      "价格相对较高"
    ],
    bestFor: ["长篇小说作者克服写作瓶颈", "需要灵感和情节建议的创作者", "想要 AI 辅助扩写和润色的作家"],
    notFor: ["学术论文和商业文案写作", "需要事实准确性的非虚构写作"],
    keyFeatures: {
      "Story Engine": "输入大纲后 AI 生成完整章节草稿",
      "描写扩展": "选中段落后 AI 添加感官细节和环境描写",
      "角色一致性": "记住角色设定，保持对话和行为一致",
      "头脑风暴": "提供情节转折、角色发展等创意建议"
    },
    freeLimit: "无免费版，提供试用期",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "writer",
    name: "Writer",
    company: "Writer",
    category: "ai-writing",
    tagline: "企业级 AI 写作平台，品牌语调管控和内容治理",
    website: "https://writer.com",
    pricing: [
      { plan: "Team", price: 18, period: "人/月", features: ["AI 写作助手", "品牌语调", "模板库", "基础分析"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["自定义 AI 模型", "知识图谱", "API 集成", "合规审查"] }
    ],
    pros: [
      "品牌语调一致性控制业界最强",
      "企业级安全和合规功能完善",
      "支持自定义术语表和写作规范",
      "与企业工具链深度集成"
    ],
    cons: [
      "面向企业定价，个人用户成本高",
      "创意写作能力不如通用 AI",
      "需要前期配置品牌规范"
    ],
    bestFor: ["需要统一品牌声音的大型企业", "营销团队批量生产内容", "有严格合规要求的行业"],
    notFor: ["个人创作者", "预算有限的小团队"],
    keyFeatures: {
      "品牌语调": "定义并强制执行品牌写作风格和用词规范",
      "知识图谱": "连接企业内部知识库，确保内容准确性",
      "合规审查": "自动检查内容是否符合行业法规要求",
      "多渠道输出": "一次创作，适配邮件、社交、网页等多个渠道"
    },
    freeLimit: "无免费版，提供企业试用",
    lastUpdated: "2026-05-24"
  },

  // ===== AI Productivity (+3) =====
  {
    slug: "tome",
    name: "Tome",
    company: "Tome",
    category: "ai-productivity",
    tagline: "AI 驱动的演示文稿和叙事工具，专为销售和营销团队设计",
    website: "https://tome.app",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限创建次数", "基础模板", "Tome 品牌水印"] },
      { plan: "Professional", price: 16, period: "月", features: ["无限创建", "自定义品牌", "分析追踪", "PDF 导出"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["团队协作", "SSO", "高级分析", "API"] }
    ],
    pros: [
      "AI 一键生成完整演示文稿",
      "设计感强，模板质量高",
      "内置观看分析，追踪观众互动",
      "支持嵌入视频、3D 等多媒体"
    ],
    cons: [
      "导出格式有限（非标准 PPT）",
      "自定义布局灵活度不如 PowerPoint",
      "免费版功能受限"
    ],
    bestFor: ["销售团队快速制作提案", "营销人员制作品牌演示", "创业者制作融资 Pitch Deck"],
    notFor: ["需要复杂动画的演示", "习惯 PowerPoint 精细排版的用户"],
    keyFeatures: {
      "AI 生成": "输入主题即可生成完整演示文稿含文案和配图",
      "观看分析": "追踪谁看了、看了多久、在哪页停留最久",
      "品牌定制": "上传品牌素材后所有演示自动应用品牌风格",
      "多媒体嵌入": "支持嵌入视频、Figma、网页等交互内容"
    },
    freeLimit: "有限创建次数，带 Tome 水印",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "reclaim-ai",
    name: "Reclaim AI",
    company: "Reclaim AI",
    category: "ai-productivity",
    tagline: "AI 日程管理助手，自动优化日历安排任务和习惯",
    website: "https://reclaim.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["智能日程安排", "习惯追踪", "1 个日历连接"] },
      { plan: "Starter", price: 8, period: "人/月", features: ["团队协作", "优先级排序", "Slack 集成"] },
      { plan: "Business", price: 12, period: "人/月", features: ["高级分析", "多日历", "自动化工作流"] }
    ],
    pros: [
      "自动为任务找到最佳时间段",
      "智能保护专注时间和休息时间",
      "与 Google Calendar 深度集成",
      "免费版功能已经很实用"
    ],
    cons: [
      "主要支持 Google Calendar",
      "初始配置需要一定时间",
      "对非英语用户界面不够友好"
    ],
    bestFor: ["日程繁忙需要自动化管理的专业人士", "想要保护深度工作时间的开发者", "需要协调团队日程的管理者"],
    notFor: ["日程简单的用户", "不使用 Google Calendar 的用户"],
    keyFeatures: {
      "智能排程": "AI 自动为任务找到日历中的最佳时间段",
      "习惯保护": "确保运动、午餐、专注时间等习惯不被会议挤占",
      "团队协调": "自动找到团队成员都有空的会议时间",
      "时间分析": "可视化展示时间分配，发现效率瓶颈"
    },
    freeLimit: "基础智能排程，1 个日历，3 个习惯",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "granola",
    name: "Granola",
    company: "Granola",
    category: "ai-productivity",
    tagline: "AI 会议笔记本，用你的笔记风格增强会议记录",
    website: "https://www.granola.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["每月 25 次会议", "基础 AI 增强", "本地存储"] },
      { plan: "Pro", price: 18, period: "月", features: ["无限会议", "高级 AI 功能", "搜索和标签", "集成"] },
      { plan: "Business", price: 14, period: "人/月", features: ["团队共享", "管理后台", "SSO"] }
    ],
    pros: [
      "不录音不转录，保护隐私",
      "结合你的手动笔记和 AI 补充，风格一致",
      "界面极简优雅，使用体验好",
      "免费版 25 次/月已够轻度使用"
    ],
    cons: [
      "目前仅支持 macOS",
      "不提供完整转录文本",
      "集成第三方工具有限"
    ],
    bestFor: ["重视隐私但想要 AI 辅助的专业人士", "喜欢手动记笔记但想要 AI 补充的用户", "Mac 用户"],
    notFor: ["需要完整逐字转录的用户", "Windows/Linux 用户"],
    keyFeatures: {
      "隐私优先": "不录音不上传，仅在本地处理会议音频",
      "笔记增强": "你记关键词，AI 自动补充完整上下文",
      "风格一致": "学习你的笔记风格，输出与你手写风格一致",
      "快速回顾": "会后一键生成结构化摘要和行动项"
    },
    freeLimit: "每月 25 次会议记录",
    lastUpdated: "2026-05-24"
  },

  // ===== AI Design (+2) =====
  {
    slug: "galileo-ai",
    name: "Galileo AI",
    company: "Galileo AI",
    category: "ai-design",
    tagline: "AI UI/UX 设计工具，从文字描述生成可编辑的界面设计",
    website: "https://www.usegalileo.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限生成次数", "基础模板", "社区分享"] },
      { plan: "Pro", price: 19, period: "月", features: ["无限生成", "Figma 导出", "自定义设计系统"] },
      { plan: "Team", price: 0, period: "定制", features: ["团队协作", "品牌资产管理", "API"] }
    ],
    pros: [
      "生成的 UI 设计质量极高，可直接使用",
      "支持导出到 Figma 继续编辑",
      "理解设计规范和组件系统",
      "大幅缩短设计初稿时间"
    ],
    cons: [
      "复杂交互设计仍需人工完善",
      "生成结果有时不符合特定品牌风格",
      "目前主要支持 Web 和移动端 UI"
    ],
    bestFor: ["快速生成设计原型的产品经理", "需要 UI 灵感的设计师", "没有设计师的创业团队"],
    notFor: ["需要像素级精确控制的资深设计师", "复杂交互动效设计"],
    keyFeatures: {
      "文字转 UI": "描述界面需求即可生成完整的 UI 设计稿",
      "Figma 导出": "生成结果可导出为 Figma 文件，完全可编辑",
      "设计系统": "支持自定义组件库和设计规范",
      "响应式": "自动生成桌面和移动端适配版本"
    },
    freeLimit: "每天有限生成次数",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "krea-ai",
    name: "Krea AI",
    company: "Krea",
    category: "ai-design",
    tagline: "实时 AI 设计工具，通过视觉控制生成和增强图像",
    website: "https://www.krea.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限生成", "基础功能", "社区模型"] },
      { plan: "Pro", price: 24, period: "月", features: ["无限生成", "实时画布", "4K 升级", "视频生成"] },
      { plan: "Max", price: 48, period: "月", features: ["最大用量", "优先队列", "API 访问"] }
    ],
    pros: [
      "实时画布：画草图即时看到 AI 渲染效果",
      "图像增强和 4K 升级质量出色",
      "支持多种视觉控制方式（草图、参考图、文字）",
      "视频生成功能不断完善"
    ],
    cons: [
      "实时功能需要较好的网络",
      "免费版功能有限",
      "学习曲线比纯文字生成工具陡"
    ],
    bestFor: ["需要实时视觉反馈的设计师", "概念艺术和插画创作", "需要图像增强和升级的用户"],
    notFor: ["只需要简单文字生成图像的用户", "网络条件差的环境"],
    keyFeatures: {
      "实时画布": "在画布上绘制草图，AI 实时渲染为精美图像",
      "图像增强": "低分辨率图像一键升级至 4K，细节自动补充",
      "风格迁移": "上传参考图，将其风格应用到新生成的图像",
      "视频生成": "支持图像转视频和文字转视频"
    },
    freeLimit: "每天有限生成次数，基础分辨率",
    lastUpdated: "2026-05-24"
  },

  // ===== NEW: AI Search & Research (6) =====
  {
    slug: "elicit",
    name: "Elicit",
    company: "Elicit",
    category: "ai-search",
    tagline: "AI 学术研究助手，自动搜索论文、提取数据和系统综述",
    website: "https://elicit.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["无限论文搜索", "有限 PDF 提取", "基础功能"] },
      { plan: "Plus", price: 12, period: "月", features: ["50 次 PDF 提取/月", "高级筛选", "数据导出"] },
      { plan: "Pro", price: 49, period: "月", features: ["200+ PDF 提取", "系统综述工具", "批量处理"] }
    ],
    pros: [
      "1.25 亿篇论文数据库，语义搜索精准",
      "自动提取论文方法、结果和关键数据",
      "系统综述筛选流程专业完整",
      "所有回答附带论文来源引用"
    ],
    cons: [
      "免费版 PDF 提取次数有限",
      "主要面向英文学术论文",
      "不适合非学术类信息搜索"
    ],
    bestFor: ["研究生和博士做文献综述", "需要系统综述的学术研究者", "想快速了解某领域研究现状"],
    notFor: ["日常信息搜索", "非学术类内容查找"],
    keyFeatures: {
      "语义搜索": "理解研究问题语义，找到最相关论文而非关键词匹配",
      "数据提取": "自动从论文中提取样本量、方法、结果等结构化数据",
      "系统综述": "支持纳入/排除标准筛选，可处理 4 万篇论文",
      "引用追踪": "所有 AI 回答精确标注来源论文和段落"
    },
    freeLimit: "无限搜索，每月有限 PDF 深度提取",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "consensus",
    name: "Consensus",
    company: "Consensus",
    category: "ai-search",
    tagline: "AI 学术搜索引擎，从 2 亿+ 论文中提取科学共识",
    website: "https://consensus.app",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限搜索", "基础摘要", "论文列表"] },
      { plan: "Premium", price: 8.99, period: "月", features: ["无限搜索", "AI 综合分析", "书签和列表", "GPT-4 增强"] }
    ],
    pros: [
      "直接回答科学问题，附带论文证据",
      "Consensus Meter 显示研究共识程度",
      "界面简洁，比传统学术搜索易用",
      "价格亲民"
    ],
    cons: [
      "仅覆盖学术论文，不含书籍和报告",
      "中文论文覆盖有限",
      "深度分析能力不如 Elicit"
    ],
    bestFor: ["快速查找科学证据支持观点", "学生写论文找参考文献", "科普作者验证事实"],
    notFor: ["需要深度系统综述的研究者", "非学术类信息搜索"],
    keyFeatures: {
      "共识度量": "显示研究社区对某问题的共识程度（支持/反对/中立）",
      "AI 摘要": "综合多篇论文生成问题的科学回答",
      "论文筛选": "按研究类型、样本量、发表时间等精确筛选",
      "引用导出": "一键导出引用格式，支持 APA、MLA 等"
    },
    freeLimit: "每天有限搜索次数，基础功能",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "semantic-scholar",
    name: "Semantic Scholar",
    company: "Allen Institute for AI",
    category: "ai-search",
    tagline: "免费 AI 学术搜索引擎，索引 2.2 亿+ 论文并提供智能推荐",
    website: "https://www.semanticscholar.org",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["完全免费", "无限搜索", "AI 摘要", "引用图谱"] }
    ],
    pros: [
      "完全免费，无任何付费墙",
      "2.2 亿+ 论文索引，覆盖面极广",
      "引用图谱可视化论文间关系",
      "AI 生成的 TLDR 摘要节省时间"
    ],
    cons: [
      "AI 功能不如付费工具深入",
      "界面相对学术化，不够直观",
      "数据提取功能有限"
    ],
    bestFor: ["所有需要学术搜索的研究者", "想要免费替代 Google Scholar 的用户", "追踪领域最新论文"],
    notFor: ["需要深度 AI 分析的用户", "非学术搜索需求"],
    keyFeatures: {
      "TLDR 摘要": "AI 为每篇论文生成一句话核心摘要",
      "引用图谱": "可视化展示论文引用关系和影响力",
      "研究警报": "关注话题或作者，新论文自动通知",
      "开放 API": "免费 API 供开发者构建学术应用"
    },
    freeLimit: "完全免费，无限制",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "scite",
    name: "Scite",
    company: "Scite",
    category: "ai-search",
    tagline: "AI 引用分析工具，展示论文被支持还是被质疑",
    website: "https://scite.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限搜索", "基础引用信息"] },
      { plan: "Individual", price: 20, period: "月", features: ["无限搜索", "智能引用分析", "AI 助手", "自定义仪表盘"] },
      { plan: "Team", price: 0, period: "定制", features: ["团队协作", "机构访问", "API"] }
    ],
    pros: [
      "独特的引用上下文分析（支持/对比/提及）",
      "帮助判断研究结论的可靠性",
      "AI 助手可回答基于文献的问题",
      "与 Zotero 等工具集成"
    ],
    cons: [
      "免费版功能非常有限",
      "主要覆盖英文文献",
      "学习如何解读引用分析需要时间"
    ],
    bestFor: ["需要评估论文可靠性的研究者", "写综述时判断证据强度", "学术出版前的文献验证"],
    notFor: ["初级学术搜索需求", "非学术用户"],
    keyFeatures: {
      "智能引用": "分析每条引用是支持、对比还是仅提及被引论文",
      "可靠性评估": "基于引用网络评估研究结论的证据强度",
      "AI 助手": "基于文献回答研究问题，附带引用证据",
      "引用报告": "为任何论文生成完整的引用上下文报告"
    },
    freeLimit: "有限搜索，基础引用信息",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "you-com",
    name: "You.com",
    company: "You.com",
    category: "ai-search",
    tagline: "AI 搜索引擎，多模式覆盖研究、编程和创意任务",
    website: "https://you.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础 AI 搜索", "有限高级模式", "广告支持"] },
      { plan: "Pro", price: 15, period: "月", features: ["无限高级搜索", "多模型选择", "无广告", "文件上传"] }
    ],
    pros: [
      "多种搜索模式（研究、编程、创意）",
      "支持选择不同 AI 模型回答",
      "隐私保护好，不追踪用户",
      "免费版功能已经实用"
    ],
    cons: [
      "知名度不如 Perplexity",
      "部分高级功能需要付费",
      "中文搜索结果质量一般"
    ],
    bestFor: ["注重隐私的搜索用户", "需要多种 AI 模式的研究者", "想要 Google 替代品的用户"],
    notFor: ["习惯传统搜索引擎的用户", "主要搜索中文内容的用户"],
    keyFeatures: {
      "多模式搜索": "Research、Code、Create 等专用搜索模式",
      "模型选择": "可选 GPT-4、Claude、Gemini 等模型回答问题",
      "隐私优先": "不追踪搜索历史，不建立用户画像",
      "来源引用": "所有回答附带网页来源链接"
    },
    freeLimit: "基础 AI 搜索免费，高级模式有限次数",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "scispace",
    name: "SciSpace",
    company: "SciSpace",
    category: "ai-search",
    tagline: "AI 论文阅读和理解工具，一键解释复杂学术内容",
    website: "https://typeset.io",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限论文解释", "基础搜索", "Chrome 扩展"] },
      { plan: "Premium", price: 12, period: "月", features: ["无限解释", "文献综述", "数据提取", "多语言"] }
    ],
    pros: [
      "一键解释论文中的复杂段落和公式",
      "支持 PDF 上传后逐段提问",
      "Chrome 扩展可在任何论文页面使用",
      "支持多语言解释"
    ],
    cons: [
      "深度分析能力不如 Elicit",
      "免费版限制较多",
      "偶尔解释不够准确"
    ],
    bestFor: ["阅读英文论文有困难的非英语研究者", "需要快速理解陌生领域论文的学生", "跨学科研究者"],
    notFor: ["需要系统综述功能的研究者", "已熟悉领域的资深研究者"],
    keyFeatures: {
      "论文解释": "选中任何段落，AI 用简单语言解释含义",
      "公式解读": "自动识别并解释数学公式和统计方法",
      "文献综述": "基于多篇论文生成主题综述",
      "多语言": "支持将论文内容翻译和解释为多种语言"
    },
    freeLimit: "每天有限解释次数",
    lastUpdated: "2026-05-24"
  },

  // ===== NEW: AI Data & Analytics (5) =====
  {
    slug: "julius-ai",
    name: "Julius AI",
    company: "Julius AI",
    category: "ai-data",
    tagline: "AI 数据分析工作台，用自然语言查询数据生成图表和洞察",
    website: "https://julius.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限消息", "基础图表", "CSV 上传"] },
      { plan: "Essential", price: 20, period: "月", features: ["250 消息/月", "高级图表", "多数据源"] },
      { plan: "Pro", price: 45, period: "月", features: ["无限消息", "16GB RAM", "高级推理", "API"] }
    ],
    pros: [
      "自然语言即可完成复杂数据分析",
      "自动生成精美可视化图表",
      "支持 CSV、Excel、数据库等多种数据源",
      "内置 Python/R 执行环境"
    ],
    cons: [
      "免费版消息数很少",
      "大数据集处理速度有限",
      "复杂统计分析偶尔不准确"
    ],
    bestFor: ["不会编程但需要数据分析的业务人员", "快速探索性数据分析", "生成数据报告和可视化"],
    notFor: ["需要处理 TB 级大数据的工程师", "需要实时数据流分析"],
    keyFeatures: {
      "自然语言查询": "用中文或英文描述分析需求，AI 自动执行",
      "智能可视化": "自动选择最合适的图表类型展示数据",
      "多数据源": "支持 CSV、Excel、PostgreSQL、MySQL 等",
      "代码透明": "展示 AI 生成的 Python 代码，可审查和修改"
    },
    freeLimit: "有限消息数，基础功能",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "hex",
    name: "Hex",
    company: "Hex Technologies",
    category: "ai-data",
    tagline: "协作式数据工作台，AI 驱动的 SQL 和 Python 分析平台",
    website: "https://hex.tech",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["1 用户", "基础 AI", "社区支持"] },
      { plan: "Professional", price: 36, period: "编辑者/月", features: ["团队协作", "AI Magic", "调度任务", "版本控制"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["SSO", "高级安全", "专属支持", "自定义集成"] }
    ],
    pros: [
      "SQL + Python + 可视化一体化工作台",
      "AI Magic 自动生成查询和分析代码",
      "协作体验优秀，类似 Google Docs",
      "支持定时任务和自动化报告"
    ],
    cons: [
      "学习曲线较陡，需要一定技术基础",
      "价格较高，按编辑者收费",
      "GPU 和高级功能额外收费"
    ],
    bestFor: ["数据团队协作分析", "需要 SQL + Python 混合分析的分析师", "定期生成数据报告的团队"],
    notFor: ["不懂 SQL/Python 的纯业务用户", "个人轻度数据分析"],
    keyFeatures: {
      "AI Magic": "自然语言描述需求，AI 生成 SQL 查询和 Python 代码",
      "混合笔记本": "SQL、Python、Markdown、图表在同一文档中混合使用",
      "实时协作": "多人同时编辑同一分析文档",
      "调度发布": "分析结果定时刷新并自动发送报告"
    },
    freeLimit: "1 用户，基础 AI 功能",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "rows-ai",
    name: "Rows AI",
    company: "Rows",
    category: "ai-data",
    tagline: "AI 增强的在线电子表格，自然语言分析数据生成摘要",
    website: "https://rows.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["无限表格", "基础 AI", "50 行 AI 分析"] },
      { plan: "Pro", price: 59, period: "工作区/月", features: ["无限 AI 分析", "API 集成", "自动化", "优先支持"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["SSO", "审计日志", "专属支持"] }
    ],
    pros: [
      "电子表格界面熟悉，学习成本低",
      "AI 分析师功能一键生成数据洞察",
      "内置 50+ 数据源集成",
      "支持自动化工作流"
    ],
    cons: [
      "免费版 AI 分析行数有限",
      "复杂分析不如专业 BI 工具",
      "大数据量性能有限"
    ],
    bestFor: ["习惯电子表格但想要 AI 增强的用户", "营销和运营团队的数据分析", "快速生成数据报告"],
    notFor: ["需要处理大规模数据的工程师", "需要复杂统计建模的分析师"],
    keyFeatures: {
      "AI 分析师": "选中数据范围，AI 自动生成摘要、趋势和建议",
      "数据集成": "内置 HubSpot、Stripe、GA4 等 50+ 数据源连接",
      "自动化": "设置触发条件自动刷新数据和发送报告",
      "图表生成": "AI 自动选择最佳图表类型可视化数据"
    },
    freeLimit: "无限表格，AI 分析限 50 行",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "akkio",
    name: "Akkio",
    company: "Akkio",
    category: "ai-data",
    tagline: "无代码 AI 分析平台，预测建模和数据可视化一站式解决",
    website: "https://www.akkio.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限数据行", "基础预测", "3 个数据集"] },
      { plan: "Professional", price: 49, period: "月", features: ["25万行", "无限预测", "API", "白标报告"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["无限数据", "自定义模型", "专属支持"] }
    ],
    pros: [
      "无代码即可构建预测模型",
      "从数据上传到预测结果仅需几分钟",
      "支持白标嵌入客户报告",
      "自动特征工程和模型选择"
    ],
    cons: [
      "模型可解释性有限",
      "免费版数据量限制严格",
      "高级自定义需要升级"
    ],
    bestFor: ["营销团队预测客户流失", "销售团队做收入预测", "不会编程但需要 ML 的业务团队"],
    notFor: ["需要深度自定义模型的数据科学家", "大规模生产环境部署"],
    keyFeatures: {
      "无代码预测": "上传数据后 AI 自动构建预测模型",
      "自动 ML": "自动特征工程、模型选择和超参数调优",
      "实时预测": "模型部署后可实时接收新数据做预测",
      "白标报告": "生成的分析报告可嵌入自有品牌"
    },
    freeLimit: "3 个数据集，有限行数",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "polymer",
    name: "Polymer",
    company: "Polymer Search",
    category: "ai-data",
    tagline: "AI 商业智能工具，将电子表格秒变交互式仪表盘",
    website: "https://www.polymersearch.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["1 工作区", "5 个视图", "基础 AI"] },
      { plan: "Starter", price: 20, period: "月", features: ["无限视图", "AI 洞察", "分享和嵌入"] },
      { plan: "Pro", price: 40, period: "月", features: ["多工作区", "高级 AI", "自动化", "API"] }
    ],
    pros: [
      "上传 CSV 即可自动生成仪表盘",
      "AI 自动发现数据中的趋势和异常",
      "生成的仪表盘可分享和嵌入",
      "界面直观，无需技术背景"
    ],
    cons: [
      "数据源类型有限（主要是 CSV/表格）",
      "自定义可视化灵活度不如 Tableau",
      "大数据量处理能力有限"
    ],
    bestFor: ["需要快速可视化数据的业务人员", "向客户展示数据报告", "小团队的轻量 BI 需求"],
    notFor: ["需要连接实时数据库的企业", "复杂 BI 需求"],
    keyFeatures: {
      "自动仪表盘": "上传数据后 AI 自动生成交互式仪表盘",
      "AI 洞察": "自动发现数据趋势、异常和相关性",
      "分享嵌入": "生成的仪表盘可通过链接分享或嵌入网页",
      "自然语言查询": "用自然语言提问，AI 返回数据答案"
    },
    freeLimit: "1 工作区，5 个视图",
    lastUpdated: "2026-05-24"
  },

  // ===== NEW: AI Customer Service (5) =====
  {
    slug: "intercom-fin",
    name: "Intercom Fin",
    company: "Intercom",
    category: "ai-customer-service",
    tagline: "AI 客服 Agent，按解决量计费，自动处理客户咨询",
    website: "https://www.intercom.com",
    pricing: [
      { plan: "Essential", price: 29, period: "座席/月", features: ["Fin AI Agent", "共享收件箱", "基础自动化"] },
      { plan: "Advanced", price: 85, period: "座席/月", features: ["高级自动化", "多渠道", "工单系统"] },
      { plan: "Fin AI Agent", price: 0.99, period: "每次解决", features: ["按解决量付费", "无需座席", "24/7 自动回复"] }
    ],
    pros: [
      "按实际解决量计费，ROI 清晰",
      "基于知识库自动回答，准确率高",
      "与人工客服无缝切换",
      "支持多语言和多渠道"
    ],
    cons: [
      "整体平台价格较高",
      "需要维护高质量知识库",
      "复杂问题仍需人工介入"
    ],
    bestFor: ["SaaS 公司的客户支持", "需要 24/7 自动回复的团队", "想要降低客服成本的企业"],
    notFor: ["预算有限的小团队", "不愿维护知识库的团队"],
    keyFeatures: {
      "AI Agent": "基于知识库自动回答客户问题，无需人工",
      "按解决计费": "$0.99/次成功解决，未解决不收费",
      "多渠道": "覆盖网页聊天、邮件、社交媒体等渠道",
      "人机协作": "AI 无法解决时自动转接人工，附带上下文"
    },
    freeLimit: "14 天免费试用",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "tidio",
    name: "Tidio (Lyro AI)",
    company: "Tidio",
    category: "ai-customer-service",
    tagline: "电商 AI 客服聊天机器人，自动解决率高达 67%",
    website: "https://www.tidio.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["50 次 AI 对话/月", "实时聊天", "基础自动化"] },
      { plan: "Starter", price: 29, period: "月", features: ["100 次 AI 对话", "分析面板", "实时访客列表"] },
      { plan: "Growth", price: 59, period: "月", features: ["2000 次 AI 对话", "高级分析", "A/B 测试"] }
    ],
    pros: [
      "专为电商优化，理解购物场景",
      "Lyro AI 自动解决率高达 67%",
      "安装简单，5 分钟即可上线",
      "免费版即可体验 AI 功能"
    ],
    cons: [
      "AI 对话次数按量限制",
      "高级功能需要较高订阅",
      "主要面向中小电商"
    ],
    bestFor: ["Shopify 等电商店铺", "中小企业的在线客服", "想快速部署 AI 客服的团队"],
    notFor: ["大型企业级客服需求", "非电商场景"],
    keyFeatures: {
      "Lyro AI": "基于 FAQ 和产品信息自动回答客户问题",
      "电商集成": "与 Shopify、WooCommerce 等平台深度集成",
      "实时聊天": "AI 和人工客服在同一界面无缝切换",
      "访客追踪": "实时查看网站访客行为，主动发起对话"
    },
    freeLimit: "每月 50 次 AI 对话，基础实时聊天",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "ada-cx",
    name: "Ada",
    company: "Ada",
    category: "ai-customer-service",
    tagline: "企业级 AI 客服平台，支持 50+ 语言大规模自动化",
    website: "https://www.ada.cx",
    pricing: [
      { plan: "Enterprise", price: 0, period: "定制", features: ["AI Agent", "50+ 语言", "全渠道", "分析面板", "API 集成"] }
    ],
    pros: [
      "支持 50+ 语言，全球化企业首选",
      "自动化解决率业界领先",
      "与 Salesforce、Zendesk 等深度集成",
      "企业级安全和合规"
    ],
    cons: [
      "仅面向企业，无自助定价",
      "部署和配置需要专业支持",
      "中小企业成本过高"
    ],
    bestFor: ["全球化大型企业", "需要多语言支持的客服团队", "高咨询量需要大规模自动化"],
    notFor: ["中小企业", "预算有限的团队"],
    keyFeatures: {
      "多语言 AI": "支持 50+ 语言的自动客服，无需逐语言配置",
      "全渠道": "网页、App、社交媒体、短信等统一管理",
      "知识整合": "自动从帮助中心、CRM 等系统获取答案",
      "持续学习": "基于客户反馈自动优化回答质量"
    },
    freeLimit: "无免费版，需联系销售",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "zendesk-ai",
    name: "Zendesk AI",
    company: "Zendesk",
    category: "ai-customer-service",
    tagline: "AI 驱动的客户支持套件，高效管理大规模工单",
    website: "https://www.zendesk.com",
    pricing: [
      { plan: "Suite Team", price: 55, period: "座席/月", features: ["基础 AI", "工单系统", "多渠道"] },
      { plan: "Suite Professional", price: 115, period: "座席/月", features: ["高级 AI", "自动化", "分析", "SLA 管理"] },
      { plan: "AI Agent", price: 1, period: "每次解决", features: ["自动解决", "按量计费", "知识库驱动"] }
    ],
    pros: [
      "客服行业标杆，生态最完整",
      "AI 自动分类、路由和建议回复",
      "数据分析和报告功能强大",
      "第三方集成极其丰富"
    ],
    cons: [
      "价格较高，中小企业负担重",
      "功能复杂，配置学习成本高",
      "AI 功能需要额外付费"
    ],
    bestFor: ["大中型企业的客服团队", "需要完整工单管理系统", "多渠道客服统一管理"],
    notFor: ["小型团队或个人", "预算有限的初创公司"],
    keyFeatures: {
      "AI 工单路由": "自动分类工单并路由到最合适的客服",
      "智能建议": "为客服人员实时建议最佳回复",
      "自助服务": "AI 驱动的帮助中心，客户自助解决问题",
      "预测分析": "预测客户满意度和工单解决时间"
    },
    freeLimit: "14 天免费试用",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "freshdesk-freddy",
    name: "Freshdesk (Freddy AI)",
    company: "Freshworks",
    category: "ai-customer-service",
    tagline: "AI 驱动的帮助台，自动工单路由和智能回复",
    website: "https://www.freshworks.com/freshdesk/",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["最多 2 座席", "基础工单", "知识库"] },
      { plan: "Growth", price: 15, period: "座席/月", features: ["自动化", "SLA 管理", "多渠道"] },
      { plan: "Pro", price: 49, period: "座席/月", features: ["Freddy AI", "高级自动化", "自定义报告", "多品牌"] }
    ],
    pros: [
      "免费版支持 2 座席，适合小团队起步",
      "Freddy AI 自动建议回复和分类工单",
      "界面直观，上手快",
      "性价比高于 Zendesk"
    ],
    cons: [
      "AI 功能需要 Pro 版以上",
      "高级自定义不如 Zendesk 灵活",
      "大规模部署功能有限"
    ],
    bestFor: ["中小企业的客服团队", "预算有限但需要 AI 客服的团队", "从免费版起步逐步升级"],
    notFor: ["需要极度定制化的大型企业", "复杂多品牌管理场景"],
    keyFeatures: {
      "Freddy AI": "自动建议回复、分类工单、检测客户情绪",
      "全渠道收件箱": "邮件、聊天、电话、社交媒体统一管理",
      "自动化工作流": "基于条件自动分配、升级和通知",
      "知识库": "AI 驱动的自助服务门户"
    },
    freeLimit: "2 座席免费，基础工单和知识库",
    lastUpdated: "2026-05-24"
  },

  // ===== NEW: AI Translation (4) =====
  {
    slug: "deepl",
    name: "DeepL",
    company: "DeepL SE",
    category: "ai-translation",
    tagline: "AI 翻译平台，欧洲语言对准确度领先，支持文档翻译",
    website: "https://www.deepl.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限翻译", "基础功能", "3 文档/月"] },
      { plan: "Starter", price: 10.49, period: "月", features: ["无限翻译", "5 文档/月", "1 术语表"] },
      { plan: "Advanced", price: 34.49, period: "月", features: ["无限文档", "无限术语表", "团队管理", "CAT 集成"] },
      { plan: "API Free", price: 0, period: "月", features: ["50 万字符/月", "基础 API"] }
    ],
    pros: [
      "翻译质量业界领先，尤其欧洲语言",
      "保持文档格式，PDF/Word/PPT 直接翻译",
      "DeepL Write 润色功能提升写作质量",
      "API 免费版额度慷慨"
    ],
    cons: [
      "支持语言数量不如 Google 翻译多",
      "中文翻译质量不如欧洲语言突出",
      "免费版有字数和文档限制"
    ],
    bestFor: ["欧洲语言翻译需求", "需要保持格式的文档翻译", "开发者集成翻译 API"],
    notFor: ["小语种翻译需求", "纯中文环境的用户"],
    keyFeatures: {
      "神经网络翻译": "自研翻译模型，欧洲语言对准确度超越 Google",
      "文档翻译": "保持原始格式翻译 PDF、Word、PPT 文件",
      "DeepL Write": "AI 写作助手，润色和改善文本表达",
      "术语表": "自定义术语确保专业词汇翻译一致"
    },
    freeLimit: "有限字数翻译，每月 3 个文档",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "phrase",
    name: "Phrase",
    company: "Phrase",
    category: "ai-translation",
    tagline: "AI 本地化平台，企业级翻译工作流和质量管理",
    website: "https://phrase.com",
    pricing: [
      { plan: "Starter", price: 25, period: "月", features: ["2 用户", "基础 TMS", "AI 翻译"] },
      { plan: "Pro", price: 125, period: "月", features: ["10 用户", "高级工作流", "API", "集成"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["无限用户", "自定义 AI", "专属支持"] }
    ],
    pros: [
      "翻译管理系统功能完整专业",
      "AI + 人工翻译混合工作流",
      "支持 50+ 文件格式",
      "与开发工具链深度集成"
    ],
    cons: [
      "学习曲线较陡",
      "价格较高，面向企业",
      "小项目使用过于复杂"
    ],
    bestFor: ["需要管理多语言产品的软件公司", "有专业翻译团队的企业", "持续本地化的 SaaS 产品"],
    notFor: ["个人翻译需求", "一次性翻译项目"],
    keyFeatures: {
      "TMS 系统": "完整的翻译管理系统，项目、任务、进度一目了然",
      "AI 预翻译": "AI 自动翻译后人工审校，提升效率",
      "翻译记忆": "复用历史翻译，保持术语一致性",
      "开发集成": "GitHub、GitLab、Figma 等工具直接同步"
    },
    freeLimit: "14 天免费试用",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "smartcat",
    name: "Smartcat",
    company: "Smartcat",
    category: "ai-translation",
    tagline: "AI 翻译和本地化平台，结合人工和机器翻译",
    website: "https://www.smartcat.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["AI 翻译", "基础编辑器", "有限字数"] },
      { plan: "Pro", price: 79, period: "月", features: ["无限 AI 翻译", "团队协作", "翻译记忆", "API"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["自定义 AI", "SSO", "专属支持"] }
    ],
    pros: [
      "AI 翻译 + 人工审校一体化平台",
      "内置翻译人才市场，可雇佣专业译者",
      "支持 CAT 工具功能（翻译记忆、术语库）",
      "免费版即可使用 AI 翻译"
    ],
    cons: [
      "界面复杂度较高",
      "AI 翻译质量因语言对而异",
      "高级功能价格不低"
    ],
    bestFor: ["需要 AI + 人工混合翻译的团队", "管理外部翻译供应商", "多语言内容持续更新"],
    notFor: ["只需要简单机器翻译的用户", "预算极有限的个人"],
    keyFeatures: {
      "AI + 人工": "AI 初翻后人工审校，兼顾效率和质量",
      "翻译市场": "内置专业翻译人才市场，按需雇佣",
      "CAT 工具": "翻译记忆、术语库、质量检查等专业功能",
      "自动化": "内容更新后自动触发翻译工作流"
    },
    freeLimit: "有限 AI 翻译字数",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "lokalise",
    name: "Lokalise",
    company: "Lokalise",
    category: "ai-translation",
    tagline: "AI 辅助的翻译管理系统，专为软件和内容本地化设计",
    website: "https://lokalise.com",
    pricing: [
      { plan: "Start", price: 0, period: "月", features: ["免费试用", "基础 TMS", "有限项目"] },
      { plan: "Essential", price: 120, period: "月", features: ["无限项目", "AI 翻译", "集成", "协作"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["高级安全", "自定义工作流", "专属支持"] }
    ],
    pros: [
      "软件本地化工作流设计精良",
      "与 GitHub、Figma、Sketch 等深度集成",
      "支持 OTA（空中更新）翻译",
      "截图功能可视化翻译上下文"
    ],
    cons: [
      "价格较高，面向中大型团队",
      "小项目使用过于复杂",
      "AI 翻译质量依赖语言对"
    ],
    bestFor: ["移动 App 和 Web 应用本地化", "需要持续集成翻译的开发团队", "多平台产品的统一本地化"],
    notFor: ["文档翻译为主的需求", "预算有限的小团队"],
    keyFeatures: {
      "开发集成": "GitHub/GitLab/Bitbucket 自动同步翻译文件",
      "OTA 更新": "无需发版即可更新 App 内翻译",
      "截图上下文": "上传 UI 截图，翻译时看到文字在界面中的位置",
      "AI 翻译": "AI 预翻译 + 质量评分，加速翻译流程"
    },
    freeLimit: "14 天免费试用",
    lastUpdated: "2026-05-24"
  },

  // ===== NEW: AI Education (5) =====
  {
    slug: "khanmigo",
    name: "Khanmigo",
    company: "Khan Academy",
    category: "ai-education",
    tagline: "AI 家教和教学助手，基于可汗学院课程体系的个性化辅导",
    website: "https://www.khanmigo.ai",
    pricing: [
      { plan: "Learner", price: 9, period: "月", features: ["AI 家教", "个性化学习", "进度追踪"] },
      { plan: "Teacher", price: 0, period: "月", features: ["教师免费", "课程规划", "学生分析", "作业批改辅助"] }
    ],
    pros: [
      "基于苏格拉底式教学法，引导而非直接给答案",
      "覆盖数学、科学、编程等完整课程体系",
      "教师版完全免费",
      "安全可控，专为 K-12 设计"
    ],
    cons: [
      "主要覆盖英文课程",
      "创意和开放性问题处理有限",
      "需要配合可汗学院平台使用"
    ],
    bestFor: ["K-12 学生的课后辅导", "教师备课和教学辅助", "自学数学和科学的学习者"],
    notFor: ["大学及以上高等教育", "非英语学习者"],
    keyFeatures: {
      "苏格拉底式辅导": "通过提问引导学生思考，而非直接给出答案",
      "课程对齐": "与可汗学院完整课程体系对齐，循序渐进",
      "教师工具": "自动生成教案、练习题和学生进度报告",
      "安全设计": "内容过滤和对话监控，确保学生安全"
    },
    freeLimit: "教师免费，学生 $9/月",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "magicschool-ai",
    name: "MagicSchool AI",
    company: "MagicSchool",
    category: "ai-education",
    tagline: "K-12 教师 AI 平台，课程规划、作业生成和差异化教学",
    website: "https://www.magicschool.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础 AI 工具", "有限使用次数", "社区支持"] },
      { plan: "Plus", price: 9.99, period: "月", features: ["无限使用", "全部 60+ 工具", "优先支持"] },
      { plan: "School", price: 0, period: "定制", features: ["全校部署", "管理后台", "培训支持"] }
    ],
    pros: [
      "60+ 专为教师设计的 AI 工具",
      "一键生成教案、练习题、评语",
      "支持差异化教学内容生成",
      "免费版即可体验核心功能"
    ],
    cons: [
      "主要面向美国教育体系",
      "生成内容需要教师审核调整",
      "中文支持有限"
    ],
    bestFor: ["K-12 教师节省备课时间", "需要差异化教学材料的教师", "学校批量部署 AI 教学工具"],
    notFor: ["高等教育场景", "学生自学使用"],
    keyFeatures: {
      "教案生成": "输入主题和年级，AI 生成完整教案",
      "差异化教学": "同一内容自动生成不同难度版本",
      "评语生成": "基于学生表现自动生成个性化评语",
      "练习题库": "AI 生成各类型练习题和评估材料"
    },
    freeLimit: "基础工具有限使用次数",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "duolingo-max",
    name: "Duolingo Max",
    company: "Duolingo",
    category: "ai-education",
    tagline: "AI 增强的语言学习，角色扮演对话和个性化解释",
    website: "https://www.duolingo.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础课程", "广告支持", "有限生命值"] },
      { plan: "Super", price: 6.99, period: "月", features: ["无广告", "无限生命", "进度追踪"] },
      { plan: "Max", price: 13.99, period: "月", features: ["AI 角色扮演", "AI 解释", "Super 全部功能"] }
    ],
    pros: [
      "AI 角色扮演让口语练习更真实",
      "错误后 AI 解释为什么错，而非只给正确答案",
      "游戏化设计保持学习动力",
      "支持 40+ 语言"
    ],
    cons: [
      "Max 功能仅支持部分语言",
      "AI 对话深度有限",
      "不适合高级语言学习者"
    ],
    bestFor: ["语言初学者和中级学习者", "想要口语练习但没有语伴的用户", "喜欢游戏化学习的用户"],
    notFor: ["高级语言学习者", "需要专业商务语言培训"],
    keyFeatures: {
      "AI 角色扮演": "与 AI 角色进行情景对话练习口语",
      "AI 解释": "犯错后 AI 用简单语言解释语法规则",
      "个性化路径": "AI 根据学习表现调整课程难度和内容",
      "40+ 语言": "覆盖全球主要语言的学习课程"
    },
    freeLimit: "基础课程免费，AI 功能需 Max 订阅",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "quizlet-qchat",
    name: "Quizlet Q-Chat",
    company: "Quizlet",
    category: "ai-education",
    tagline: "AI 学习伙伴，苏格拉底式辅导帮助理解和记忆",
    website: "https://quizlet.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础闪卡", "有限 AI 功能", "广告支持"] },
      { plan: "Plus", price: 7.99, period: "月", features: ["无广告", "AI 学习助手", "离线访问", "自定义学习路径"] }
    ],
    pros: [
      "AI 辅导结合传统闪卡学习法",
      "苏格拉底式提问帮助深度理解",
      "海量用户创建的学习集可复用",
      "支持多种学习模式（测试、匹配、书写）"
    ],
    cons: [
      "AI 功能需要付费",
      "内容质量依赖用户创建",
      "不适合系统性课程学习"
    ],
    bestFor: ["备考学生（考试、认证）", "需要记忆大量知识点的学习者", "想要 AI 辅助复习的用户"],
    notFor: ["系统性课程学习", "不需要记忆类学习的用户"],
    keyFeatures: {
      "Q-Chat AI": "AI 学习伙伴，通过对话帮助理解概念",
      "智能闪卡": "AI 根据遗忘曲线安排复习时间",
      "多模式学习": "闪卡、测试、匹配、书写等多种练习方式",
      "学习集市场": "数亿用户创建的学习集可直接使用"
    },
    freeLimit: "基础闪卡免费，AI 功能需 Plus",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "photomath",
    name: "Photomath",
    company: "Google (Photomath)",
    category: "ai-education",
    tagline: "AI 数学解题工具，拍照即可获得分步解题过程",
    website: "https://photomath.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["基础解题", "分步过程", "计算器"] },
      { plan: "Plus", price: 9.99, period: "月", features: ["AI 家教解释", "多种解法", "深度理解", "无广告"] }
    ],
    pros: [
      "拍照即可识别数学题并给出解答",
      "分步骤展示解题过程，帮助理解",
      "覆盖从算术到微积分的广泛范围",
      "免费版功能已经很实用"
    ],
    cons: [
      "可能被学生用来抄作业",
      "文字题理解能力有限",
      "高等数学覆盖不完整"
    ],
    bestFor: ["数学学习有困难的学生", "家长辅导孩子数学作业", "需要验证解题过程的学习者"],
    notFor: ["不想让学生依赖工具的教师", "高等数学研究"],
    keyFeatures: {
      "拍照解题": "手机拍照自动识别数学题目并求解",
      "分步过程": "每一步都有详细解释，帮助理解方法",
      "多种解法": "Plus 版提供同一题目的多种解题方法",
      "AI 家教": "Plus 版 AI 解释为什么这样做，而非只给答案"
    },
    freeLimit: "基础解题和分步过程免费",
    lastUpdated: "2026-05-24"
  },

  // ===== NEW: AI 3D & Game (5) =====
  {
    slug: "meshy",
    name: "Meshy",
    company: "Meshy",
    category: "ai-3d",
    tagline: "AI 3D 模型生成器，从文字和图片秒速创建带纹理的 3D 模型",
    website: "https://www.meshy.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["100 额度/月", "基础模型", "社区分享"] },
      { plan: "Pro", price: 20, period: "月", features: ["1000 额度/月", "高质量模型", "商业使用", "API"] },
      { plan: "Max", price: 60, period: "月", features: ["3000 额度/月", "最高质量", "优先队列", "批量生成"] }
    ],
    pros: [
      "3D 模型生成质量业界领先",
      "支持文字和图片两种输入方式",
      "自动生成 PBR 纹理贴图",
      "支持自动绑骨和动画预设"
    ],
    cons: [
      "复杂模型拓扑可能需要手动修复",
      "免费额度有限",
      "生成时间较长（1-3 分钟）"
    ],
    bestFor: ["独立游戏开发者快速生成资产", "3D 打印爱好者", "概念设计和原型制作"],
    notFor: ["需要精确工业级模型的工程师", "AAA 游戏的最终资产"],
    keyFeatures: {
      "文字转 3D": "描述物体即可生成带纹理的 3D 模型",
      "图片转 3D": "上传 2D 图片自动生成对应 3D 模型",
      "PBR 纹理": "自动生成物理正确的纹理贴图（漫反射、法线、粗糙度）",
      "自动绑骨": "角色模型自动添加骨骼，支持 500+ 动画预设"
    },
    freeLimit: "每月 100 额度（约 5 个完整模型）",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "tripo-ai",
    name: "Tripo AI",
    company: "VAST (Tripo)",
    category: "ai-3d",
    tagline: "AI 3D 工作台，生成生产级模型并支持自动拓扑和绑骨",
    website: "https://www.tripo3d.ai",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限生成", "基础质量", "社区分享"] },
      { plan: "Pro", price: 20, period: "月", features: ["更多生成", "高质量", "商业使用", "下载"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["API", "批量生成", "自定义模型"] }
    ],
    pros: [
      "生成模型拓扑干净，接近手工建模质量",
      "自动重拓扑和 UV 展开",
      "支持自动绑骨和动画",
      "多种导出格式（FBX、OBJ、GLB）"
    ],
    cons: [
      "免费版功能有限",
      "极复杂场景生成能力有限",
      "社区规模不如 Meshy"
    ],
    bestFor: ["需要干净拓扑的游戏开发者", "3D 动画师需要快速角色模型", "VR/AR 内容创作"],
    notFor: ["需要精确尺寸的工业设计", "超大规模场景生成"],
    keyFeatures: {
      "干净拓扑": "生成的模型网格质量高，可直接用于游戏引擎",
      "自动重拓扑": "AI 自动优化网格拓扑，减少面数保持质量",
      "自动绑骨": "角色模型自动添加骨骼系统",
      "多格式导出": "支持 FBX、OBJ、GLB、USDZ 等主流格式"
    },
    freeLimit: "每天有限生成次数",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "blockade-labs",
    name: "Blockade Labs",
    company: "Blockade Labs",
    category: "ai-3d",
    tagline: "AI 天空盒和 360 度环境生成器，用于游戏和 VR 场景",
    website: "https://www.blockadelabs.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限生成", "基础分辨率", "社区分享"] },
      { plan: "Pro", price: 15, period: "月", features: ["无限生成", "高分辨率", "商业使用", "API"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["自定义模型", "批量 API", "专属支持"] }
    ],
    pros: [
      "360 度全景环境生成质量极高",
      "生成速度快，10 秒内出结果",
      "直接可用于游戏引擎和 VR",
      "风格多样，从写实到卡通均可"
    ],
    cons: [
      "仅生成环境/天空盒，不生成物体",
      "精细控制能力有限",
      "免费版分辨率较低"
    ],
    bestFor: ["游戏开发者需要环境背景", "VR/AR 场景创建", "建筑可视化背景"],
    notFor: ["需要 3D 物体模型的用户", "需要精确场景控制的专业制作"],
    keyFeatures: {
      "360 度全景": "生成完整的 360 度全景环境图",
      "极速生成": "10 秒内生成高质量天空盒",
      "游戏引擎兼容": "输出格式直接兼容 Unity、Unreal 等引擎",
      "风格控制": "支持写实、卡通、科幻等多种环境风格"
    },
    freeLimit: "每天有限生成，基础分辨率",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "scenario",
    name: "Scenario",
    company: "Scenario",
    category: "ai-3d",
    tagline: "AI 游戏资产生成器，保持一致艺术风格的角色和道具",
    website: "https://www.scenario.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限生成", "基础功能", "社区模型"] },
      { plan: "Pro", price: 28, period: "月", features: ["无限生成", "自定义模型训练", "商业使用", "API"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["团队协作", "专属模型", "优先支持"] }
    ],
    pros: [
      "可训练自定义模型保持游戏美术风格一致",
      "角色、道具、场景等多种资产类型",
      "生成结果可直接用于游戏开发",
      "支持批量生成变体"
    ],
    cons: [
      "训练自定义模型需要时间和素材",
      "免费版功能有限",
      "主要面向 2D 资产，3D 支持有限"
    ],
    bestFor: ["独立游戏工作室批量生成美术资产", "需要保持风格一致的游戏项目", "概念艺术快速迭代"],
    notFor: ["非游戏领域的图像生成", "需要 3D 模型的用户"],
    keyFeatures: {
      "自定义训练": "上传参考图训练专属模型，保持美术风格一致",
      "资产类型": "角色、道具、环境、UI 等游戏资产全覆盖",
      "批量变体": "一次生成多个变体，快速选择最佳方案",
      "游戏集成": "输出格式兼容主流游戏引擎"
    },
    freeLimit: "每天有限生成次数",
    lastUpdated: "2026-05-24"
  },
  {
    slug: "rodin",
    name: "Rodin",
    company: "Hyper3D (DeemosTech)",
    category: "ai-3d",
    tagline: "AI 3D 资产生成器，生成接近生产级的游戏和影视模型",
    website: "https://hyperhuman.deemos.com",
    pricing: [
      { plan: "Free", price: 0, period: "月", features: ["有限生成", "基础质量", "水印"] },
      { plan: "Pro", price: 30, period: "月", features: ["更多生成", "高质量", "商业使用", "无水印"] },
      { plan: "Enterprise", price: 0, period: "定制", features: ["API", "批量处理", "自定义"] }
    ],
    pros: [
      "生成模型质量接近手工建模",
      "支持从多角度图片重建 3D",
      "纹理和材质质量出色",
      "适合影视和游戏生产流程"
    ],
    cons: [
      "生成时间较长",
      "免费版有水印",
      "复杂有机形态偶尔不准确"
    ],
    bestFor: ["影视特效预览和资产生成", "游戏开发中的快速原型", "3D 打印模型生成"],
    notFor: ["需要实时生成的场景", "精确工程模型"],
    keyFeatures: {
      "高质量生成": "模型细节和纹理质量接近专业手工建模",
      "多视角重建": "从多张照片重建高精度 3D 模型",
      "PBR 材质": "自动生成物理正确的材质和纹理",
      "多格式输出": "支持主流 3D 格式导出"
    },
    freeLimit: "有限生成次数，带水印",
    lastUpdated: "2026-05-24"
  }
];

// Check for duplicates
const existingSlugs = new Set(tools.map(t => t.slug));
const toAdd = newTools.filter(t => !existingSlugs.has(t.slug));

tools.push(...toAdd);
writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf-8');
console.log(`Added ${toAdd.length} new tools. Total: ${tools.length}`);
