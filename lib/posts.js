import fs from 'fs';
import path from 'path';

const workDir = path.join(process.cwd(), 'content', 'work');

function parse(file) {
  const raw = fs.readFileSync(path.join(workDir, file), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    let value = line.slice(i + 1).trim();
    if (value.startsWith('"')) value = JSON.parse(value);
    meta[line.slice(0, i)] = value;
  }
  return {
    id: meta.id,
    Title: meta.title,
    Description: m[2].trim(),
    Slug: meta.slug,
    Link: meta.link,
    createdAt: meta.createdAt,
    updatedAt: meta.updatedAt,
    Image: meta.image ? { url: meta.image } : null,
    order: Number(meta.order),
  };
}

export function getPosts() {
  return fs
    .readdirSync(workDir)
    .filter((f) => f.endsWith('.md'))
    .map(parse)
    .sort((a, b) => a.order - b.order);
}

export function getPost(slug) {
  return getPosts().filter((p) => p.Slug === slug);
}
