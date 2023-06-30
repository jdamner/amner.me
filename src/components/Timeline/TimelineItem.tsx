import React from "react";
import { MdFile } from "../../types/MdFile.type";
import InlineLink from "../Links/Inline";
import TimelineButtonAndBar from "./TimelineButtonAndBar";

export default function TimelineItem({ event, last = false }: { event: MdFile, last: boolean }): React.JSX.Element {
    return (
        <li className="
            group
            snap-always snap-start 
            shrink-0 
            w-9/12
            last:w-full">
            <TimelineButtonAndBar last={last} />
            <div className="mt-3 text-slate-900 dark:text-slate-200">
                <h3 className="w-full text-left text-2xl font-black mb-2">{event.data.role}</h3>
                <h4 className="text-lg"><InlineLink href={event.data.url ?? '#'} target="_blank" rel='noopener norefferrer'>{event.data.title}</InlineLink></h4>
                <span className="text-sm">{event.data.from} &mdash; {event.data.to} </span>
            </div>
        </li>
    )
}
