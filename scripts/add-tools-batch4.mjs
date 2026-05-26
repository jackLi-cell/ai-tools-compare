import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsPath = join(__dirname, '..', 'data', 'tools.json');
const tools = JSON.parse(readFileSync(toolsPath, 'utf-8'));

const newTools = [
  {
    "slug": "looka",
    "name": "Looka",
    "company": "Looka Inc",
    "category": "ai-design",
    "tagline": "AI Logo 和品牌设计平台，几分钟生成完整品牌视觉方案",
    "website": "https://looka.com",
    "pricing": [
      {"plan": "免费设计", "price": 0, "period": "次", "features": ["无限 Logo 设计", "预览效果", "不可下载"]},
      {"plan": "Basic Logo", "price": 20, "period": "一次性", "features": ["1 个 Logo 文件", "PNG 格式"]},
      {"plan": "Premium Logo", "price": 65, "period": "一次性", "features": ["多格式文件", "矢量 SVG", "社媒套件"]},
      {"plan": "Brand Kit", "price": 96, "period": "年", "features": ["完整品牌套件", "名片", "社媒模板", "品牌指南"]}
    ],
    "pros": ["AI 生成 Logo 速度快，几分钟出数十个方案", "一次性付费模式，无需持续订阅", "Brand Kit 包含完整品牌物料（名片、信纸等）", "设计质量对于初创企业足够专业"],
    "cons": ["Logo 设计深度不如专业设计师", "风格选择有限，可能与其他用户撞款", "修改灵活度不如 Illustrator", "不适合需要高度定制的大品牌"],
    "bestFor": ["初创企业需要快速获得品牌视觉", "自由职业者需要个人品牌 Logo", "预算有限无法请专业设计师的小企业", "需要快速测试品牌方向的创业者"],
    "notFor": ["大型企业需要独特品牌标识", "专业设计师寻找设计工具"],
    "keyFeatures": {"AI Logo 生成": "输入品牌名和偏好，AI 生成数十个 Logo 方案", "品牌套件": "Logo 确定后自动生成名片、信纸、社媒头像等", "一次性付费": "买断制，无需持续订阅", "矢量输出": "Premium 版提供 SVG 矢量文件，可无限缩放"},
    "freeLimit": "免费设计和预览 Logo，下载需付费",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "remove-bg",
    "name": "Remove.bg",
    "company": "Kaleido AI (Canva)",
    "category": "ai-design",
    "tagline": "AI 一键抠图工具，5 秒移除图片背景，准确率业界最高",
    "website": "https://remove.bg",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["无限预览", "低分辨率下载", "每月 1 张高清"]},
      {"plan": "Credits", "price": 9, "period": "40 credits", "features": ["高清下载", "API 调用", "批量处理"]},
      {"plan": "Subscription", "price": 29, "period": "月", "features": ["200 credits/月", "优先处理", "团队共享"]}
    ],
    "pros": ["抠图准确度极高，头发丝级别的精细处理", "5 秒完成，速度极快", "支持 API 批量处理", "免费版可预览效果"],
    "cons": ["免费版只能下载低分辨率", "高清图片需要付费 credits", "只能做背景移除，功能单一", "复杂场景偶尔需要手动修正"],
    "bestFor": ["电商卖家需要批量处理产品图背景", "设计师需要快速抠图素材", "证件照和头像背景替换", "社交媒体配图制作"],
    "notFor": ["需要复杂图像编辑的专业场景", "预算极低且需要大量高清抠图的用户"],
    "keyFeatures": {"一键抠图": "上传图片 5 秒自动移除背景，无需手动操作", "精细边缘": "头发丝、透明物体等复杂边缘处理精准", "API 集成": "提供 API 接口，可集成到自己的产品中", "批量处理": "支持批量上传和处理，适合电商场景"},
    "freeLimit": "无限预览 + 每月 1 张高清免费下载",
    "lastUpdated": "2026-05-22"
  },
  {
    "slug": "photoroom",
    "name": "Photoroom",
    "company": "Photoroom",
    "category": "ai-design",
    "tagline": "AI 产品图编辑工具，电商卖家的必备利器，一键生成专业商品图",
    "website": "https://photoroom.com",
    "pricing": [
      {"plan": "Free", "price": 0, "period": "月", "features": ["基础编辑", "有水印", "标准背景"]},
      {"plan": "Pro", "price": 12.99, "period": "月", "features": ["无水印", "AI 背景", "批量编辑", "高清导出"]},
      {"plan": "Business", "price": 0, "period": "定制", "features": ["API 访问", "团队管理", "自定义集成"]}
    ],
    "pros": ["AI 自动生成专业产品展示背景", "批量处理功能适合电商大量商品图", "移动端 App 体验出色，随时随地编辑", "模板丰富，覆盖各电商平台尺寸要求"],
    "cons": ["免费版有水印", "主要针对产品图，通用编辑能力有限", "AI 生成的背景偶尔不够真实", "高级功能需要 Pro 版"],
    "bestFor": ["电商卖家需要批量制作产品主图", "社交媒体电商需要快速制作商品展示图", "二手交易平台卖家美化商品照片", "品牌需要统一产品图风格"],
    "notFor": ["需要复杂图像编辑的专业设计师", "非电商场景的通用图片编辑"],
    "keyFeatures": {"AI 背景生成": "一键移除背景并生成专业产品展示场景", "批量编辑": "上传多张图片批量处理，效率极高", "电商模板": "预设各平台（淘宝、亚马逊等）尺寸模板", "移动端优先": "手机 App 功能完整，随时随地编辑"},
    "freeLimit": "免费版可用基础功能，有水印",
    "lastUpdated": "2026-05-22"
  }
];

tools.push(...newTools);
writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf-8');
console.log('Batch 4: Added ' + newTools.length + ' tools. Total: ' + tools.length);
