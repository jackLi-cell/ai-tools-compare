import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsPath = join(__dirname, '..', 'data', 'tools.json');
const tools = JSON.parse(readFileSync(toolsPath, 'utf-8'));

const newTools = [
  {
    "slug": "deepseek",
    "name": "DeepSeek",
    "company": "深度求索",
    "category": "ai-chat",
    "tagline": "中国开源 AI 大模型，完全免费使用，推理能力接近 GPT-4",
    "website": "https://chat.deepseek.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["DeepSeek-V3 无限使用", "DeepSeek-R1 推理模型", "联网搜索", "文件上传"]},
      {"plan": "API", "price": 0.14, "period": "百万 token", "features": ["DeepSeek-V3 API", "批量调用", "企业级 SLA"]}
    ],
    "pros": ["完全免费无限使用，零门槛体验顶级 AI", "DeepSeek-R1 推理能力接近 OpenAI o1", "中文理解和生成质量出色，本土化体验好", "开源模型可本地部署，数据完全私有"],
    "cons": ["高峰期服务器拥挤，响应速度不稳定", "多模态能力有限，不支持图像生成", "生态系统和插件不如 ChatGPT 丰富", "部分敏感话题回答受限"],
    "bestFor": ["预算有限但需要高质量 AI 的学生和个人用户", "需要强推理能力解决数学和逻辑问题", "中文内容创作和学术写作", "想要本地部署 AI 的技术团队"],
    "notFor": ["需要多模态（图像/语音）能力的用户", "对响应速度有严格要求的商业场景"],
    "keyFeatures": {"DeepSeek-R1": "专注推理的模型，数学和逻辑能力接近 o1", "完全免费": "所有功能免费使用，无用量限制", "开源部署": "模型权重开源，支持本地和私有云部署", "联网搜索": "实时搜索最新信息，回答附带来源"},
    "freeLimit": "完全免费，所有功能无限使用",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "kimi",
    "name": "Kimi",
    "company": "月之暗面",
    "category": "ai-chat",
    "tagline": "200 万字超长上下文的中文 AI 助手，长文档处理能力业界领先",
    "website": "https://kimi.moonshot.cn",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["基础对话", "文件上传", "联网搜索"]},
      {"plan": "会员", "price": 59, "period": "月", "features": ["200 万字上下文", "优先响应", "更多高级功能"]}
    ],
    "pros": ["200 万字超长上下文，可处理整本书或大量文档", "中文理解能力极强，语义把握精准", "支持上传多种格式文件直接分析", "免费版功能已经相当完整"],
    "cons": ["英文能力不如 ChatGPT 和 Claude", "代码生成能力中等，不如专业编程工具", "生态系统较封闭，无插件和扩展", "偶尔出现幻觉，需要验证关键信息"],
    "bestFor": ["需要处理超长中文文档的研究人员", "中文学术论文写作和文献综述", "阅读和总结大量中文资料的学生", "中文内容创作者需要 AI 辅助写作"],
    "notFor": ["主要使用英文的国际化团队", "需要代码生成和编程辅助的开发者"],
    "keyFeatures": {"200万字上下文": "单次对话可处理约 200 万字，远超同类产品", "文档分析": "支持 PDF、Word、PPT 等多种格式文件上传分析", "联网搜索": "实时搜索互联网信息，回答更准确", "中文优化": "针对中文语境深度优化，理解更精准"},
    "freeLimit": "免费版可用基础功能，上下文长度有限制",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "kiro",
    "name": "Kiro",
    "company": "Amazon (AWS)",
    "category": "ai-coding",
    "tagline": "AWS 推出的 spec-driven AI 编程工具，用规格文档驱动代码生成",
    "website": "https://kiro.dev",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["基础 AI 辅助", "有限次数 Agent 交互"]},
      {"plan": "Pro", "price": 19, "period": "月", "features": ["无限 Agent 交互", "Spec 驱动开发", "Hooks 自动化"]},
      {"plan": "Pro+", "price": 39, "period": "月", "features": ["更高用量", "优先模型访问", "团队功能"]}
    ],
    "pros": ["Spec-driven 开发模式确保代码符合需求规格", "Hooks 系统可自动执行测试、lint 等任务", "基于 VS Code，插件生态完全兼容", "AWS 背景，企业级安全和合规"],
    "cons": ["Spec 驱动模式学习曲线较高，需要适应新工作流", "相比 Cursor 的即时交互，流程更重", "社区规模较小，资源和教程有限", "部分高级功能仍在开发中"],
    "bestFor": ["注重代码质量和规格一致性的团队", "AWS 生态深度用户", "需要自动化工作流的项目", "偏好结构化开发流程的工程师"],
    "notFor": ["追求快速原型开发的个人开发者", "不习惯先写规格再写代码的用户"],
    "keyFeatures": {"Spec 驱动": "先定义需求规格，AI 根据规格生成符合要求的代码", "Hooks 系统": "代码变更时自动触发测试、格式化、部署等任务", "Agent 模式": "AI 自主分析项目、修改代码、运行验证", "VS Code 兼容": "基于 VS Code 构建，所有插件和快捷键通用"},
    "freeLimit": "免费版有限次数 Agent 交互",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "codeium",
    "name": "Codeium",
    "company": "Codeium (Exafunction)",
    "category": "ai-coding",
    "tagline": "完全免费的 AI 代码补全工具，支持 70+ 语言和所有主流 IDE",
    "website": "https://codeium.com",
    "pricing": [
      {"plan": "Individual", "price": 0, "period": "永久", "features": ["无限代码补全", "AI 聊天", "70+ 语言支持", "所有主流 IDE"]},
      {"plan": "Teams", "price": 12, "period": "月/人", "features": ["团队管理", "使用分析", "优先支持"]},
      {"plan": "Enterprise", "price": 24, "period": "月/人", "features": ["私有部署", "自定义模型", "SSO/SCIM"]}
    ],
    "pros": ["个人版完全免费且无限使用，零成本入门", "支持 70+ 编程语言和所有主流 IDE", "补全速度快，延迟低于 200ms", "不会用你的代码训练模型，隐私有保障"],
    "cons": ["AI 聊天和 Agent 能力不如 Cursor", "免费版不含高级 Agent 功能", "代码理解深度不如 Claude Code", "品牌知名度不如 Copilot"],
    "bestFor": ["预算为零但需要 AI 编程辅助的学生和个人", "使用非主流 IDE 的开发者", "对代码隐私有要求的个人开发者", "想要免费替代 GitHub Copilot 的用户"],
    "notFor": ["需要强大 Agent 能力的高级开发者", "追求最顶尖 AI 编程体验的专业团队"],
    "keyFeatures": {"免费无限补全": "个人用户永久免费，无任何使用限制", "全 IDE 支持": "VS Code、JetBrains、Neovim、Emacs、Vim 等全覆盖", "70+ 语言": "从 Python 到 Rust，几乎所有编程语言都支持", "隐私保护": "不使用用户代码训练模型，代码不被存储"},
    "freeLimit": "个人版完全免费，无限代码补全和 AI 聊天",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "tabnine",
    "name": "Tabnine",
    "company": "Tabnine",
    "category": "ai-coding",
    "tagline": "注重代码隐私的 AI 编程助手，支持本地模型运行和私有部署",
    "website": "https://tabnine.com",
    "pricing": [
      {"plan": "Basic", "price": 0, "period": "月", "features": ["基础补全", "短代码生成"]},
      {"plan": "Dev", "price": 9, "period": "月", "features": ["AI 聊天", "全行补全", "代码解释"]},
      {"plan": "Enterprise", "price": 39, "period": "月/人", "features": ["私有模型", "本地部署", "代码库学习", "SSO"]}
    ],
    "pros": ["支持完全本地运行，代码不离开你的电脑", "企业版可基于私有代码库训练专属模型", "隐私合规性强，适合金融和医疗等敏感行业", "支持所有主流 IDE"],
    "cons": ["AI 能力整体不如 Copilot 和 Cursor", "本地模型质量不如云端模型", "免费版功能非常基础", "Agent 和多文件编辑能力缺失"],
    "bestFor": ["对代码隐私有严格要求的企业", "需要在离线环境中使用 AI 编程的团队", "想要基于私有代码库训练模型的大型组织"],
    "notFor": ["追求最强 AI 编程能力的个人开发者", "预算有限只想用免费工具的用户"],
    "keyFeatures": {"本地运行": "AI 模型可完全在本地运行，代码不上传云端", "私有训练": "企业版可用私有代码库训练专属模型", "全 IDE 支持": "VS Code、JetBrains、Neovim 等主流 IDE 全覆盖", "合规认证": "SOC 2 Type II 认证，满足企业安全合规要求"},
    "freeLimit": "基础代码补全免费，高级功能需付费",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "flux-pro",
    "name": "FLUX Pro",
    "company": "Black Forest Labs",
    "category": "ai-image",
    "tagline": "2026 年新晋图像生成榜首，质量媲美 Midjourney 的开放模型",
    "website": "https://blackforestlabs.ai",
    "pricing": [
      {"plan": "FLUX Schnell（开源）", "price": 0, "period": "永久", "features": ["本地部署免费", "快速生成", "Apache 2.0 许可"]},
      {"plan": "FLUX Pro API", "price": 0.05, "period": "张", "features": ["最高质量", "商用授权", "API 调用"]},
      {"plan": "FLUX Pro Ultra", "price": 0.1, "period": "张", "features": ["超高分辨率", "最佳细节", "优先队列"]}
    ],
    "pros": ["图像质量与 Midjourney v8 并列榜首", "开源版本 FLUX Schnell 可免费本地部署", "API 定价透明，按张计费无订阅绑定", "文字渲染能力强，优于大多数竞品"],
    "cons": ["无官方 Web UI，需要通过 API 或第三方平台使用", "开源版质量不如 Pro 版", "社区生态不如 Stable Diffusion 成熟", "缺少图像编辑和局部重绘功能"],
    "bestFor": ["需要 API 集成图像生成的开发者和产品", "想要 Midjourney 级质量但按量付费的用户", "有 GPU 想免费使用开源版的技术用户"],
    "notFor": ["不懂技术想要简单 Web 界面的普通用户", "需要完整图像编辑工具链的设计师"],
    "keyFeatures": {"顶级画质": "与 Midjourney v8 并列 2026 年图像生成质量榜首", "开源可用": "FLUX Schnell 开源免费，可本地部署无限生成", "API 优先": "按张计费的 API，适合产品集成和批量生成", "文字渲染": "图像中的文字渲染准确度高于大多数竞品"},
    "freeLimit": "FLUX Schnell 开源免费（需自备 GPU），Pro 版按量付费",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "leonardo-ai",
    "name": "Leonardo.ai",
    "company": "Leonardo AI",
    "category": "ai-image",
    "tagline": "免费额度慷慨的 AI 图像平台，游戏资产和 3D 纹理生成能力突出",
    "website": "https://leonardo.ai",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["每天 150 tokens", "基础模型", "社区模型"]},
      {"plan": "Apprentice", "price": 12, "period": "月", "features": ["8500 tokens/月", "所有模型", "私密生成"]},
      {"plan": "Artisan", "price": 30, "period": "月", "features": ["25000 tokens/月", "优先队列", "API 访问"]},
      {"plan": "Maestro", "price": 60, "period": "月", "features": ["60000 tokens/月", "最高优先级", "商用授权"]}
    ],
    "pros": ["免费版每天 150 tokens，足够日常体验", "支持自定义模型训练，可学习特定风格", "3D 纹理和游戏资产生成能力出色", "社区模型库丰富，各种风格可直接使用"],
    "cons": ["整体美学质量不如 Midjourney", "免费版有水印和分辨率限制", "高级功能需要较高价位订阅", "中文提示词支持一般"],
    "bestFor": ["游戏开发者需要生成角色和场景资产", "想要免费 AI 图像生成的个人创作者", "需要训练特定风格模型的设计师"],
    "notFor": ["追求最高美学质量的专业设计师", "不想注册账号的临时用户"],
    "keyFeatures": {"免费额度": "每天 150 tokens 免费使用，无需付费即可体验", "模型训练": "上传图片训练自定义模型，学习特定风格", "3D 纹理": "生成游戏和 3D 项目可用的纹理贴图", "社区模型": "数千个社区训练的模型可直接使用"},
    "freeLimit": "每天 150 tokens（约 5-10 张图），有水印",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "ideogram",
    "name": "Ideogram",
    "company": "Ideogram AI",
    "category": "ai-image",
    "tagline": "文字渲染能力最强的 AI 图像工具，Logo 和排版设计的首选",
    "website": "https://ideogram.ai",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["每天约 5 张图", "基础分辨率", "社区可见"]},
      {"plan": "Basic", "price": 8, "period": "月", "features": ["400 张/月", "私密生成", "高分辨率"]},
      {"plan": "Plus", "price": 20, "period": "月", "features": ["1000 张/月", "优先队列", "编辑功能"]},
      {"plan": "Pro", "price": 48, "period": "月", "features": ["无限慢速", "2000 快速/月", "API 访问"]}
    ],
    "pros": ["文字渲染准确度业界第一，Logo 和海报设计实用", "有免费版可每天生成数张图片", "3.0 版本整体画质大幅提升", "支持多种宽高比和风格预设"],
    "cons": ["艺术风格多样性不如 Midjourney", "免费版图片公开可见，无隐私", "编辑和局部重绘功能较基础", "社区规模和资源不如主流平台"],
    "bestFor": ["需要图片中包含准确文字的设计需求", "Logo、海报、社交媒体配图设计", "预算有限想免费生成图片的用户"],
    "notFor": ["追求极致艺术美感的概念设计师", "需要精确控制构图和姿态的专业用户"],
    "keyFeatures": {"文字渲染": "AI 图像中文字渲染准确度业界第一", "Logo 设计": "擅长生成包含文字的 Logo 和品牌设计", "免费使用": "每天免费生成数张图片，零成本体验", "风格预设": "多种艺术风格一键切换，快速出图"},
    "freeLimit": "每天约 5 张免费图片，公开可见",
    "lastUpdated": "2026-05-22"
  }
];

tools.push(...newTools);
writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf-8');
console.log('Batch 1: Added ' + newTools.length + ' tools. Total: ' + tools.length);
