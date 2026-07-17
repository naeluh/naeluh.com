import fs from 'fs';
import path from 'path';

export function getMarkdownPage(slug, title) {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const body = fs.readFileSync(filePath, 'utf8');
  return { Title: title, Body: body, id: slug };
}
