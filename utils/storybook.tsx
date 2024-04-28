import { faker } from "@faker-js/faker";
import { MdFile, PostLinkType } from "../types";
import matter from "gray-matter";
import React from "react";

type MdAttributes = Record<string, string>;

faker.seed(123);

export const generateMdFile = <T extends MdAttributes>(
  attributes: T,
  content?: string,
): Omit<MdFile<string>, "data"> & { data: T } => {
  return matter(generateMD(attributes, content)) as Omit<
    MdFile<string>,
    "data"
  > & { data: T };
};

export const generateMdContent = (): string => {
  return (
    `# ${faker.lorem.words(3)}\n` +
    Array.from({ length: 3 }, () => {
      return (
        `## ${faker.lorem.words(2)}\n` +
        faker.lorem.paragraph() +
        "\n" +
        Array.from({ length: 3 }, () => {
          return (
            `### ${faker.lorem.words(2)}\n` + `${faker.lorem.paragraph()}\n`
          );
        }).join("")
      );
    }).join("")
  );
};

export const generatePostLink = (): PostLinkType => {
  return {
    title: faker.lorem.words(3),
    thumbnail: faker.image.url(),
    slug: faker.lorem.slug(),
  };
};

export const generatePostLinks = (count: number): PostLinkType[] => {
  return Array.from({ length: count }, () => generatePostLink());
};

export const generateMD = (
  attributes: MdAttributes,
  content?: string,
): string => {
  const frontMatter = generateMDFrontMatter(attributes);
  return `${frontMatter}\n${content ?? generateMdContent()}`;
};

export const generateMDFrontMatter = (attributes: MdAttributes): string => {
  return (
    "---\n" +
    Object.keys(attributes)
      .map((key) => `${key}: ${attributes[key]}`)
      .join("\n") +
    "\n---"
  );
};

export const generatePlaceholderContent = (
  size: number = 5,
): React.ReactNode => {
  return (
    <>
      {Array.from({ length: size }).map((_, i) => (
        <p key={i}>{faker.lorem.paragraph(i + 1)}</p>
      ))}
    </>
  );
};
