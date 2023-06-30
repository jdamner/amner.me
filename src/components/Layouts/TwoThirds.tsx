import React from "react";
import { WithChildren } from "../../types/WithChildren.type";

export default function TwoThirds({ top = false, first, children } : WithChildren & { top?: boolean, first?: React.ReactNode | React.ReactNode[]} ): React.JSX.Element { 

    let classList = [
        "flex",
        "flex-col",
        "md:flex-row",
        "mb-5",
        "gap-5",
    ]

    if (top) {
        classList.push("md:items-start");
    } else {
        classList.push("md:items-end");
    }

    return (
        <div className={classList.join(' ')}>
            <div className="basis-1/3">{first}</div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}