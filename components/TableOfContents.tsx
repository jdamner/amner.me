"use client";

import GithubSlugger from "github-slugger";
import ReactMarkdown from "react-markdown";
import { useEffect, type PropsWithChildren } from "react";

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} props
 */
function TableOfContents({ children }: PropsWithChildren) {
  const slugger = new GithubSlugger();

  const toc = children
    .toString()
    .match(/^(#{1,6})\s(.+)$/gm)
    ?.map((heading) => ({
      value: heading.replace(/^(#{1,6})\s/, ""),
      depth: heading.match(/^(#{1,6})\s/)?.[1].length ?? Infinity,
      url: `#${slugger.slug(heading.replace(/^(#{1,6})\s/, ""))}`,
    }));

  useEffect(() => {
    const tocLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    const headings = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const tocLink = tocLinks.find(
            (link) => link.getAttribute("href") === `#${id}`,
          );
          if (tocLink) {
            if (entry.isIntersecting) {
              tocLink.classList.add("font-bold");
            } else {
              tocLink.classList.remove("font-bold");
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  });

  if (!toc) return null;

  const minDepth = toc.reduce(
    (min, heading) => Math.min(min, heading.depth),
    6,
  );
  const marginCalc = (depth: number) =>
    `${Math.max(0, depth - (minDepth - 1))}rem`;

  return (
    <div className="py-3">
      <h2 className="text-lg font-black font-sans uppercase my-2">Contents</h2>
      <ul className="text-sm list-disc">
        {toc?.map((heading) =>
          heading.depth < 2 ? (
            <li key={heading.url}>
              <a href={heading.url}>
                <ReactMarkdown className="prose prose-slate dark:prose-invert prose-sm">
                  {heading.value}
                </ReactMarkdown>
              </a>
            </li>
          ) : (
            <li
              key={heading.url}
              style={{ marginLeft: marginCalc(heading.depth) }}
            >
              <a
                href={heading.url}
                onClick={(event) => {
                  event.preventDefault();
                  history.pushState(null, "", heading.url);
                  document
                    .getElementById(heading.url.replace("#", ""))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ReactMarkdown className="prose prose-slate dark:prose-invert prose-sm">
                  {heading.value}
                </ReactMarkdown>
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default TableOfContents;
