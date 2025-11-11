/* External Deps */
import { slug } from "github-slugger";
import React from "react";

/* Import all MDX files using Vite's glob import */
const serviceModules = import.meta.glob<MDXModule>('../content/services/*.mdx', { eager: true });
const projectModules = import.meta.glob<MDXModule>('../content/cv/projects/*.mdx', { eager: true });
const referenceModules = import.meta.glob<MDXModule>('../content/cv/references/*.mdx', { eager: true });
const employmentModules = import.meta.glob<MDXModule>('../content/cv/employment/*.mdx', { eager: true });
const educationModules = import.meta.glob<MDXModule>('../content/cv/education/*.mdx', { eager: true });
const blogModules = import.meta.glob<MDXModule>('../content/blog/*.mdx', { eager: true });

type MDXModule = {
  default: React.ComponentType;
  frontmatter?: Record<string, any>;
};

const extractMetadata = <T extends Record<string, any>>(
  modules: Record<string, MDXModule>,
  validator?: (data: any) => data is T,
) => {
  return Object.entries(modules).map(([path, module]) => {
    const filename = path.split('/').pop() || '';
    const slugValue = slug(filename.replace(/\.mdx$/, ''));
    const frontmatter = module.frontmatter || {};
    
    // Only log if we have a validator and frontmatter exists but is invalid
    if (validator && Object.keys(frontmatter).length > 0 && !validator(frontmatter)) {
      console.warn(`Invalid frontmatter in ${filename}:`, frontmatter);
    }
    
    return {
      slug: slugValue,
      data: frontmatter as T,
      content: module.default,
    };
  });
};

/**
 * Gets all Posts
 */
const getAllPosts = () =>
  extractMetadata<WithTitle & WithThumbnail & WithDateString>(
    blogModules,
    (data): data is WithTitle & WithThumbnail & WithDateString =>
      hasTitle(data) && hasThumbnail(data) && hasDateString(data),
  );

export const useAllServices = () =>
  extractMetadata<WithTitle>(serviceModules, hasTitle);

export const getAllProjects = () =>
  extractMetadata<WithTitle & WithLink>(
    projectModules,
    (data): data is WithTitle & WithLink => hasTitle(data) && hasLink(data),
  );

export const useAllReferences = () =>
  extractMetadata<WithTitle & WithWebsite & WithPhone & WithEmail>(
    referenceModules,
    (data): data is WithTitle & WithWebsite & WithPhone & WithEmail =>
      hasTitle(data) && hasWebsite(data) && hasPhone(data) && hasEmail(data),
  );

export const useAllEmployment = () =>
  extractMetadata<
    WithTitle & WithSubtitle & WithDateString & WithRole & WithWebsite
  >(
    employmentModules,
    (
      data,
    ): data is WithTitle &
      WithSubtitle &
      WithDateString &
      WithRole &
      WithWebsite =>
      hasTitle(data) &&
      hasSubtitle(data) &&
      hasDateString(data) &&
      hasRole(data) &&
      hasWebsite(data),
  );

export const useAllEducation = () =>
  extractMetadata<WithTitle & WithDateString>(
    educationModules,
    (data): data is WithTitle & WithDateString =>
      hasTitle(data) && hasDateString(data),
  );

export const getPost = (slug: string) =>
  getAllPosts().find((post) => post.slug === slug);

export const getAllPostLinks = () =>
  getAllPosts()
    .map((post) => ({
      title: post.data.title,
      thumbnail: post.data.thumbnail,
      slug: post.slug,
      date: post.data.date,
    }))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

type WithTitle = { title: string };
type WithSubtitle = { subtitle: string };
type WithLink = { link: string };
type WithThumbnail = { thumbnail: string };
type WithDateString = { date: string };
type WithPhone = { phone: string };
type WithWebsite = { website: string };
type WithEmail = { email: string };
type WithRole = { role: string };

const hasTitle = (data: any): data is WithTitle =>
  typeof data === "object" &&
  data !== null &&
  "title" in data &&
  typeof data.title === "string";

const hasSubtitle = (data: any): data is WithSubtitle =>
  "subtitle" in data && typeof data.subtitle === "string";

const hasLink = (data: any): data is WithLink =>
  "link" in data && typeof data.link === "string";

const hasThumbnail = (data: any): data is WithThumbnail =>
  "thumbnail" in data && typeof data.thumbnail === "string";

const hasDateString = (data: any): data is WithDateString =>
  "date" in data && typeof data.date === "string";

const hasPhone = (data: any): data is WithPhone =>
  "phone" in data && typeof data.phone === "string";

const hasWebsite = (data: any): data is WithWebsite =>
  "website" in data && typeof data.website === "string";

const hasEmail = (data: any): data is WithEmail =>
  "email" in data && typeof data.email === "string";

export const hasRole = (data: any): data is WithRole =>
  "role" in data && typeof data.role === "string";
