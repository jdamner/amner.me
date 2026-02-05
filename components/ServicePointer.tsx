import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline"

export const ServicePointer = () => { 
    return (
        <div className="flex flex-col justify-start items-start md:justify-center gap-5 sticky top-10 w-100">
            <div className="w-24 h-24 text-8xl rounded-full bg-orange-600 text-center rotate-90 md:rotate-none text-slate-900">
                <ArrowLeftCircleIcon />
            </div>
            <div className="text-xl font-bold">
            Take a look at a skill to see more details about it.
            </div>
        </div>
    )
}