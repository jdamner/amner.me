import React from "react";
import { slug as slugify } from "github-slugger";

import { type MDXModule } from ".";

/* Post bodies load on demand, one chunk per post. */
const postLoaders = import.meta.glob<MDXModule>('../content/blog/*.mdx');

const loaderBySlug = new Map(
  Object.entries(postLoaders).map(([path, load]) => [
    slugify((path.split('/').pop() || '').replace(/\.mdx$/, '')),
    load,
  ]),
);

const components = new Map<string, React.LazyExoticComponent<React.ComponentType>>();

export const getPostContent = (slug: string) => {
  const load = loaderBySlug.get(slug);
  if (!load) return undefined;

  let component = components.get(slug);
  if (!component) {
    component = React.lazy(load);
    components.set(slug, component);
  }
  return component;
};
