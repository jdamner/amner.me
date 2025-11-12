import ReactMarkdown from "react-markdown";

import { components } from "../mdx-components";
import type { ComponentProps } from "react";

export function Markdown({ children }: ComponentProps<typeof ReactMarkdown>) {
  return <ReactMarkdown components={components} children={children} />;
}
