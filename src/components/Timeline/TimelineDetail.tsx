import React from 'react'
import ReactMarkdown, { type Options } from 'react-markdown'

import type { MdFile } from '../../types'

export default function TimelineDetail(props: Options & { event: MdFile }) {
    const { event, ...rest } = props
    return (
        <ReactMarkdown className="prose px-3 md:px-0 prose-slate dark:prose-invert" { ...rest }>{event.content}</ReactMarkdown>
    )
}