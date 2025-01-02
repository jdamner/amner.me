/* External Deps */
import { readFileSync, readdirSync } from "fs";
import { resolve } from "path";
import matter from "gray-matter";
import { slug } from "github-slugger";

/* Components */
import { Markdown } from "@/components/Markdown";

/* Constants */
const postsDirectory: string = resolve("content/blog/");
const servicesDirectory: string = resolve("content/services");
const cvDirectory: string = resolve("content/cv");
const projectsDirectory: string = resolve(cvDirectory, "projects");
const referencesDirectory: string = resolve(cvDirectory, "references");
const employmentDirectory: string = resolve(cvDirectory, "employment");
const educationDirectory: string = resolve(cvDirectory, "education");

type MatterData = ReturnType<typeof matter>["data"];
type AttributeValidator<T extends MatterData> = (data: MatterData) => data is T;

const defaultAttributeValidator = <T extends MatterData>(
  data: MatterData,
): data is T => {
  return typeof data === "object" && data !== null;
};

/**
 * Gets all files in a directory
 */
const getAllFrom = <T extends MatterData>(
  directory: string,
  attributeValidator: AttributeValidator<T> = defaultAttributeValidator,
) =>
  readdirSync(directory).map((filename) =>
    readMdFile<T>(filename, directory, attributeValidator),
  );

/**
 * Reads a markdown file
 */
const readMdFile = <T extends MatterData>(
  filename: string,
  directory: string = "content/",
  attributeValidator: AttributeValidator<T> = defaultAttributeValidator,
) =>
  parseMarkdown<T>(
    readFileSync(`${directory}/${filename}`, "utf8"),
    filename,
    attributeValidator,
  );

/**
 * Parses markdown file contents
 */
export const parseMarkdown = <T extends MatterData>(
  fileContents: string,
  filename: string,
  attributeValidator: AttributeValidator<T> = defaultAttributeValidator,
) => {
  const { content, data } = matter(fileContents);

  if (!attributeValidator(data)) {
    console.log(data);
    throw new Error(`Invalid attributes in ${filename}` + JSON.stringify(data));
  }

  return {
    data,
    slug: slug(filename.replace(/\.mdx$/, "")),
    content: <Markdown>{content}</Markdown>,
  };
};

/**
 * Gets all Posts
 */
const getAllPosts = () =>
  getAllFrom<WithTitle & WithThumbnail & WithDate>(
    postsDirectory,
    (data): data is WithTitle & WithThumbnail & WithDate =>
      hasTitle(data) && hasThumbnail(data) && hasDate(data),
  );

export const useAllServices = () =>
  getAllFrom<WithTitle>(servicesDirectory, hasTitle);

export const getAllProjects = () =>
  getAllFrom<WithTitle & WithLink>(
    projectsDirectory,
    (data): data is WithTitle & WithLink => hasTitle(data) && hasLink(data),
  );

export const useAllReferences = () =>
  getAllFrom<WithTitle & WithWebsite & WithPhone & WithEmail>(
    referencesDirectory,
    (data): data is WithTitle & WithWebsite & WithPhone & WithEmail =>
      hasTitle(data) && hasWebsite(data) && hasPhone(data) && hasEmail(data),
  );

export const useAllEmployment = () =>
  getAllFrom<
    WithTitle & WithSubtitle & WithDateString & WithRole & WithWebsite
  >(
    employmentDirectory,
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
  getAllFrom<WithTitle & WithDateString>(
    educationDirectory,
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
type WithDate = { date: Date };
type WithDateString = { date: string };
type WithPhone = { phone: string };
type WithWebsite = { website: string };
type WithEmail = { email: string };
type WithRole = { role: string };

const hasTitle = (data: MatterData): data is WithTitle =>
  defaultAttributeValidator(data) &&
  "title" in data &&
  typeof data.title === "string";

const hasSubtitle = (data: MatterData): data is WithSubtitle =>
  "subtitle" in data && typeof data.subtitle === "string";

const hasLink = (data: MatterData): data is WithLink =>
  "link" in data && typeof data.link === "string";

const hasThumbnail = (data: MatterData): data is WithThumbnail =>
  "thumbnail" in data && typeof data.thumbnail === "string";

const hasDate = (data: MatterData): data is WithDate =>
  "date" in data && data.date instanceof Date;

const hasDateString = (data: MatterData): data is WithDateString =>
  "date" in data && typeof data.date === "string";

const hasPhone = (data: MatterData): data is WithPhone =>
  "phone" in data && typeof data.phone === "string";

const hasWebsite = (data: MatterData): data is WithWebsite =>
  "website" in data && typeof data.website === "string";

const hasEmail = (data: MatterData): data is WithEmail =>
  "email" in data && typeof data.email === "string";

export const hasRole = (data: MatterData): data is WithRole =>
  "role" in data && typeof data.role === "string";
