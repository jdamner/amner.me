/**
 * Helper functions for tests
 */
import path from "path";
import { readdirSync } from "fs";

export function getPages(): string[] {
  const pages = ["index", "404", "cv"];
  const posts = readdirSync(path.resolve("content/blog"));
  posts.forEach((post) => {
    pages.push(`${post.replace(".mdx", "")}`);
  });

  return pages;
}
