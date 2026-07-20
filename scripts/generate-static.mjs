import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.mjs');

async function main() {
  if (!existsSync(ssrEntry)) {
    throw new Error(`SSR bundle not found at ${ssrEntry}. Run the ssr build first.`);
  }
  if (!existsSync(distDir)) {
    throw new Error(`Client build not found at ${distDir}. Run the client build first.`);
  }

  const { render, staticRoutes } = await import(ssrEntry);
  const template = await readFile(path.join(distDir, 'index.html'), 'utf-8');

  for (const route of staticRoutes) {
    const { html, helmet } = render(route);

    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Helmet gives back tag strings already formatted for injection.
    const helmetHead = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ]
      .filter(Boolean)
      .join('\n    ');

    // Replace the static <title> from index.html with the route-specific Helmet output.
    page = page.replace(/<title>.*?<\/title>/s, '').replace(
      '</head>',
      `    ${helmetHead}\n  </head>`
    );

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route.replace(/^\//, ''), 'index.html');

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, page, 'utf-8');
    console.log(`Pre-rendered ${route} -> ${path.relative(root, outPath)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
