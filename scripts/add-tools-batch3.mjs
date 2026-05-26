import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsPath = join(__dirname, '..', 'data', 'tools.json');
const tools = JSON.parse(readFileSync(toolsPath, 'utf-8'));

const newTools = [
  {
    "slug": "grammarly",
    "name": "Grammarly",
    "company": "Grammarly Inc",
    "category": "ai-writing",
    "tagline": "AI 写作助手标杆，从语法纠错到全文改写的一站式写作伴侣",
    "website": "https://grammarly.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["基础语法检查", "拼写纠错", "简洁性建议"]},
      {"plan": "Premium", "price": 12, "period": "月", "features": ["高级语法", "风格建议", "AI 改写", "抄袭检测"]},
      {"plan": "Business", "price": 15, "period": "月/人", "features": ["品牌调性", "团队分析", "管理后台"]}
    ],
    "pros": ["浏览器插件无处不在，Gmail/Docs/社媒全覆盖", "语法和拼写纠错准确率极高", "AI 改写功能可调整语气和风格", "免费版已经非常实用"],
    "cons": ["主要针对英文，中文支持有限", "AI 生成内容质量不如 ChatGPT", "Premium 功能对非英文用户价值有限", "偶尔过度纠正正确的表达"],
    "bestFor": ["英文写作频繁的职场人士", "需要确保邮件和文档无语法错误的专业人士", "英语非母语的写作者提升表达质量", "团队需要统一写作风格和品牌调性"],
    "notFor": ["主要用中文写作的用户", "需要长文创作能力的内容创作者"],
    "keyFeatures": {"语法纠错": "AI 驱动的语法、拼写、标点检查，准确率极高", "风格建议": "根据场景调整语气（正式/友好/自信等）", "AI 改写": "一键改写段落，调整表达方式和复杂度", "全平台覆盖": "浏览器插件、桌面应用、移动键盘全覆盖"},
    "freeLimit": "免费版包含基础语法检查和拼写纠错",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "rytr",
    "name": "Rytr",
    "company": "Rytr LLC",
    "category": "ai-writing",
    "tagline": "最便宜的 AI 写作工具之一，$9/月无限字数适合预算有限的创作者",
    "website": "https://rytr.me",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["10000 字符/月", "40+ 模板", "20+ 语气"]},
      {"plan": "Saver", "price": 9, "period": "月", "features": ["100000 字符/月", "自定义用例"]},
      {"plan": "Unlimited", "price": 29, "period": "月", "features": ["无限字符", "专属客户经理", "优先支持"]}
    ],
    "pros": ["$9/月的价格极具竞争力", "40+ 写作模板覆盖常见场景", "支持 30+ 语言包括中文", "界面简洁，上手快"],
    "cons": ["写作质量不如 Jasper 和 ChatGPT", "长文本连贯性较差", "高级功能和自定义选项有限", "SEO 优化功能基础"],
    "bestFor": ["预算极低但需要 AI 写作辅助的个人", "需要快速生成短文案的自由职业者", "多语言内容创作的小型团队"],
    "notFor": ["对内容质量有高要求的品牌", "需要长篇深度内容的专业写作者"],
    "keyFeatures": {"超低价格": "$9/月即可获得大量 AI 写作额度", "40+ 模板": "博客、广告、邮件、社媒等场景模板", "30+ 语言": "支持中文、英文、日文等多种语言", "语气控制": "20+ 语气选项，从正式到幽默自由切换"},
    "freeLimit": "每月 10000 字符免费（约 1500 字）",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "anyword",
    "name": "Anyword",
    "company": "Anyword",
    "category": "ai-writing",
    "tagline": "数据驱动的 AI 文案工具，用预测分数帮你选出最佳文案",
    "website": "https://anyword.com",
    "pricing": [
      {"plan": "Starter", "price": 49, "period": "月", "features": ["无限字数", "预测分数", "基础分析"]},
      {"plan": "Data-Driven", "price": 99, "period": "月", "features": ["自定义模型", "A/B 测试", "高级分析"]},
      {"plan": "Business", "price": 0, "period": "定制", "features": ["团队协作", "API", "专属支持"]}
    ],
    "pros": ["独特的预测评分系统，预判文案效果", "可基于历史数据训练自定义模型", "A/B 测试功能帮助优化文案", "广告文案生成质量高"],
    "cons": ["无免费版，$49/月起步价不低", "预测分数准确度因行业而异", "中文支持有限", "学习曲线比简单写作工具高"],
    "bestFor": ["数据驱动的营销团队需要优化广告文案", "电商团队需要高转化率的产品描述", "广告投放团队需要快速测试多版本文案"],
    "notFor": ["预算有限的个人创作者", "不需要数据分析的通用写作场景"],
    "keyFeatures": {"预测评分": "AI 预测每段文案的表现分数，帮你选最佳版本", "自定义模型": "基于你的历史数据训练专属文案模型", "A/B 测试": "自动生成多个版本并预测哪个效果最好", "渠道优化": "针对 Facebook、Google、Email 等渠道分别优化"},
    "freeLimit": "无免费版，提供 7 天免费试用",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "gamma",
    "name": "Gamma",
    "company": "Gamma Tech",
    "category": "ai-productivity",
    "tagline": "AI 演示文稿生成工具，一句话生成专业 PPT，告别排版烦恼",
    "website": "https://gamma.app",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["400 AI credits", "基础模板", "Gamma 水印"]},
      {"plan": "Plus", "price": 10, "period": "月", "features": ["无限 AI", "无水印", "自定义字体"]},
      {"plan": "Pro", "price": 20, "period": "月", "features": ["高级分析", "自定义域名", "优先支持"]}
    ],
    "pros": ["输入主题一键生成完整演示文稿，效率极高", "设计质量远超传统 PPT 模板", "支持实时协作和在线分享", "可导出为 PPT/PDF 格式"],
    "cons": ["免费版有水印和 credits 限制", "自定义排版灵活度不如 PowerPoint", "复杂图表和数据可视化能力有限", "模板风格偏现代，不适合所有场景"],
    "bestFor": ["需要快速制作演示文稿的职场人士", "不擅长设计但需要好看 PPT 的用户", "创业者需要快速制作 Pitch Deck", "教师需要制作课件"],
    "notFor": ["需要精确控制每个元素位置的设计师", "需要复杂动画效果的演示场景"],
    "keyFeatures": {"一键生成": "输入主题或大纲，AI 自动生成完整演示文稿", "智能设计": "自动排版和配色，确保视觉效果专业", "在线分享": "生成链接直接分享，支持实时协作编辑", "多格式导出": "支持导出为 PowerPoint、PDF、网页等格式"},
    "freeLimit": "400 AI credits（约生成 10 个演示文稿），有水印",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "otter-ai",
    "name": "Otter.ai",
    "company": "Otter.ai",
    "category": "ai-productivity",
    "tagline": "AI 会议记录和转录工具，实时字幕和自动会议总结",
    "website": "https://otter.ai",
    "pricing": [
      {"plan": "Basic", "price": 0, "period": "月", "features": ["300 分钟/月", "实时转录", "基础总结"]},
      {"plan": "Pro", "price": 16.99, "period": "月", "features": ["1200 分钟/月", "高级总结", "Zoom 集成"]},
      {"plan": "Business", "price": 30, "period": "月/人", "features": ["6000 分钟/月", "管理后台", "API"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["无限分钟", "SSO", "专属支持"]}
    ],
    "pros": ["实时转录准确度高，支持说话人识别", "自动生成会议摘要和行动项", "与 Zoom/Teams/Meet 深度集成", "免费版每月 300 分钟已经够用"],
    "cons": ["中文转录准确度不如英文", "免费版功能限制逐渐增多", "离线使用能力有限", "多人同时说话时识别准确度下降"],
    "bestFor": ["远程办公团队需要会议记录", "记者和研究人员需要访谈转录", "学生需要课堂笔记自动化", "项目经理需要追踪会议决策"],
    "notFor": ["主要使用中文开会的团队", "对转录准确度有极高要求的法律场景"],
    "keyFeatures": {"实时转录": "会议进行中实时生成文字记录", "说话人识别": "自动区分不同说话人并标注", "AI 总结": "会议结束后自动生成摘要和行动项", "平台集成": "与 Zoom、Teams、Google Meet 无缝集成"},
    "freeLimit": "每月 300 分钟免费转录",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "fireflies-ai",
    "name": "Fireflies.ai",
    "company": "Fireflies.ai",
    "category": "ai-productivity",
    "tagline": "AI 会议助手，自动录制、转录和分析所有会议内容",
    "website": "https://fireflies.ai",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["无限转录", "800 分钟存储", "AI 总结"]},
      {"plan": "Pro", "price": 18, "period": "月", "features": ["无限存储", "高级搜索", "CRM 集成"]},
      {"plan": "Business", "price": 29, "period": "月/人", "features": ["对话智能", "团队分析", "API"]},
      {"plan": "Enterprise", "price": 39, "period": "月/人", "features": ["SSO", "自定义保留", "专属支持"]}
    ],
    "pros": ["免费版即可无限转录，非常慷慨", "AI 自动提取行动项、决策和问题", "支持 Salesforce/HubSpot 等 CRM 集成", "会议内容可全文搜索，快速定位信息"],
    "cons": ["免费版存储空间有限（800 分钟）", "中文转录质量一般", "Bot 加入会议时其他参会者可见", "高级分析功能需要 Business 版"],
    "bestFor": ["销售团队需要记录客户通话", "远程团队需要异步了解会议内容", "管理者需要了解团队会议效率", "需要将会议内容同步到 CRM 的团队"],
    "notFor": ["对隐私敏感不希望 Bot 录制的场景", "主要使用中文的团队"],
    "keyFeatures": {"自动录制": "Bot 自动加入会议录制，无需手动操作", "AI 分析": "自动提取行动项、决策、问题和关键时刻", "全文搜索": "搜索所有会议记录中的任何关键词", "CRM 集成": "自动将会议笔记同步到 Salesforce/HubSpot"},
    "freeLimit": "无限转录，800 分钟存储，基础 AI 总结",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "beautiful-ai",
    "name": "Beautiful.ai",
    "company": "Beautiful.ai",
    "category": "ai-productivity",
    "tagline": "AI 驱动的演示文稿设计工具，智能排版让每一页都好看",
    "website": "https://beautiful.ai",
    "pricing": [
      {"plan": "Pro", "price": 12, "period": "月", "features": ["无限演示", "AI 设计", "导出 PPT"]},
      {"plan": "Team", "price": 40, "period": "月/人", "features": ["团队协作", "品牌模板", "分析数据"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["SSO", "自定义集成", "专属支持"]}
    ],
    "pros": ["智能排版引擎自动调整布局，怎么放都好看", "设计约束确保输出始终专业美观", "丰富的智能模板库", "团队版品牌一致性控制出色"],
    "cons": ["无免费版，最低 $12/月", "设计自由度受限于智能约束", "导出的 PPT 格式可能有兼容问题", "模板风格偏西方商务"],
    "bestFor": ["不擅长设计但需要专业 PPT 的商务人士", "需要保持品牌视觉一致的团队", "经常制作提案和报告的咨询顾问"],
    "notFor": ["需要完全自定义设计的创意人员", "预算有限想用免费工具的用户"],
    "keyFeatures": {"智能排版": "AI 自动调整元素位置和大小，确保布局美观", "设计约束": "内置设计规则，防止用户做出丑陋的排版", "品牌模板": "团队版可锁定品牌色、字体、Logo", "数据可视化": "智能图表自动美化数据展示"},
    "freeLimit": "无免费版，提供 14 天免费试用",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "taskade",
    "name": "Taskade",
    "company": "Taskade",
    "category": "ai-productivity",
    "tagline": "AI 项目管理工具，自动生成任务列表、思维导图和工作流",
    "website": "https://taskade.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["基础项目管理", "有限 AI", "3 个项目"]},
      {"plan": "Pro", "price": 8, "period": "月/人", "features": ["无限项目", "AI Agent", "自动化"]},
      {"plan": "Business", "price": 16, "period": "月/人", "features": ["高级权限", "API", "优先支持"]}
    ],
    "pros": ["AI 一键生成项目计划、任务列表和思维导图", "集项目管理、笔记、协作于一体", "AI Agent 可自动执行重复性任务", "价格亲民，$8/月/人"],
    "cons": ["单项功能深度不如专业工具（如 Notion、Asana）", "AI 生成的任务列表需要人工调整", "大型团队管理功能不如企业级工具", "移动端体验不如桌面端"],
    "bestFor": ["小型团队需要轻量级项目管理", "个人用户需要 AI 辅助规划任务", "需要快速生成项目计划的项目经理", "远程团队需要协作和沟通工具"],
    "notFor": ["大型企业需要复杂项目管理", "已深度使用 Notion/Asana 的团队"],
    "keyFeatures": {"AI 生成": "输入目标自动生成任务列表、时间线和思维导图", "AI Agent": "创建自定义 AI Agent 自动执行重复任务", "多视图": "列表、看板、思维导图、日历等多种视图切换", "实时协作": "团队成员实时编辑和沟通"},
    "freeLimit": "3 个项目免费，有限 AI 功能",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "canva-ai",
    "name": "Canva AI",
    "company": "Canva",
    "category": "ai-design",
    "tagline": "全球最大在线设计平台的 AI 功能套件，Magic Studio 让设计零门槛",
    "website": "https://canva.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["基础设计", "有限 AI 功能", "5GB 存储"]},
      {"plan": "Pro", "price": 12.99, "period": "月", "features": ["Magic Studio 全功能", "1亿+ 素材", "1TB 存储"]},
      {"plan": "Teams", "price": 14.99, "period": "月/人", "features": ["品牌套件", "团队协作", "审批流程"]}
    ],
    "pros": ["Magic Studio 集成多种 AI 功能（生成、擦除、扩展等）", "模板库极其丰富，覆盖所有设计场景", "零设计基础也能做出专业作品", "免费版功能已经非常强大"],
    "cons": ["AI 图像生成质量不如 Midjourney", "专业设计师会觉得功能不够深入", "部分高级素材需要 Pro 版", "导出格式和分辨率有限制"],
    "bestFor": ["非设计专业人士需要快速做图", "社交媒体运营需要批量制作配图", "小型企业需要设计营销物料", "教师和学生需要制作海报和演示"],
    "notFor": ["专业 UI/UX 设计师", "需要精确像素控制的印刷设计"],
    "keyFeatures": {"Magic Studio": "AI 图像生成、背景移除、图像扩展等一站式 AI 工具", "海量模板": "数十万专业模板覆盖社媒、海报、PPT 等所有场景", "品牌套件": "统一管理品牌色、字体、Logo，一键应用", "协作设计": "团队实时协作编辑，评论和审批流程"},
    "freeLimit": "免费版含基础设计功能和有限 AI 使用次数",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "figma-ai",
    "name": "Figma AI",
    "company": "Figma",
    "category": "ai-design",
    "tagline": "专业 UI/UX 设计工具的 AI 辅助功能，自动布局和组件生成",
    "website": "https://figma.com",
    "pricing": [
      {"plan": "Starter", "price": 0, "period": "月", "features": ["3 个文件", "基础 AI", "协作"]},
      {"plan": "Professional", "price": 15, "period": "月/人", "features": ["无限文件", "AI 功能", "组件库"]},
      {"plan": "Organization", "price": 45, "period": "月/人", "features": ["设计系统", "分析", "SSO"]},
      {"plan": "Enterprise", "price": 75, "period": "月/人", "features": ["高级安全", "专属支持", "自定义"]}
    ],
    "pros": ["AI 自动生成 UI 组件和布局建议", "与 Figma 设计工作流无缝集成", "AI 重命名图层、生成文案等提效功能", "行业标准的协作设计工具"],
    "cons": ["AI 功能相比独立 AI 设计工具较基础", "需要 Professional 版才能使用完整 AI", "学习曲线比 Canva 高", "AI 生成的设计仍需人工调整"],
    "bestFor": ["UI/UX 设计师日常工作提效", "设计团队需要 AI 辅助加速原型制作", "产品经理需要快速生成线框图", "已使用 Figma 的团队想要 AI 增强"],
    "notFor": ["非设计专业人士（Canva 更适合）", "只需要简单图片编辑的用户"],
    "keyFeatures": {"AI 布局": "描述需求自动生成 UI 布局和组件", "智能重命名": "AI 自动为图层和组件命名，保持文件整洁", "AI 文案": "自动生成 UI 中的占位文案和微文案", "设计系统": "AI 辅助维护和扩展设计系统组件"},
    "freeLimit": "Starter 版含 3 个文件和基础 AI 功能",
    "lastUpdated": "2026-05-22"
  }
];

tools.push(...newTools);
writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf-8');
console.log('Batch 3: Added ' + newTools.length + ' tools. Total: ' + tools.length);
