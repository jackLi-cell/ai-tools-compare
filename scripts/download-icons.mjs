/**
 * Download all tool icons locally and update tools.json to use local paths
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = join(ROOT, 'data');
const ICONS_DIR = join(ROOT, 'site', 'assets', 'icons');

mkdirSync(ICONS_DIR, { recursive: true });

const toolsPath = join(DATA, 'tools.json');
const tools = JSON.parse(readFileSync(toolsPath, 'utf-8'));

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const request = client.get(url, { timeout: 15000 }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        writeFileSync(dest, buffer);
        resolve(buffer.length);
      });
      res.on('error', reject);
    });
    request.on('error', reject);
    request.on('timeout', () => { request.destroy(); reject(new Error(`Timeout: ${url}`)); });
  });
}

// Determine file extension from URL or content-type
function getExtension(url) {
  if (url.includes('.svg')) return '.svg';
  if (url.includes('.ico')) return '.ico';
  if (url.includes('.png')) return '.png';
  if (url.includes('.jpg') || url.includes('.jpeg')) return '.jpg';
  if (url.includes('.webp')) return '.webp';
  // Google favicon API returns PNG
  if (url.includes('google.com/s2/favicons')) return '.png';
  return '.png';
}

async function main() {
  let success = 0;
  let failed = 0;

  for (const tool of tools) {
    if (!tool.icon) continue;

    const ext = getExtension(tool.icon);
    const filename = `${tool.slug}${ext}`;
    const destPath = join(ICONS_DIR, filename);
    const localPath = `/assets/icons/${filename}`;

    try {
      const size = await download(tool.icon, destPath);
      tool.icon = localPath;
      success++;
      console.log(`✓ ${tool.slug} (${size} bytes)`);
    } catch (err) {
      console.error(`✗ ${tool.slug}: ${err.message}`);
      failed++;
      // Keep the remote URL as fallback
    }

    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }

  writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf-8');
  console.log(`\nDone! Success: ${success}, Failed: ${failed}`);
}

main();
