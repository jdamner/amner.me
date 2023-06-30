import React, { useState } from "react";
import TimelineItem from "./TimelineItem";
import TimelineDetail from "./TimelineDetail";
import TimelineControlButton from "./TimelineControlButton";

import type { MdFile } from "../../types/MdFile.type";

export default function Timeline({ events }: { events: MdFile[] }): React.JSX.Element {

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const sliderRef = React.useRef<HTMLOListElement>(null);

    const handleScroll = (event: React.UIEvent<HTMLOListElement, UIEvent>) => {
        const clientWidth = event.currentTarget.clientWidth
        let index = 0

        for (let child of event.currentTarget.children) {
            let childLeft = child.getBoundingClientRect().left
            let childWidth = child.getBoundingClientRect().width

            if (
                index !== currentIndex && // If the index is not the current index
                index <= events?.length && // If the index is not greater than the number of events
                childLeft < clientWidth / 2 && // If the left side of the child is less than half the width of the screen
                childLeft + childWidth > clientWidth / 2 // If the right side of the child is greater than half the width of the screen
            ) {
                setCurrentIndex(index)
            }
            index++;
        }
    }

    const forceScrollTo = (index: number) => {
        const element = sliderRef.current
        element?.children[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        })
    }

    return (
        <div className='flex flex-col'>
            {events?.length > 0 &&
                <>
                    <ol ref={sliderRef} className="relative w-full flex snap-x snap-mandatory overflow-x-auto no-scrollbar" onScroll={handleScroll}>
                        {events.map((event, index) => (
                            <TimelineItem event={event} key={event.slug} last={index === events.length - 1} />
                        ))}
                    </ol>
                    <div className="ml-auto my-3">
                            <TimelineControlButton direction="left" onClick={() => forceScrollTo(currentIndex - 1)} disabled={currentIndex === 0} />
                            <TimelineControlButton direction="right" onClick={() => forceScrollTo(currentIndex + 1)} disabled={currentIndex === events.length - 1} />
                        </div>
                    <div className="flex justify-between flex-col md:flex-row">
                        {events[currentIndex] && <TimelineDetail event={events[currentIndex]} />}

                        

                    </div>
                </>
            }
        </div>
    )
}

