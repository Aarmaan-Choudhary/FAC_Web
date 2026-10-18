const fs = require('fs');
const { bundleMDX } = require('mdx-bundler');

function addPage(page) {
  const path = page
    .replace('src/pages', '')
    .replace('.page.js', '')
    .replace('.page.mdx', '')
    .replace('/index', '/');
  const route = path === '/index' ? '' : path;

  // Exclude 404 page and generated `[]` pages
  if (route.includes('[') || route.includes('404')) return;

  return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_WEBSITE_URL}${route}`}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
}

async function addPost(post) {
  const source = fs.readFileSync(post, 'utf-8');
  const { frontmatter } = await bundleMDX({ source });

  if (process.env.NODE_ENV === 'production' && frontmatter.draft) return;

  const path = post.replace('src/posts', '/articles').replace('.mdx', '');

  return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_WEBSITE_URL}${path}`}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
}

async function generateSitemap() {
  const { globby } = await import('globby');
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*{.page.js,.page.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api',
  ]);
  const postUrls = await globby(['src/posts/**/*.mdx']);
  const posts = await Promise.all(postUrls.map(addPost));
  // Research papers: one page per `slug:` in src/pages/research/papers.js
  const papersSource = fs.existsSync('src/pages/research/papers.js')
    ? fs.readFileSync('src/pages/research/papers.js', 'utf-8')
    : '';
  const papers = [...papersSource.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map(
    ([, slug]) => `  <url>
    <loc>${process.env.NEXT_PUBLIC_WEBSITE_URL}/research/${slug}/</loc>
    <changefreq>monthly</changefreq>
  </url>`
  );

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).filter(Boolean).join('\n')}
${posts.filter(Boolean).join('\n')}
${papers.join('\n')}
</urlset>\n`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
