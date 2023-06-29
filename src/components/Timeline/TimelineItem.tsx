import type { TimelineEvent } from "../../types/Timeline.types";
import TimelineButtonAndBar from "./TimelineButtonAndBar";

export default function TimelineItem({ event, last = false }: { event: TimelineEvent, last: boolean}): JSX.Element {
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
            <div className="ml-4 mt-3">
                <time className="text-sm font-normal leading-none text-slate-700 dark:text-slate-500">{event.subtitle}</time>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">{event.title}</h3>
            </div>
        </li>
    )
}
