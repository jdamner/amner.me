import React from "react";
import type { WithChildren } from "../../types/WithChildren.type";

export default function Container({ alt = false, children }: WithChildren & { alt?: boolean }): React.JSX.Element {
    const container = <div className='container mx-auto py-5 px-3'>{children}</div>
    return alt ? <div className='bg-slate-200 dark:bg-slate-800 py-5'>{container}</div> : container
}