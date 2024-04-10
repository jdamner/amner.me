import React from "react";

export default function Container({ alt = false, children }: { children?: React.ReactNode, alt?: boolean }) {
    const container = <div className='container mx-auto py-5 px-3'>{children}</div>
    return alt ? <div className='bg-slate-200 dark:bg-slate-800 py-5'>{container}</div> : container
}