import { faker } from "@faker-js/faker";
import { parseMarkdown } from ".";
import matter from "gray-matter";

type MatterData = ReturnType<typeof matter>["data"];

faker.seed(123);

export const generateMdFile = <T extends MatterData>(attributes: T) =>
  parseMarkdown<T>(generateMD(attributes), "test.mdx");

export const generateMdContent = (): string =>
  `# ${faker.lorem.words(3)}\n` +
  Array.from(
    { length: 3 },
    () =>
      `## ${faker.lorem.words(2)}\n` +
      faker.lorem.paragraph() +
      "\n" +
      Array.from({ length: 3 }, () => {
        return `### ${faker.lorem.words(2)}\n` + `${faker.lorem.paragraph()}\n`;
      }).join(""),
  ).join("");

export const generatePostLink = () => ({
  title: faker.lorem.words(3),
  slug: faker.lorem.slug(),
});

export const generatePostLinks = (count: number) =>
  Array.from({ length: count }, () => generatePostLink());

export const generateMD = <T extends MatterData>(attributes: T) =>
  generateMDFrontMatter(attributes) + "\n" + generateMdContent();

export const generateMDFrontMatter = (attributes: MatterData) => {
  return (
    "---\n" +
    Object.keys(attributes)
      .map((key) => `${key}: ${attributes[key]}`)
      .join("\n") +
    "\n---"
  );
};

export const generatePlaceholderContent = (size: number = 5) => (
  <>
    {Array.from({ length: size }).map((_, i) => (
      <p key={i}>{faker.lorem.paragraph(i + 1)}</p>
    ))}
  </>
);
