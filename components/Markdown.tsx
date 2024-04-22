import ReactMarkdown from "react-markdown";

import { components } from "mdx-components";

export function Markdown({ children }) {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
}
