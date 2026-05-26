import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsPath = join(__dirname, '..', 'data', 'tools.json');
const tools = JSON.parse(readFileSync(toolsPath, 'utf-8'));

const newTools = [
  {
    "slug": "kling",
    "name": "可灵 (Kling)",
    "company": "快手",
    "category": "ai-video",
    "tagline": "快手推出的 AI 视频生成工具，中文理解出色，免费版慷慨",
    "website": "https://klingai.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["每天免费生成", "720p 视频", "基础功能"]},
      {"plan": "Standard", "price": 6.99, "period": "月", "features": ["更多生成次数", "1080p", "优先队列"]},
      {"plan": "Pro", "price": 29.99, "period": "月", "features": ["大量生成", "最高画质", "商用授权"]},
      {"plan": "Premier", "price": 59.99, "period": "月", "features": ["无限生成", "4K 画质", "API 访问"]}
    ],
    "pros": ["免费版每天可生成多段视频，业界最慷慨", "中文提示词理解准确，无需翻译成英文", "支持最长 3 分钟视频生成，远超竞品", "Kling 3.0 画质接近 Runway Gen-4 水平"],
    "cons": ["英文提示词效果不如中文", "部分功能需要中国手机号注册", "海外访问速度可能较慢", "商用授权条款需仔细确认"],
    "bestFor": ["中文用户需要 AI 视频生成", "预算有限想免费体验 AI 视频的创作者", "需要生成较长视频片段的用户", "短视频创作者需要快速产出素材"],
    "notFor": ["需要专业视频编辑工具链的影视团队", "对英文提示词有强需求的海外用户"],
    "keyFeatures": {"免费生成": "每天免费生成多段视频，零成本体验", "长视频": "支持最长 3 分钟视频生成，远超 10 秒限制", "中文理解": "中文提示词直接使用，理解准确", "Kling 3.0": "最新模型画质大幅提升，运动更自然"},
    "freeLimit": "每天免费生成多段视频，720p 画质",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "pika",
    "name": "Pika",
    "company": "Pika Labs",
    "category": "ai-video",
    "tagline": "轻量级 AI 视频生成工具，界面简洁直观，上手零门槛",
    "website": "https://pika.art",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["每天 10 次生成", "3 秒视频", "720p"]},
      {"plan": "Standard", "price": 10, "period": "月", "features": ["700 credits/月", "10 秒视频", "1080p"]},
      {"plan": "Pro", "price": 35, "period": "月", "features": ["2000 credits/月", "优先队列", "无水印"]},
      {"plan": "Unlimited", "price": 95, "period": "月", "features": ["无限生成", "最高画质", "商用授权"]}
    ],
    "pros": ["界面极其简洁，上手零学习成本", "免费版每天可生成 10 段视频", "Lip Sync 口型同步功能实用", "支持图片转视频和视频编辑"],
    "cons": ["免费版视频仅 3 秒，太短", "画质和运动自然度不如 Runway", "高级功能 credits 消耗快", "风格控制选项较少"],
    "bestFor": ["AI 视频入门用户，想快速体验", "社交媒体短视频创作者", "需要简单视频特效的内容创作者"],
    "notFor": ["需要高质量长视频的专业创作者", "对画质有极高要求的影视团队"],
    "keyFeatures": {"极简界面": "拖拽上传或输入文字即可生成，零学习成本", "Lip Sync": "让图片中的人物开口说话，口型同步", "图片动画": "上传静态图片一键生成动态视频", "视频编辑": "对已有视频进行 AI 风格转换和编辑"},
    "freeLimit": "每天 10 次免费生成，3 秒 720p 视频",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "heygen",
    "name": "HeyGen",
    "company": "HeyGen",
    "category": "ai-video",
    "tagline": "AI 数字人视频平台，支持口型同步和多语言视频翻译",
    "website": "https://heygen.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["1 分钟免费视频", "基础数字人"]},
      {"plan": "Creator", "price": 29, "period": "月", "features": ["15 分钟/月", "100+ 数字人", "1080p"]},
      {"plan": "Business", "price": 89, "period": "月", "features": ["30 分钟/月", "自定义数字人", "API 访问"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["无限时长", "专属数字人", "优先支持"]}
    ],
    "pros": ["数字人形象逼真，口型和表情同步自然", "视频翻译功能可将视频翻译成 40+ 语言并同步口型", "100+ 预设数字人形象可直接使用", "支持上传自己的形象创建专属数字人"],
    "cons": ["免费版仅 1 分钟，体验有限", "自定义数字人需要 Business 版", "生成时间较长，复杂视频需等待", "数字人偶尔出现不自然的微表情"],
    "bestFor": ["企业培训视频制作，无需真人出镜", "多语言营销视频本地化", "电商产品介绍视频批量制作", "个人 IP 打造数字分身"],
    "notFor": ["需要创意视觉特效的艺术创作", "追求完全真实感的高端广告制作"],
    "keyFeatures": {"数字人": "100+ 逼真数字人形象，口型和表情自然同步", "视频翻译": "将视频翻译成 40+ 语言，自动同步口型", "自定义形象": "上传 2 分钟视频即可创建你的数字分身", "模板库": "数百个场景模板，快速制作专业视频"},
    "freeLimit": "1 分钟免费视频，基础数字人形象",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "synthesia",
    "name": "Synthesia",
    "company": "Synthesia",
    "category": "ai-video",
    "tagline": "企业级 AI 数字人视频平台，培训和内部沟通视频的首选方案",
    "website": "https://synthesia.io",
    "pricing": [
      {"plan": "Starter", "price": 29, "period": "月", "features": ["10 分钟/月", "90+ 数字人", "基础编辑"]},
      {"plan": "Creator", "price": 89, "period": "月", "features": ["30 分钟/月", "150+ 数字人", "自定义品牌"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["无限视频", "自定义数字人", "API", "SSO"]}
    ],
    "pros": ["企业级安全合规，SOC 2 和 GDPR 认证", "150+ 多样化数字人形象，覆盖各种族和年龄", "支持 140+ 语言，全球化企业首选", "与 LMS 和企业工具集成完善"],
    "cons": ["无免费版，最低 $29/月起步", "数字人风格偏商务，不适合创意内容", "视频风格较为模板化，个性化有限", "生成速度不如竞品快"],
    "bestFor": ["企业内部培训视频批量制作", "全球化企业的多语言沟通视频", "HR 部门的入职培训和政策宣导", "产品演示和客户教育视频"],
    "notFor": ["个人创作者和小型团队（价格偏高）", "需要创意视觉效果的营销视频"],
    "keyFeatures": {"企业合规": "SOC 2 Type II、GDPR 认证，满足企业安全要求", "140+ 语言": "支持全球主要语言，一键切换数字人语言", "LMS 集成": "与主流学习管理系统无缝集成", "品牌定制": "自定义品牌色、Logo、模板，保持企业视觉一致"},
    "freeLimit": "无免费版，提供免费演示",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "murf-ai",
    "name": "Murf AI",
    "company": "Murf AI",
    "category": "ai-voice",
    "tagline": "企业级 AI 配音平台，120+ 逼真声音覆盖 20+ 语言",
    "website": "https://murf.ai",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["10 分钟生成", "基础声音", "有水印"]},
      {"plan": "Creator", "price": 26, "period": "月", "features": ["2 小时/月", "120+ 声音", "无水印"]},
      {"plan": "Business", "price": 59, "period": "月", "features": ["4 小时/月", "声音克隆", "API 访问"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["无限生成", "自定义声音", "SSO"]}
    ],
    "pros": ["120+ 高质量声音，覆盖多种语气和风格", "支持 20+ 语言，适合多语言内容制作", "内置视频编辑器，可直接配音到视频", "企业级功能完善，团队协作方便"],
    "cons": ["免费版有水印且时长极短", "声音自然度略逊于 ElevenLabs", "声音克隆需要 Business 版", "中文声音选择相对有限"],
    "bestFor": ["企业培训和产品演示视频配音", "YouTube 和播客内容创作者", "多语言营销内容制作团队", "电商产品视频批量配音"],
    "notFor": ["追求最极致语音自然度的用户", "只需要简单 TTS 的基础场景"],
    "keyFeatures": {"120+ 声音": "覆盖不同年龄、性别、语气的高质量声音", "视频编辑器": "内置时间轴编辑器，直接为视频添加配音", "多语言": "20+ 语言支持，同一声音可切换语言", "团队协作": "多人编辑、审批流程、项目管理"},
    "freeLimit": "10 分钟免费生成，有水印",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "play-ht",
    "name": "Play.ht",
    "company": "Play.ht",
    "category": "ai-voice",
    "tagline": "超逼真 AI 语音生成平台，开发者友好的语音 API",
    "website": "https://play.ht",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["12500 字符/月", "基础声音"]},
      {"plan": "Pro", "price": 39, "period": "月", "features": ["200000 字符/月", "高级声音", "声音克隆"]},
      {"plan": "Business", "price": 99, "period": "月", "features": ["500000 字符/月", "API 访问", "商用授权"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["无限字符", "自定义模型", "SLA"]}
    ],
    "pros": ["语音自然度极高，接近 ElevenLabs 水平", "API 设计优秀，开发者集成方便", "支持实时流式语音生成，延迟低", "声音克隆质量好，少量样本即可"],
    "cons": ["免费版字符数很少，只够简单体验", "价格比 ElevenLabs 稍高", "中文声音质量不如英文", "Web 编辑器功能不如 Murf 丰富"],
    "bestFor": ["需要语音 API 集成的开发者和产品", "构建语音对话应用的技术团队", "播客和有声书制作者", "需要实时语音生成的应用场景"],
    "notFor": ["只需要偶尔生成语音的轻度用户", "预算有限的个人创作者"],
    "keyFeatures": {"超逼真语音": "最新模型语音自然度接近真人水平", "流式 API": "实时流式语音生成，适合对话应用", "声音克隆": "上传少量音频即可克隆声音", "多格式输出": "支持 MP3、WAV、OGG 等多种音频格式"},
    "freeLimit": "每月 12500 字符（约 3 分钟音频）",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "descript",
    "name": "Descript",
    "company": "Descript",
    "category": "ai-voice",
    "tagline": "AI 音视频编辑一体化平台，像编辑文档一样编辑视频和播客",
    "website": "https://descript.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["1 小时转录", "基础编辑", "有水印"]},
      {"plan": "Hobbyist", "price": 24, "period": "月", "features": ["10 小时转录", "AI 语音", "无水印"]},
      {"plan": "Pro", "price": 33, "period": "月", "features": ["30 小时转录", "高级 AI 功能", "协作"]},
      {"plan": "Business", "price": 40, "period": "月", "features": ["无限转录", "团队管理", "API"]}
    ],
    "pros": ["革命性的文本式视频编辑，删除文字即删除对应视频片段", "AI 语音克隆可修复口误，无需重新录制", "转录准确度高，支持多语言", "集音频编辑、视频编辑、屏幕录制于一体"],
    "cons": ["学习曲线比传统编辑器稍高", "复杂视频编辑功能不如 Premiere/DaVinci", "AI 语音修复偶尔听起来不自然", "免费版功能限制较多"],
    "bestFor": ["播客制作者需要快速编辑和转录", "YouTube 创作者需要高效剪辑工作流", "企业内部视频和培训内容制作", "需要将视频内容转为文字的团队"],
    "notFor": ["专业影视后期制作", "只需要简单语音合成的用户"],
    "keyFeatures": {"文本式编辑": "编辑转录文本即可编辑对应的音视频片段", "AI 语音克隆": "克隆你的声音，用 AI 修复口误和补录内容", "自动转录": "高准确度语音转文字，支持多语言", "屏幕录制": "内置屏幕录制，适合教程和演示视频"},
    "freeLimit": "1 小时免费转录，基础编辑功能，有水印",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "suno",
    "name": "Suno",
    "company": "Suno AI",
    "category": "ai-voice",
    "tagline": "AI 音乐生成平台，输入文字描述即可创作完整歌曲",
    "website": "https://suno.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["每天 5 首歌", "非商用", "基础功能"]},
      {"plan": "Pro", "price": 10, "period": "月", "features": ["500 首/月", "商用授权", "优先生成"]},
      {"plan": "Premier", "price": 30, "period": "月", "features": ["2000 首/月", "最高优先级", "批量生成"]}
    ],
    "pros": ["生成的歌曲质量惊人，旋律和编曲都很专业", "支持多种音乐风格，从流行到古典都能驾驭", "免费版每天 5 首歌，体验慷慨", "可以输入歌词或让 AI 自动创作歌词"],
    "cons": ["生成结果随机性大，需要多次尝试", "无法精确控制编曲细节", "商用授权条款需仔细阅读", "长歌曲（3分钟以上）质量可能下降"],
    "bestFor": ["需要背景音乐的视频创作者", "想要快速创作 Demo 的音乐人", "社交媒体内容需要原创配乐", "娱乐和创意探索"],
    "notFor": ["专业音乐制作人需要精确控制", "需要特定乐器编排的商业项目"],
    "keyFeatures": {"文字生成音乐": "描述风格和情绪，AI 自动创作完整歌曲", "歌词创作": "输入主题自动生成歌词，或使用自定义歌词", "多风格支持": "流行、摇滚、电子、古典、说唱等全覆盖", "快速迭代": "几秒钟生成一首歌，快速探索不同方向"},
    "freeLimit": "每天免费生成 5 首歌曲，非商用",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "copy-ai",
    "name": "Copy.ai",
    "company": "Copy.ai Inc",
    "category": "ai-writing",
    "tagline": "AI 营销文案自动化平台，工作流驱动的内容生成引擎",
    "website": "https://copy.ai",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["2000 字/月", "基础模板", "1 个用户"]},
      {"plan": "Starter", "price": 49, "period": "月", "features": ["无限字数", "品牌声音", "5 个用户"]},
      {"plan": "Advanced", "price": 249, "period": "月", "features": ["工作流自动化", "API 访问", "15 个用户"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["无限用户", "自定义集成", "专属支持"]}
    ],
    "pros": ["有免费版可体验基础功能", "Workflows 工作流自动化功能强大", "GTM（Go-to-Market）场景覆盖全面", "支持多种营销渠道内容一键生成"],
    "cons": ["免费版每月仅 2000 字，非常有限", "高级工作流功能价格不低（$249/月）", "品牌声音控制不如 Jasper 深入", "中文内容生成质量一般"],
    "bestFor": ["需要自动化营销工作流的中型企业", "GTM 团队需要批量产出销售内容", "预算有限想先免费体验的小团队", "需要多渠道内容同步生成的营销人员"],
    "notFor": ["只需要简单文案的个人用户", "对中文内容质量要求极高的团队"],
    "keyFeatures": {"Workflows": "可视化工作流编辑器，自动化整个内容生产流程", "GTM 模板": "覆盖销售邮件、LinkedIn 帖子、广告文案等场景", "品牌声音": "训练 AI 学习品牌调性，保持输出一致", "多渠道": "一次输入，自动生成适配不同平台的内容"},
    "freeLimit": "每月 2000 字免费，1 个用户",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "writesonic",
    "name": "Writesonic",
    "company": "Writesonic",
    "category": "ai-writing",
    "tagline": "性价比高的 AI 写作工具，集成 SEO 优化和 AI 图像生成",
    "website": "https://writesonic.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["10000 字/月", "基础功能"]},
      {"plan": "Individual", "price": 16, "period": "月", "features": ["无限字数", "Chatsonic", "AI 图像"]},
      {"plan": "Team", "price": 13, "period": "月/人", "features": ["团队协作", "品牌声音", "API"]},
      {"plan": "Enterprise", "price": 0, "period": "定制", "features": ["自定义集成", "专属模型", "SLA"]}
    ],
    "pros": ["$16/月无限字数，性价比极高", "Chatsonic 集成实时搜索，信息更新", "内置 AI 图像生成，图文一体化", "SEO 优化功能帮助内容排名"],
    "cons": ["写作质量不如 ChatGPT 和 Claude", "品牌声音功能不如 Jasper 深入", "界面设计略显杂乱", "高级 SEO 功能需要额外付费"],
    "bestFor": ["预算有限但需要大量内容产出的博主", "SEO 内容创作者需要优化建议", "需要图文并茂内容的社媒运营", "小型企业需要性价比高的 AI 写作工具"],
    "notFor": ["对写作质量有极高要求的专业作家", "大型企业需要完善的团队管理功能"],
    "keyFeatures": {"Chatsonic": "集成实时搜索的 AI 聊天，信息始终最新", "SEO 优化": "基于搜索数据优化内容结构和关键词", "AI 图像": "内置图像生成，无需切换工具", "无限字数": "$16/月即可无限生成，性价比极高"},
    "freeLimit": "每月 10000 字免费",
    "lastUpdated": "2026-05-22"
  }
];

tools.push(...newTools);
writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf-8');
console.log('Batch 2: Added ' + newTools.length + ' tools. Total: ' + tools.length);
