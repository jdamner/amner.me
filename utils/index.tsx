/* External Deps */
import { slug } from "github-slugger";
import React from "react";
import blogFrontmatter from "virtual:blog-frontmatter";

/* Services are shown on the home page; post bodies and CV content load lazily elsewhere. */
const serviceModules = import.meta.glob<MDXModule>('../content/services/*.mdx', { eager: true });
export type MDXModule = {
  default: React.ComponentType;
  frontmatter?: Record<string, any>;
};

const parseFrontmatter = <T extends Record<string, any>>(
  path: string,
  frontmatter: Record<string, any> = {},
  validator?: (data: any) => data is T,
) => {
  const filename = path.split('/').pop() || '';

  // Only log if we have a validator and frontmatter exists but is invalid
  if (validator && Object.keys(frontmatter).length > 0 && !validator(frontmatter)) {
    console.warn(`Invalid frontmatter in ${filename}:`, frontmatter);
  }

  return {
    slug: slug(filename.replace(/\.mdx$/, '')),
    data: frontmatter as T,
  };
};

export const extractMetadata = <T extends Record<string, any>>(
  modules: Record<string, MDXModule>,
  validator?: (data: any) => data is T,
) =>
  Object.entries(modules).map(([path, module]) => ({
    ...parseFrontmatter(path, module.frontmatter, validator),
    content: module.default,
  }));

/**
 * Gets all Posts
 */
export const isPost = (
  data: any,
): data is WithTitle & WithThumbnail & WithDateString & WithFeatured =>
  hasTitle(data) &&
  hasDateString(data) &&
  (!("thumbnail" in data) || typeof data.thumbnail === "string") &&
  (!("featured" in data) || typeof data.featured === "boolean");

const getAllPosts = () =>
  Object.entries(blogFrontmatter).map(([path, frontmatter]) =>
    parseFrontmatter(path, frontmatter, isPost),
  );

export const useAllServices = () =>
  extractMetadata<WithTitle>(serviceModules, hasTitle).sort((a, b) => {
    const priority = ["React", "Node.js & TypeScript", "Cloud Native"];
    const aPriority = priority.indexOf(a.data.title);
    const bPriority = priority.indexOf(b.data.title);
    if (aPriority !== -1 || bPriority !== -1) {
      return (aPriority === -1 ? priority.length : aPriority) -
        (bPriority === -1 ? priority.length : bPriority);
    }
    return a.data.title.localeCompare(b.data.title);
  });

export const getPost = (slug: string) =>
  getAllPosts().find((post) => post.slug === slug);

export const getAllPostLinks = (featuredOnly = false) =>
  getAllPosts()
    .filter(({ data }) => !featuredOnly || data.featured === true)
    .map((post) => ({
      title: post.data.title,
      thumbnail: post.data.thumbnail,
      slug: post.slug,
      date: post.data.date,
    }))
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export type WithTitle = { title: string };
export type WithSubtitle = { subtitle: string };
export type WithLink = { link: string };
export type WithThumbnail = { thumbnail?: string };
export type WithDateString = { date: string };
export type WithPhone = { phone: string };
export type WithWebsite = { website: string };
export type WithEmail = { email: string };
export type WithRole = { role: string };
export type WithFeatured = { featured?: boolean };

export const hasTitle = (data: any): data is WithTitle =>
  typeof data === "object" &&
  data !== null &&
  "title" in data &&
  typeof data.title === "string";

export const hasSubtitle = (data: any): data is WithSubtitle =>
  "subtitle" in data && typeof data.subtitle === "string";

export const hasLink = (data: any): data is WithLink =>
  "link" in data && typeof data.link === "string";

export const hasDateString = (data: any): data is WithDateString =>
  "date" in data && typeof data.date === "string";

export const hasPhone = (data: any): data is WithPhone =>
  "phone" in data && typeof data.phone === "string";

export const hasWebsite = (data: any): data is WithWebsite =>
  "website" in data && typeof data.website === "string";

export const hasEmail = (data: any): data is WithEmail =>
  "email" in data && typeof data.email === "string";

export const hasRole = (data: any): data is WithRole =>
  "role" in data && typeof data.role === "string";
