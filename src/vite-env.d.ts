/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";
  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
  export const frontmatter: Record<string, any>;
}

declare module "virtual:blog-frontmatter" {
  const frontmatter: Record<string, Record<string, any>>;
  export default frontmatter;
}
