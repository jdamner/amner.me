import React from "react";

import TwoThirds from "../Layouts/TwoThirds";
import ExpandingLine from "./ExpandingLine";

export default function Title({ children, title }: { children?: React.ReactNode, title?: string }) {

    const classes = [
        'text-lg',
        'font-sans',
        'font-semibold',
        'tracking-tight',
        'text-left',
        'font-slate-800',
        'uppercase',
        'text-5xl',
        'md:text-6xl',
        'break-words',
        'basis-1/3',
    ];

    const ChildComponent = <div className='w-full text-left  text-2xl font-black'>
        {children}
        <ExpandingLine />
    </div>


    return (
        title ?
            <TwoThirds first={<h2 className={classes.join(' ')}>{title}</h2>}>
                {children && ChildComponent}
            </TwoThirds> :
            children && ChildComponent
    );
}
