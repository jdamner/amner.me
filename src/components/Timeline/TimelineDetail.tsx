import React from 'react'
import ReactMarkdown from 'react-markdown'

import type { TimelineEvent } from '../../types/Timeline.types'

export default function TimelineDetail({ event }: { event: TimelineEvent }): JSX.Element {
    return (
        <ReactMarkdown className="prose px-3 md:px-0 prose-slate dark:prose-invert">{event.content}</ReactMarkdown>
    )
}