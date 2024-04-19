import type { MDXComponents } from 'mdx/types'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

/* API */
import { makeSlug } from "@/utils"

/* Types */
import type { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export const components = {
  a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => <a {...props} target="_blank" rel="noopener noreferrer" />,
  pre: function Pre({children}: { children?: ReactNode }) {
    return <>{children}</>
  },
  code(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
    const { children, className, ...rest } = props
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={vscDarkPlus}
      >
        {String(children)}
      </SyntaxHighlighter>
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    )
  },
  h1(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h1 id={makeSlug(props.children)} {...props} />
  },
  h2(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h2 id={makeSlug(props.children)} {...props} />
  },
  h3(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h3 id={makeSlug(props.children)} {...props} />
  },
  h4(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h4 id={makeSlug(props.children)} {...props} />
  },
  h5(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h5 id={makeSlug(props.children)} {...props} />
  },
  h6(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h6 id={makeSlug(props.children)} {...props} />
  }
}

export function useMDXComponents(original: MDXComponents): MDXComponents {
  return {
    ...original,
    ...components,
  }
}