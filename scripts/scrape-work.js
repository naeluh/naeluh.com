// One-time scrape of hulea.org work pages (Strapi API is gone).
// Writes content/work/<slug>.md and downloads images to public/images.
const fs = require('fs');
const path = require('path');

const SITE = 'https://hulea.org';

async function main() {
  const html = await (await fetch(`${SITE}/work/gifpaint`)).text();
  const m = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s
  );
  if (!m) throw new Error('No __NEXT_DATA__ found');
  const posts = JSON.parse(m[1]).props.pageProps.posts;

  const contentDir = path.join(__dirname, '..', 'content', 'work');
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  fs.mkdirSync(contentDir, { recursive: true });
  fs.mkdirSync(imagesDir, { recursive: true });

  for (const [i, post] of posts.entries()) {
    const fm = [
      '---',
      `id: ${post.id}`,
      `title: ${JSON.stringify(post.Title)}`,
      `slug: ${post.Slug}`,
      `link: ${post.Link || ''}`,
      `image: ${post.Image ? post.Image.url : ''}`,
      `order: ${i}`,
      `createdAt: ${post.createdAt}`,
      `updatedAt: ${post.updatedAt}`,
      '---',
    ].join('\n');
    const body = (post.Description || '').replace(/\r\n/g, '\n');
    fs.writeFileSync(
      path.join(contentDir, `${post.Slug}.md`),
      `${fm}\n\n${body}\n`
    );
    console.log('wrote', `${post.Slug}.md`);

    if (post.Image) {
      const name = post.Image.url.replace('/uploads/', '');
      const file = name.endsWith('.gif') ? name : `${name}.webp`;
      const res = await fetch(`${SITE}/images/${file}`);
      if (!res.ok) {
        console.error('FAILED image', file, res.status);
        continue;
      }
      fs.writeFileSync(
        path.join(imagesDir, file),
        Buffer.from(await res.arrayBuffer())
      );
      console.log('downloaded', file);
    }
  }
  console.log(`done: ${posts.length} posts`);
}

main();
