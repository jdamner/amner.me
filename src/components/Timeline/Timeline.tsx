import React, { useEffect, useState } from "react";
import TimelineItem from "./TimelineItem";
import TimelineDetail from "./TimelineDetail";

import getTimelineData from "../../api/TimelineData";

import type { TimelineEvent } from "../../types/Timeline.types";
import TimelineControlButton from "./TimelineControlButton";


export default function Timeline({ events = [] }: { events: TimelineEvent[] }): React.JSX.Element {

    const [timelineState, setTimelineState] = useState<{
        events: TimelineEvent[],
        currentIndex: number
    }>({
        events: events,
        currentIndex: 0,
    })

    useEffect(() => {
        setTimelineState({
            events: getTimelineData(),
            currentIndex: 0,
        })
    }, [])

    const sliderRef = React.useRef<HTMLOListElement>(null);

    const handleScroll = (event: React.UIEvent<HTMLOListElement, UIEvent>) => {
        const clientWidth = event.currentTarget.clientWidth
        let index = 0

        for (let child of event.currentTarget.children) {
            let childLeft = child.getBoundingClientRect().left
            let childWidth = child.getBoundingClientRect().width

            if (
                index !== timelineState.currentIndex && // If the index is not the current index
                index <= timelineState.events.length && // If the index is not greater than the number of events
                childLeft < clientWidth / 2 && // If the left side of the child is less than half the width of the screen
                childLeft + childWidth > clientWidth / 2 // If the right side of the child is greater than half the width of the screen
            ) {
                setTimelineState({
                    ...timelineState,
                    currentIndex: index,
                })
            }
            index++;
        }
    }

    const forceScrollTo = (index: number) => {
        const element = sliderRef.current

        if (!element) return;
        if (index < 0 || index >= element.children.length) return;

        element.children[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        })
    }

    return (
        <div className='flex flex-col'>
            {timelineState.events.length > 0 &&
                <>
                    <ol ref={sliderRef} className="relative w-full flex snap-x snap-mandatory overflow-x-auto no-scrollbar" onScroll={handleScroll}>
                        {timelineState.events.map((event, index) => (
                            <TimelineItem event={event} key={event.id} last={index === timelineState.events.length - 1} />
                        ))}
                    </ol>

                    <div className="flex justify-between flex-col-reverse md:flex-row">
                        {timelineState.events[timelineState.currentIndex] && <TimelineDetail event={timelineState.events[timelineState.currentIndex]} />}

                        <div className="hidden md:block">
                            <TimelineControlButton direction="left" onClick={() => forceScrollTo(timelineState.currentIndex - 1)} disabled={timelineState.currentIndex === 0} />
                            <TimelineControlButton direction="right" onClick={() => forceScrollTo(timelineState.currentIndex + 1)} disabled={timelineState.currentIndex === timelineState.events.length - 1} />
                        </div>

                    </div>
                </>
            }
        </div>
    )
}

export async function getStaticProps() {
    const events = await getTimelineData();
    return {
        props: {
            events
        }
    }
}