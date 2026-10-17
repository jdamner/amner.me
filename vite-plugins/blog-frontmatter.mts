import { readdirSync, readFileSync } from 'node:fs';
import { join, sep } from 'node:path';
import matter from 'gray-matter';
import type { Plugin } from 'vite';

const ID = 'virtual:blog-frontmatter';
const RESOLVED_ID = `\0${ID}`;

/**
 * Exposes blog post frontmatter as plain data, so lists can render without
 * bundling every post body into the main chunk.
 */
export function blogFrontmatter(root: string): Plugin {
  const dir = join(root, 'content/blog');
  let isBuild = false;

  return {
    name: 'blog-frontmatter',
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    resolveId: (id) => (id === ID ? RESOLVED_ID : undefined),
    configureServer(server) {
      // Posts added or removed after startup aren't in the dependency graph yet.
      const refresh = (file: string) => {
        if (!file.startsWith(dir + sep) || !file.endsWith('.mdx')) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.add(dir);
      server.watcher.on('add', refresh);
      server.watcher.on('unlink', refresh);
    },
    load(id) {
      if (id !== RESOLVED_ID) return;

      // In build --watch, watching the directory regenerates the index when posts are added or removed.
      // The dev server handles this in configureServer instead.
      if (isBuild) this.addWatchFile(dir);

      const posts = readdirSync(dir)
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
          this.addWatchFile(join(dir, file));
          const { data } = matter(readFileSync(join(dir, file), 'utf8'));
          return [file, data];
        });

      return `export default ${JSON.stringify(Object.fromEntries(posts))};`;
    },
  };
}
