/**
 * Add official icon URLs to all tools using Google Favicon API
 * Format: https://www.google.com/s2/favicons?domain=DOMAIN&sz=128
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');
const toolsPath = join(DATA, 'tools.json');
const tools = JSON.parse(readFileSync(toolsPath, 'utf-8'));

// Map of slug -> custom icon URL (for tools where Google favicon doesn't work well)
// Most tools will use their website domain via Google Favicon API
const customIcons = {
  // Some tools have better icons at specific URLs
  "chatgpt": "https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico",
  "claude": "https://claude.ai/favicon.ico",
  "stable-diffusion": "https://stability.ai/favicon.ico",
  "aider": "https://aider.chat/assets/icons/favicon-32x32.png",
};

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

let updated = 0;
for (const tool of tools) {
  if (tool.icon) continue; // Skip if already has icon

  if (customIcons[tool.slug]) {
    tool.icon = customIcons[tool.slug];
  } else {
    const domain = getDomain(tool.website);
    if (domain) {
      tool.icon = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    }
  }
  updated++;
}

writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf-8');
console.log(`Updated ${updated} tools with icon URLs. Total tools: ${tools.length}`);
