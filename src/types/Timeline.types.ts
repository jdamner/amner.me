import { MdFile } from "./MdFile.type";

export interface TimelineEvent extends MdFile {
    title: string,
    subtitle: string,
    role: string,
    from: string,
    to: string,
}


export function toTimelineEvent( object: MdFile ) : TimelineEvent {
    return {
        title: object.data.title,
        subtitle: object.data.subtitle,
        role: object.data.role,
        from: object.data.from,
        to: object.data.to,
        ...object
    }
}