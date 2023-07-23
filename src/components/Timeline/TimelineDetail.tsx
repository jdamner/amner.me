import React from 'react'
import ReactMarkdown from 'react-markdown'

import { MdFile } from '../../types/MdFile.type'

export default function TimelineDetail({ event }: { event: MdFile }): React.JSX.Element {
    return (
        <ReactMarkdown className="prose px-3 md:px-0 prose-slate dark:prose-invert">{event.content}</ReactMarkdown>
    )
}