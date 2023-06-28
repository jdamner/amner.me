import React, { useEffect, useState } from "react";
import TimelineItem from "./TimelineItem";
import TimelineDetail from "./TimelineDetail";

import getTimelineData from "../../api/TimelineData";

import type { TimelineEvent } from "../../types/Timeline.types";


export default function Timeline(): React.JSX.Element {

    const [timelineState, setTimelineState] = useState<{
        events: TimelineEvent[],
        currentIndex: number
    }>({
        events: [],
        currentIndex: 0,
    })

    useEffect(() => {
        (async () => {
            const data = await getTimelineData()
            setTimelineState({
                ...timelineState,
                events: data,
            })
        })()
    }, [timelineState])


    let setEvent = (index: number) => {

        if (index < 0 || index >= timelineState.events.length) return;

        setTimelineState({
            ...timelineState,
            currentIndex: index,
        })
    }

    let handleScroll = (event: React.UIEvent<HTMLOListElement, UIEvent>) => {
        const clientWidth = event.currentTarget.clientWidth
        const children = event.currentTarget.children

        let i = 0
        for( let child of children) {
            let childLeft = child.getBoundingClientRect().left
            let childWidth = child.getBoundingClientRect().width
            if (childLeft < clientWidth / 2 && childLeft + childWidth > clientWidth / 2) {
                setEvent(i)
            }
            i++;
        }
    }

    let forceScrollTo = (index: number) => {
        const element = document.getElementById('timeline-scroll')
        if (!element) return;
        const children = element.children
        if (index < 0 || index >= children.length) return;

        const child = children[index]
        child.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        })
    }


    if (timelineState.events.length === 0) return (<div>Loading...</div>)

    const currentEvent = timelineState.events[timelineState.currentIndex] || null

    return (
        <div className='flex flex-col'>
            <ol id="timeline-scroll" className="relative w-full flex snap-x snap-mandatory overflow-x-auto" onScroll={handleScroll}>
                {timelineState.events.map((event, index) => (
                    <TimelineItem event={event} key={event.id} last={index === timelineState.events.length - 1} />
                ))}
            </ol>

            <div className="flex">
                {currentEvent && <TimelineDetail event={currentEvent} />}

                <div className="flex justify-center mt-4">
                    <button className="p-2 w-10 h-10 mx-3 bg-slate-900 dark:bg-slate-400 rounded-full text-white dark:text-black" onClick={() => forceScrollTo(timelineState.currentIndex - 1)} disabled={timelineState.currentIndex === 0}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="p-2 w-10 h-10 bg-slate-900 dark:bg-slate-400 rounded-full text-white dark:text-black" onClick={() => forceScrollTo(timelineState.currentIndex + 1)} disabled={timelineState.currentIndex === timelineState.events.length - 1}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}
