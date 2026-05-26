import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const altPath = join(__dirname, '..', 'data', 'alternatives.json');
const alternatives = JSON.parse(readFileSync(altPath, 'utf-8'));

const newAlternatives = [
  {
    "slug": "dall-e-alternatives",
    "tool": "dall-e",
    "title": "5 个 DALL-E 替代品推荐（2026 年）",
    "description": "DALL-E 4 集成在 ChatGPT 中使用方便，但如果你需要更多风格控制或免费选项，这些替代品值得考虑。",
    "alternatives": [
      {
        "slug": "midjourney",
        "name": "Midjourney",
        "reason": "美学质量业界顶尖，社区庞大，适合追求艺术感和视觉冲击力的创作者",
        "prosVsOriginal": ["美学质量更高", "社区生态庞大", "风格一致性强"],
        "consVsOriginal": ["无免费版", "需要 Discord 或 Web 操作", "文字渲染不如 DALL-E"]
      },
      {
        "slug": "flux-pro",
        "name": "FLUX Pro",
        "reason": "按量付费更灵活，写实风格出色，开源版本可本地部署",
        "prosVsOriginal": ["按量付费更灵活", "Schnell 版免费开源", "写实风格极佳"],
        "consVsOriginal": ["需要通过 API 或第三方使用", "社区较小"]
      },
      {
        "slug": "stable-diffusion",
        "name": "Stable Diffusion",
        "reason": "完全免费开源，可本地运行，ControlNet 提供精确控制能力",
        "prosVsOriginal": ["完全免费", "本地运行无限生成", "ControlNet 精确控制"],
        "consVsOriginal": ["需要高端 GPU", "学习曲线陡峭"]
      },
      {
        "slug": "ideogram",
        "name": "Ideogram",
        "reason": "文字渲染能力与 DALL-E 并列最强，有免费版可体验",
        "prosVsOriginal": ["有免费版", "文字渲染同样出色", "Logo 设计能力强"],
        "consVsOriginal": ["整体风格多样性不如 DALL-E", "生态较小"]
      },
      {
        "slug": "leonardo-ai",
        "name": "Leonardo.ai",
        "reason": "免费额度慷慨，支持模型训练，游戏和 3D 资产生成能力突出",
        "prosVsOriginal": ["每天 150 tokens 免费", "支持自定义模型训练", "游戏资产生成强"],
        "consVsOriginal": ["通用美学不如 DALL-E", "界面较复杂"]
      }
    ]
  },
  {
    "slug": "notion-ai-alternatives",
    "tool": "notion-ai",
    "title": "5 个 Notion AI 替代品推荐（2026 年）",
    "description": "Notion AI 与知识库深度集成很方便，但如果你不用 Notion 或需要更强的 AI 能力，这些替代品更合适。",
    "alternatives": [
      {
        "slug": "chatgpt",
        "name": "ChatGPT",
        "reason": "通用 AI 能力远超 Notion AI，支持图像、代码、分析等多种任务",
        "prosVsOriginal": ["AI 能力更全面", "多模态支持", "插件生态丰富"],
        "consVsOriginal": ["无知识库集成", "需要手动粘贴内容", "无文档管理"]
      },
      {
        "slug": "claude",
        "name": "Claude",
        "reason": "200K 超长上下文适合处理大量文档，写作质量和格式控制更精确",
        "prosVsOriginal": ["超长上下文处理文档", "写作质量更高", "格式控制精确"],
        "consVsOriginal": ["无知识库集成", "免费版用量极少"]
      },
      {
        "name": "Taskade",
        "website": "https://taskade.com",
        "reason": "AI 原生的项目管理工具，自动生成任务和工作流，团队协作功能完善",
        "prosVsOriginal": ["AI 原生设计", "自动生成任务列表", "实时协作"],
        "consVsOriginal": ["知识库功能不如 Notion", "文档编辑能力有限"]
      },
      {
        "name": "Coda AI",
        "website": "https://coda.io",
        "reason": "文档+表格+自动化一体化，AI 可操作数据库和触发工作流",
        "prosVsOriginal": ["数据库操作能力强", "自动化工作流", "公式系统强大"],
        "consVsOriginal": ["学习曲线较高", "社区不如 Notion 活跃"]
      },
      {
        "name": "Craft AI",
        "website": "https://craft.do",
        "reason": "Apple 生态最佳文档工具，设计精美，AI 辅助写作体验流畅",
        "prosVsOriginal": ["设计极其精美", "Apple 生态集成", "离线可用"],
        "consVsOriginal": ["仅 Apple 平台最佳", "AI 功能不如 Notion AI 深度"]
      }
    ]
  },
  {
    "slug": "grammarly-alternatives",
    "tool": "grammarly",
    "title": "5 个 Grammarly 替代品推荐（2026 年）",
    "description": "Grammarly 是英文写作纠错的标杆，但如果你需要中文支持或更强的 AI 创作能力，这些替代品值得考虑。",
    "alternatives": [
      {
        "slug": "chatgpt",
        "name": "ChatGPT",
        "reason": "不仅能纠错还能创作，中英文都支持，通用性远超 Grammarly",
        "prosVsOriginal": ["中英文都支持", "可从零创作内容", "多功能通用"],
        "consVsOriginal": ["无浏览器实时检查", "需要复制粘贴", "纠错不如 Grammarly 专业"]
      },
      {
        "slug": "claude",
        "name": "Claude",
        "reason": "长文本润色和改写质量极高，格式控制精确，适合专业写作",
        "prosVsOriginal": ["长文本处理能力强", "改写质量更高", "格式控制精确"],
        "consVsOriginal": ["无实时纠错插件", "需要手动操作"]
      },
      {
        "name": "ProWritingAid",
        "website": "https://prowritingaid.com",
        "reason": "比 Grammarly 更深度的写作分析，提供风格、节奏、可读性等维度的建议",
        "prosVsOriginal": ["写作分析更深度", "一次性买断选项", "学术写作支持好"],
        "consVsOriginal": ["界面不如 Grammarly 简洁", "实时检查速度稍慢"]
      },
      {
        "name": "LanguageTool",
        "website": "https://languagetool.org",
        "reason": "开源免费，支持 30+ 语言（包括中文），隐私保护好",
        "prosVsOriginal": ["开源免费版可用", "支持 30+ 语言", "可本地部署保护隐私"],
        "consVsOriginal": ["英文纠错不如 Grammarly 精准", "AI 功能较基础"]
      },
      {
        "name": "Hemingway Editor",
        "website": "https://hemingwayapp.com",
        "reason": "专注可读性优化，帮助你写出简洁有力的文字，适合追求清晰表达的写作者",
        "prosVsOriginal": ["可读性分析直观", "帮助简化复杂句子", "一次性买断"],
        "consVsOriginal": ["功能单一", "无语法纠错", "无 AI 生成能力"]
      }
    ]
  },
  {
    "slug": "elevenlabs-alternatives",
    "tool": "elevenlabs",
    "title": "5 个 ElevenLabs 替代品推荐（2026 年）",
    "description": "ElevenLabs 语音自然度业界最高，但如果你需要视频配音一体化或更低价格，这些替代品值得考虑。",
    "alternatives": [
      {
        "slug": "murf-ai",
        "name": "Murf AI",
        "reason": "内置视频编辑器，可直接将配音同步到视频，适合需要视频配音的企业",
        "prosVsOriginal": ["内置视频编辑", "团队协作功能", "企业审批流程"],
        "consVsOriginal": ["语音自然度略逊", "价格更高", "声音克隆门槛高"]
      },
      {
        "slug": "play-ht",
        "name": "Play.ht",
        "reason": "API 友好度高，超逼真语音，适合需要集成语音功能的开发者",
        "prosVsOriginal": ["API 设计优秀", "超逼真语音", "流式输出支持好"],
        "consVsOriginal": ["免费额度较少", "企业功能不如 ElevenLabs"]
      },
      {
        "name": "LOVO AI",
        "website": "https://lovo.ai",
        "reason": "500+ 声音选择，支持 100+ 语言，价格比 ElevenLabs 更亲民",
        "prosVsOriginal": ["声音选择更多", "语言覆盖更广", "价格更低"],
        "consVsOriginal": ["自然度不如 ElevenLabs", "声音克隆质量一般"]
      },
      {
        "slug": "descript",
        "name": "Descript",
        "reason": "音视频编辑一体化，像编辑文档一样编辑音频，适合播客和视频创作者",
        "prosVsOriginal": ["音视频编辑一体化", "文本式编辑体验", "自动去除填充词"],
        "consVsOriginal": ["TTS 质量不如 ElevenLabs", "主要是编辑工具非生成工具"]
      },
      {
        "name": "Resemble AI",
        "website": "https://resemble.ai",
        "reason": "声音克隆技术出色，支持实时语音转换，适合需要定制声音的企业",
        "prosVsOriginal": ["实时语音转换", "声音克隆质量高", "API 灵活"],
        "consVsOriginal": ["价格较高", "预设声音较少"]
      }
    ]
  },
  {
    "slug": "runway-alternatives",
    "tool": "runway",
    "title": "5 个 Runway 替代品推荐（2026 年）",
    "description": "Runway Gen-3 是 AI 视频生成的先驱，但价格不低且视频时长有限。这些替代品提供不同的优势。",
    "alternatives": [
      {
        "slug": "kling",
        "name": "可灵 Kling",
        "reason": "支持最长 3 分钟视频，免费版慷慨，中文提示词理解准确",
        "prosVsOriginal": ["视频时长更长", "免费版更慷慨", "中文支持好"],
        "consVsOriginal": ["国际版功能可能受限", "画质稳定性不如 Runway"]
      },
      {
        "slug": "pika",
        "name": "Pika",
        "reason": "界面极简上手快，Lip Sync 和风格转换等特效功能丰富",
        "prosVsOriginal": ["界面更简洁", "特效功能丰富", "免费版可体验"],
        "consVsOriginal": ["视频时长很短", "画质不如 Runway"]
      },
      {
        "name": "Luma Dream Machine",
        "website": "https://lumalabs.ai/dream-machine",
        "reason": "3D 理解能力强，运动自然度高，有免费版可体验",
        "prosVsOriginal": ["3D 空间理解好", "运动更自然", "有免费版"],
        "consVsOriginal": ["功能不如 Runway 全面", "编辑能力有限"]
      },
      {
        "slug": "heygen",
        "name": "HeyGen",
        "reason": "数字人视频制作首选，口型同步和多语言翻译功能强大",
        "prosVsOriginal": ["数字人制作专业", "口型同步精准", "多语言翻译"],
        "consVsOriginal": ["非通用视频生成", "价格较高"]
      },
      {
        "name": "Minimax (Hailuo AI)",
        "website": "https://hailuoai.video",
        "reason": "免费使用，视频质量接近 Runway，中文支持好",
        "prosVsOriginal": ["完全免费", "质量接近 Runway", "中文支持"],
        "consVsOriginal": ["服务器偶尔拥挤", "功能不如 Runway 丰富"]
      }
    ]
  },
  {
    "slug": "gemini-alternatives",
    "tool": "gemini",
    "title": "5 个 Gemini 替代品推荐（2026 年）",
    "description": "Gemini 与 Google 生态深度集成，但如果你不在 Google 生态或需要更强的特定能力，这些替代品更合适。",
    "alternatives": [
      {
        "slug": "chatgpt",
        "name": "ChatGPT",
        "reason": "生态最完整，多模态最强，插件和 GPTs 商店提供无限扩展可能",
        "prosVsOriginal": ["生态更完整", "GPTs 商店", "多模态更强"],
        "consVsOriginal": ["免费版限制多", "无 Google 生态集成"]
      },
      {
        "slug": "claude",
        "name": "Claude",
        "reason": "长文本处理和指令遵循能力更强，代码和写作质量更高",
        "prosVsOriginal": ["长文本处理更强", "指令遵循更精确", "写作质量更高"],
        "consVsOriginal": ["无搜索能力", "无 Google 集成", "免费版极少"]
      },
      {
        "slug": "perplexity",
        "name": "Perplexity",
        "reason": "搜索体验更纯粹，每句话标注来源，信息准确度更高",
        "prosVsOriginal": ["来源标注更清晰", "搜索准确度更高", "无广告干扰"],
        "consVsOriginal": ["创作能力有限", "无生态集成"]
      },
      {
        "slug": "deepseek",
        "name": "DeepSeek",
        "reason": "完全免费且推理能力强大，适合预算有限但需要高质量 AI 的用户",
        "prosVsOriginal": ["完全免费", "推理能力强", "中文能力出色"],
        "consVsOriginal": ["无多模态", "服务不稳定", "无生态集成"]
      },
      {
        "slug": "kimi",
        "name": "Kimi",
        "reason": "200 万字超长上下文，中文理解出色，适合需要处理大量中文文档的用户",
        "prosVsOriginal": ["超长上下文", "中文能力极强", "免费版慷慨"],
        "consVsOriginal": ["英文能力不如 Gemini", "无 Google 生态", "多模态有限"]
      }
    ]
  },
  {
    "slug": "perplexity-alternatives",
    "tool": "perplexity",
    "title": "5 个 Perplexity 替代品推荐（2026 年）",
    "description": "Perplexity 是 AI 搜索的标杆，但如果你需要更多功能或不同的搜索体验，这些替代品值得尝试。",
    "alternatives": [
      {
        "slug": "gemini",
        "name": "Gemini",
        "reason": "Google 搜索加持，信息覆盖面更广，与 Google 生态深度集成",
        "prosVsOriginal": ["Google 搜索加持", "生态集成", "免费版更强"],
        "consVsOriginal": ["来源标注不如 Perplexity 清晰", "偶有幻觉"]
      },
      {
        "slug": "chatgpt",
        "name": "ChatGPT",
        "reason": "搜索+创作+多模态全能，一个工具解决所有问题",
        "prosVsOriginal": ["功能更全面", "多模态支持", "创作能力强"],
        "consVsOriginal": ["搜索来源不够透明", "信息准确度不如 Perplexity"]
      },
      {
        "name": "You.com",
        "website": "https://you.com",
        "reason": "支持多模型切换，代码搜索能力强，开发者友好",
        "prosVsOriginal": ["多模型可切换", "代码搜索强", "有免费版"],
        "consVsOriginal": ["整体搜索质量不如 Perplexity", "知名度较低"]
      },
      {
        "name": "Phind",
        "website": "https://phind.com",
        "reason": "开发者专用 AI 搜索，代码问题搜索准确度极高",
        "prosVsOriginal": ["代码搜索极强", "开发者体验好", "免费使用"],
        "consVsOriginal": ["仅适合技术搜索", "通用搜索不如 Perplexity"]
      },
      {
        "name": "Exa",
        "website": "https://exa.ai",
        "reason": "语义搜索引擎，API 友好，适合需要集成搜索能力的开发者",
        "prosVsOriginal": ["语义搜索精准", "API 设计优秀", "可集成到产品中"],
        "consVsOriginal": ["无消费者界面", "需要技术能力使用"]
      }
    ]
  }
];

alternatives.push(...newAlternatives);
writeFileSync(altPath, JSON.stringify(alternatives, null, 2), 'utf-8');
console.log('Added ' + newAlternatives.length + ' alternatives. Total: ' + alternatives.length);
