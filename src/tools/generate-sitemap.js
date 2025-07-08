const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.hnenterprises.in';
const routes = [
  '',
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

routes.forEach(route => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}/${route}</loc>\n`;
  sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `    <priority>1</priority>\n`;
  sitemap += `  </url>\n`;
});

sitemap += `</urlset>`;

fs.writeFileSync(path.resolve(__dirname, '../dist/sitemap.xml'), sitemap);
console.log('✅ sitemap.xml generated!');
