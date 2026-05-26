import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const comparisonsPath = join(__dirname, '..', 'data', 'comparisons.json');
const comparisons = JSON.parse(readFileSync(comparisonsPath, 'utf-8'));

const newComparisons = [
  {
    "slug": "chatgpt-vs-deepseek",
    "toolA": "chatgpt",
    "toolB": "deepseek",
    "title": "ChatGPT vs DeepSeek：付费全能 vs 免费推理王",
    "verdict": "ChatGPT 生态最完整多模态最强，DeepSeek 完全免费且推理能力接近顶尖",
    "keyDifferences": [
      {"dimension": "价格", "toolA": "免费版有限，Plus $20/月", "toolB": "完全免费，所有功能无限使用", "winner": "b"},
      {"dimension": "推理能力", "toolA": "o1 推理强但需 Pro 版 $200/月", "toolB": "R1 推理接近 o1 水平且免费", "winner": "b"},
      {"dimension": "多模态", "toolA": "图像生成、语音、视频全覆盖", "toolB": "仅文字交互，无图像和语音", "winner": "a"},
      {"dimension": "生态系统", "toolA": "GPTs 商店、插件、Canvas 等丰富生态", "toolB": "功能较单一，无插件生态", "winner": "a"},
      {"dimension": "稳定性", "toolA": "服务稳定，几乎无宕机", "toolB": "高峰期拥挤，响应速度不稳定", "winner": "a"}
    ],
    "bestForA": "ChatGPT 更适合需要多模态能力、丰富插件生态和稳定服务的用户",
    "bestForB": "DeepSeek 更适合预算有限、主要需要文字对话和推理能力的用户",
    "pricingComparison": "DeepSeek 完全免费 vs ChatGPT Plus $20/月；如果只需要文字对话和推理，DeepSeek 性价比无敌"
  },
  {
    "slug": "cursor-vs-claude-code",
    "toolA": "cursor",
    "toolB": "claude-code",
    "title": "Cursor vs Claude Code：图形化 IDE vs 终端 Agent",
    "verdict": "Cursor 适合偏好图形界面的日常编码，Claude Code 适合终端工作流的复杂任务",
    "keyDifferences": [
      {"dimension": "交互方式", "toolA": "图形化 IDE，可视化代码差异", "toolB": "纯终端命令行，无图形界面", "winner": "a"},
      {"dimension": "代码推理", "toolA": "多模型可选，整体能力强", "toolB": "Opus 4.7 代码推理业界顶尖", "winner": "b"},
      {"dimension": "自主性", "toolA": "Composer 需要用户确认每步操作", "toolB": "可完全自主执行多步骤任务", "winner": "b"},
      {"dimension": "上手难度", "toolA": "VS Code 用户零学习成本", "toolB": "需要终端经验，新手门槛高", "winner": "a"},
      {"dimension": "价格模式", "toolA": "固定月费 $20-200", "toolB": "按 API 用量计费，重度使用成本高", "winner": "tie"}
    ],
    "bestForA": "Cursor 更适合偏好图形界面、日常编码提效、VS Code 用户",
    "bestForB": "Claude Code 更适合终端重度用户、需要 AI 自主完成复杂任务的高级开发者",
    "pricingComparison": "Cursor Pro $20/月固定费用 vs Claude Code 按用量计费（轻度使用更便宜，重度使用可能更贵）"
  },
  {
    "slug": "midjourney-vs-flux",
    "toolA": "midjourney",
    "toolB": "flux-pro",
    "title": "Midjourney vs FLUX Pro：2026 年图像生成双雄对决",
    "verdict": "Midjourney 美学风格更强且易用，FLUX Pro 开源灵活且按量付费更划算",
    "keyDifferences": [
      {"dimension": "画质", "toolA": "v8 美学质量极高，色彩构图出众", "toolB": "画质并列榜首，写实风格略胜", "winner": "tie"},
      {"dimension": "使用方式", "toolA": "Web 界面直接使用，零门槛", "toolB": "需通过 API 或第三方平台，有门槛", "winner": "a"},
      {"dimension": "价格模式", "toolA": "月费 $10-120，固定订阅", "toolB": "按张 $0.05-0.10，用多少付多少", "winner": "b"},
      {"dimension": "开源", "toolA": "完全闭源，不可本地部署", "toolB": "Schnell 版开源免费，可本地运行", "winner": "b"},
      {"dimension": "社区生态", "toolA": "庞大社区，海量提示词和风格参考", "toolB": "社区较小，资源有限", "winner": "a"}
    ],
    "bestForA": "Midjourney 更适合追求美学质量、不想折腾技术的设计师和创意工作者",
    "bestForB": "FLUX Pro 更适合需要 API 集成、按量付费、或想本地部署的技术用户",
    "pricingComparison": "Midjourney Basic $10/月约 200 张 vs FLUX Pro $0.05/张（200 张=$10）；轻度使用价格相当，重度使用 FLUX 按量更灵活"
  },
  {
    "slug": "kling-vs-pika",
    "toolA": "kling",
    "toolB": "pika",
    "title": "可灵 vs Pika：AI 视频生成新势力对比",
    "verdict": "可灵在视频时长和中文支持上领先，Pika 在易用性和特效功能上更出色",
    "keyDifferences": [
      {"dimension": "视频时长", "toolA": "支持最长 3 分钟视频", "toolB": "免费版仅 3 秒，付费最长 10 秒", "winner": "a"},
      {"dimension": "中文支持", "toolA": "中文提示词理解准确", "toolB": "英文效果更好", "winner": "a"},
      {"dimension": "免费额度", "toolA": "每天免费生成多段视频", "toolB": "每天 10 次免费生成", "winner": "a"},
      {"dimension": "易用性", "toolA": "界面功能较多，稍复杂", "toolB": "极简界面，拖拽即用", "winner": "b"},
      {"dimension": "特效功能", "toolA": "主要是生成功能", "toolB": "Lip Sync、风格转换等特效丰富", "winner": "b"}
    ],
    "bestForA": "可灵更适合中文用户、需要较长视频、预算有限的创作者",
    "bestForB": "Pika 更适合追求简单易用、需要特效功能的短视频创作者",
    "pricingComparison": "可灵免费版更慷慨；付费版可灵 $6.99/月起 vs Pika $10/月起"
  },
  {
    "slug": "elevenlabs-vs-murf",
    "toolA": "elevenlabs",
    "toolB": "murf-ai",
    "title": "ElevenLabs vs Murf AI：AI 配音工具终极对比",
    "verdict": "ElevenLabs 语音自然度更高适合高端需求，Murf 功能更全面适合企业批量制作",
    "keyDifferences": [
      {"dimension": "语音自然度", "toolA": "业界最高，几乎无法区分真人", "toolB": "质量好但自然度略逊一筹", "winner": "a"},
      {"dimension": "声音克隆", "toolA": "1-3 分钟音频即可高质量克隆", "toolB": "需要 Business 版，门槛更高", "winner": "a"},
      {"dimension": "视频编辑", "toolA": "纯语音工具，无视频功能", "toolB": "内置视频编辑器，可直接配音到视频", "winner": "b"},
      {"dimension": "企业功能", "toolA": "API 为主，企业管理较基础", "toolB": "团队协作、审批流程完善", "winner": "b"},
      {"dimension": "价格", "toolA": "Starter $5/月起，性价比高", "toolB": "Creator $26/月起，门槛较高", "winner": "a"}
    ],
    "bestForA": "ElevenLabs 更适合追求最高语音质量、需要声音克隆的创作者和开发者",
    "bestForB": "Murf AI 更适合需要视频配音一体化、团队协作的企业用户",
    "pricingComparison": "ElevenLabs Starter $5/月（30000 字符）vs Murf Creator $26/月（2 小时）；ElevenLabs 入门更便宜"
  },
  {
    "slug": "canva-ai-vs-figma-ai",
    "toolA": "canva-ai",
    "toolB": "figma-ai",
    "title": "Canva AI vs Figma AI：设计工具 AI 化谁更实用？",
    "verdict": "Canva AI 适合非设计师快速出图，Figma AI 适合专业 UI/UX 设计师提效",
    "keyDifferences": [
      {"dimension": "目标用户", "toolA": "非设计专业人士，零基础可用", "toolB": "专业 UI/UX 设计师", "winner": "tie"},
      {"dimension": "AI 功能丰富度", "toolA": "Magic Studio 功能全面（生成/擦除/扩展）", "toolB": "AI 辅助布局和命名，功能较基础", "winner": "a"},
      {"dimension": "设计深度", "toolA": "模板化设计，灵活度有限", "toolB": "像素级精确控制，专业深度", "winner": "b"},
      {"dimension": "免费版", "toolA": "免费版功能强大，日常够用", "toolB": "Starter 版 3 个文件限制", "winner": "a"},
      {"dimension": "协作", "toolA": "基础协作和评论", "toolB": "实时协作、设计系统、版本管理", "winner": "b"}
    ],
    "bestForA": "Canva AI 更适合非设计师、社媒运营、小企业快速制作营销物料",
    "bestForB": "Figma AI 更适合专业设计团队、产品团队的 UI/UX 设计工作流",
    "pricingComparison": "Canva Pro $12.99/月 vs Figma Professional $15/月/人；Canva 免费版更实用"
  },
  {
    "slug": "gamma-vs-beautiful-ai",
    "toolA": "gamma",
    "toolB": "beautiful-ai",
    "title": "Gamma vs Beautiful.ai：AI PPT 工具哪个更好用？",
    "verdict": "Gamma 更适合快速生成内容驱动的演示，Beautiful.ai 更适合追求设计品质的商务演示",
    "keyDifferences": [
      {"dimension": "AI 生成能力", "toolA": "输入主题一键生成完整 PPT", "toolB": "智能排版为主，内容生成较弱", "winner": "a"},
      {"dimension": "设计质量", "toolA": "设计现代但模板化", "toolB": "智能约束确保每页都美观专业", "winner": "b"},
      {"dimension": "免费版", "toolA": "400 credits 免费，可生成约 10 个 PPT", "toolB": "无免费版，$12/月起", "winner": "a"},
      {"dimension": "导出格式", "toolA": "支持 PPT/PDF 导出", "toolB": "支持 PPT 导出但格式偶有问题", "winner": "a"},
      {"dimension": "品牌控制", "toolA": "基础品牌设置", "toolB": "团队版品牌锁定功能强大", "winner": "b"}
    ],
    "bestForA": "Gamma 更适合需要快速生成内容、有免费需求的个人用户和小团队",
    "bestForB": "Beautiful.ai 更适合注重设计品质、需要品牌一致性的商务团队",
    "pricingComparison": "Gamma Plus $10/月 vs Beautiful.ai Pro $12/月；Gamma 有免费版优势明显"
  },
  {
    "slug": "grammarly-vs-chatgpt",
    "toolA": "grammarly",
    "toolB": "chatgpt",
    "title": "Grammarly vs ChatGPT：写作辅助 vs 通用 AI，谁更适合写作？",
    "verdict": "Grammarly 胜在实时纠错和无缝嵌入工作流，ChatGPT 胜在创作能力和通用性",
    "keyDifferences": [
      {"dimension": "使用方式", "toolA": "浏览器插件实时检查，无需切换窗口", "toolB": "需要复制粘贴到对话框", "winner": "a"},
      {"dimension": "纠错能力", "toolA": "语法、拼写、标点检查极其精准", "toolB": "能纠错但不如专业工具全面", "winner": "a"},
      {"dimension": "创作能力", "toolA": "改写和建议为主，原创能力有限", "toolB": "可从零创作长文、故事、报告", "winner": "b"},
      {"dimension": "多功能性", "toolA": "专注写作辅助，功能单一", "toolB": "写作+编程+分析+图像，全能型", "winner": "b"},
      {"dimension": "中文支持", "toolA": "主要支持英文", "toolB": "中英文都支持且质量高", "winner": "b"}
    ],
    "bestForA": "Grammarly 更适合英文写作频繁、需要实时纠错的职场人士",
    "bestForB": "ChatGPT 更适合需要 AI 辅助创作内容、中文写作、或多种任务的用户",
    "pricingComparison": "Grammarly Premium $12/月 vs ChatGPT Plus $20/月；Grammarly 免费版纠错已够用，ChatGPT 免费版创作能力有限"
  },
  {
    "slug": "deepseek-vs-claude",
    "toolA": "deepseek",
    "toolB": "claude",
    "title": "DeepSeek vs Claude：免费开源 vs 商业顶尖",
    "verdict": "DeepSeek 完全免费推理能力强，Claude 在长文本和指令精确度上无可匹敌",
    "keyDifferences": [
      {"dimension": "价格", "toolA": "完全免费，无任何限制", "toolB": "免费版极少，Pro $20/月", "winner": "a"},
      {"dimension": "长文本处理", "toolA": "上下文窗口较小", "toolB": "200K token 超长上下文", "winner": "b"},
      {"dimension": "指令遵循", "toolA": "基本准确，复杂格式偶有偏差", "toolB": "格式控制精确度业界最佳", "winner": "b"},
      {"dimension": "推理能力", "toolA": "R1 模型推理接近 o1 水平", "toolB": "Opus 推理强但非专门优化", "winner": "a"},
      {"dimension": "开源部署", "toolA": "模型开源，可本地部署", "toolB": "闭源，只能通过 API 使用", "winner": "a"}
    ],
    "bestForA": "DeepSeek 更适合预算有限、需要推理能力、或想本地部署的用户",
    "bestForB": "Claude 更适合处理长文档、需要精确格式输出、重度编程的专业用户",
    "pricingComparison": "DeepSeek 完全免费 vs Claude Pro $20/月；预算是决定因素"
  },
  {
    "slug": "notion-ai-vs-chatgpt",
    "toolA": "notion-ai",
    "toolB": "chatgpt",
    "title": "Notion AI vs ChatGPT：嵌入式 AI vs 独立 AI 助手",
    "verdict": "Notion AI 胜在与知识库深度集成，ChatGPT 胜在通用能力和独立使用",
    "keyDifferences": [
      {"dimension": "知识库集成", "toolA": "直接基于你的 Notion 文档回答", "toolB": "需要手动上传或粘贴内容", "winner": "a"},
      {"dimension": "通用能力", "toolA": "局限于 Notion 内容和写作", "toolB": "编程、图像、语音等全能", "winner": "b"},
      {"dimension": "使用场景", "toolA": "文档写作、知识管理、数据库", "toolB": "几乎所有场景", "winner": "b"},
      {"dimension": "价格", "toolA": "$10/月/人（需已有 Notion）", "toolB": "Plus $20/月", "winner": "a"},
      {"dimension": "团队价值", "toolA": "团队知识库即时可查询", "toolB": "个人工具为主", "winner": "a"}
    ],
    "bestForA": "Notion AI 更适合已重度使用 Notion 的团队，需要从知识库中快速获取答案",
    "bestForB": "ChatGPT 更适合需要通用 AI 能力、不局限于特定平台的用户",
    "pricingComparison": "Notion AI $10/月/人（附加费）vs ChatGPT Plus $20/月；Notion AI 更便宜但必须搭配 Notion 使用"
  },
  {
    "slug": "perplexity-vs-gemini",
    "toolA": "perplexity",
    "toolB": "gemini",
    "title": "Perplexity vs Gemini：AI 搜索专家 vs Google 全能 AI",
    "verdict": "Perplexity 搜索体验更纯粹来源更透明，Gemini 与 Google 生态集成更深",
    "keyDifferences": [
      {"dimension": "搜索体验", "toolA": "每句话标注来源，一键验证", "toolB": "有搜索能力但来源标注不如 Perplexity 清晰", "winner": "a"},
      {"dimension": "生态集成", "toolA": "独立平台，无生态绑定", "toolB": "深度集成 Gmail/Docs/Drive", "winner": "b"},
      {"dimension": "创作能力", "toolA": "专注搜索，创作能力有限", "toolB": "搜索+创作+多模态全能", "winner": "b"},
      {"dimension": "免费版", "toolA": "无限快速搜索 + 5 次/天 Pro", "toolB": "Gemini 2.5 Flash 无限使用", "winner": "b"},
      {"dimension": "信息准确度", "toolA": "多源交叉验证，准确度高", "toolB": "偶尔出现幻觉", "winner": "a"}
    ],
    "bestForA": "Perplexity 更适合需要准确、有来源的信息检索的研究人员",
    "bestForB": "Gemini 更适合 Google 生态用户、需要搜索+创作一体化的用户",
    "pricingComparison": "Perplexity Pro $20/月 vs Gemini Advanced $19.99/月（含 2TB 存储）；价格相当但 Gemini 附加值更多"
  },
  {
    "slug": "suno-vs-udio",
    "toolA": "suno",
    "toolB": "udio",
    "title": "Suno vs Udio：AI 音乐生成谁更强？",
    "verdict": "Suno 歌曲完整度和旋律更好，Udio 音质和乐器细节更出色",
    "keyDifferences": [
      {"dimension": "歌曲完整度", "toolA": "生成的歌曲结构完整，有前奏副歌", "toolB": "片段质量高但完整性稍逊", "winner": "a"},
      {"dimension": "音质", "toolA": "音质好但偶有瑕疵", "toolB": "音质更清晰，乐器分离度高", "winner": "b"},
      {"dimension": "免费额度", "toolA": "每天 5 首歌免费", "toolB": "每天约 5 首歌免费", "winner": "tie"},
      {"dimension": "风格多样性", "toolA": "流行、摇滚、电子等主流风格强", "toolB": "古典、爵士等复杂风格更好", "winner": "b"},
      {"dimension": "歌词控制", "toolA": "可输入自定义歌词或 AI 生成", "toolB": "歌词控制选项更多", "winner": "b"}
    ],
    "bestForA": "Suno 更适合需要快速生成完整歌曲的内容创作者",
    "bestForB": "Udio 更适合对音质和乐器细节有要求的音乐爱好者",
    "pricingComparison": "Suno Pro $10/月（500 首）vs Udio Standard $10/月（类似额度）；价格相当",
    "toolBInfo": {"name": "Udio", "company": "Udio", "website": "https://udio.com", "description": "AI 音乐生成平台，音质出色，擅长复杂音乐风格，免费版每天可生成数首歌曲"}
  }
];

comparisons.push(...newComparisons);
writeFileSync(comparisonsPath, JSON.stringify(comparisons, null, 2), 'utf-8');
console.log('Added ' + newComparisons.length + ' comparisons. Total: ' + comparisons.length);
