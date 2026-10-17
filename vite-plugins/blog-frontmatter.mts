import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
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

  return {
    name: 'blog-frontmatter',
    resolveId: (id) => (id === ID ? RESOLVED_ID : undefined),
    load(id) {
      if (id !== RESOLVED_ID) return;

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
