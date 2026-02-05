import type { MDXComponents } from "mdx/types";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { slug } from "github-slugger";

/* Types */
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

/**
 * Converts a react node to a slug
 *
 * Usually the value is a string, but sometimes it contains
 * a `<code>` element, which is a react node. This function
 * converts the value to a string.
 */
const makeSlug = (value: ReactNode | ReactNode[]): string => {
  if (!Array.isArray(value)) return slug(value?.toString() ?? "");
  return slug(
    value
      .map((node) => {
        if (
          typeof node === "string" ||
          typeof node === "number" ||
          typeof node === "boolean"
        )
          return node;

        if (isNodeWithChildren(node)) {
          return makeSlug(node.props.children);
        }

        return "";
      })
      .join(""),
  );
};

const isNodeWithChildren = (
  value: unknown,
): value is { props: { children: string | number | boolean | Array<any> } } => {
  return (
    typeof value === "object" &&
    value !== null &&
    "props" in value &&
    value.props !== null &&
    typeof value.props === "object" &&
    "children" in value.props &&
    value.props.children !== null &&
    typeof value.props.children !== "undefined" &&
    (typeof value.props.children === "string" ||
      typeof value.props.children === "number" ||
      typeof value.props.children === "boolean" ||
      Array.isArray(value.props.children))
  );
};

export const components = {
  a: (
    props: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
  ) => <a {...props} target="_blank" rel="noopener noreferrer" />,
  pre: function Pre({ children }: { children?: ReactNode }) {
    return <>{children}</>;
  },
  code(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
    const { children, className, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter language={match[1]} style={vscDarkPlus}>
        {String(children)}
      </SyntaxHighlighter>
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
  h1(
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) {
    return <h1 id={makeSlug(props.children)} {...props} />;
  },
  h2(
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) {
    return <h2 id={makeSlug(props.children)} {...props} />;
  },
  h3(
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) {
    return <h3 id={makeSlug(props.children)} {...props} />;
  },
  h4(
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) {
    return <h4 id={makeSlug(props.children)} {...props} />;
  },
  h5(
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) {
    return <h5 id={makeSlug(props.children)} {...props} />;
  },
  h6(
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) {
    return <h6 id={makeSlug(props.children)} {...props} />;
  },
};

export function useMDXComponents(original: MDXComponents): MDXComponents {
  return {
    ...original,
    ...components,
  };
}
