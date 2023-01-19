/* API */
import { useState } from "react";
import { event } from "../../api/Insights";

/* Components */
import Button from "../Links/Button";


/* Types */
import type { children } from "../../types/children.type";

/**
 * Signpost Modal
 * 
 * @param { string, children } props
 * @returns {JSX.Element}
 */
export default function Signpost({ title, children }: { title: string, children: children}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClick = () => {
        setIsOpen(!isOpen);
        event('signpost-click', { open: !isOpen });
    }

    return (
        <>
            <Button onClick={handleModalClick} data-testid='contact-button'>{title}</Button>
            {isOpen &&
                <div className="fixed z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden sm:my-8 sm:w-full sm:max-w-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                                {/* Close Icon */}
                                <div className="absolute top-0 right-0 pt-4 pr-4">
                                    <button type="button" className="active:outline-none focus:outline-none" onClick={handleModalClick}>
                                        <span className="sr-only">Close</span>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                {/* Content */}
                                {children}
                            </div>                            
                        </div>
                    </div>
                </div>
            }
        </>
    )
}