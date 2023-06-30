import type { TimelineEvent } from "../../types/Timeline.types";
import TimelineButtonAndBar from "./TimelineButtonAndBar";

export default function TimelineItem({ event, last = false }: { event: TimelineEvent, last: boolean }): JSX.Element {
    return (
        <li className="
            group
            mb-10
            snap-always snap-start 
            shrink-0 
            hover:cursor-pointer 
            w-9/12
            last:w-full">
            <TimelineButtonAndBar last={last} />
            <div className="mt-3">
                <h3 className="text-xl font-semibold leading-none text-slate-900 dark:text-slate-200">{event.data.role}</h3>
                <h4 className="text-lg text-slate-900 dark:text-slate-200">{event.data.title}
                    {event.data.subtitle && <span className="text-sm text-slate-700 dark:text-slate-500 ml-2">{event.data.subtitle}</span>}
                </h4>
                <span className="text-md leading-none text-slate-700 dark:text-slate-500">{event.data.from} &mdash; {event.data.to} </span>
            </div>
        </li>
    )
}
