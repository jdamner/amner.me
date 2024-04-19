import React from "react";

import type { MdFile } from "../../types";

export default function TimelineDetail({ event }: { event: MdFile }) {
  return (
    <div className="prose px-3 md:px-0 prose-slate dark:prose-invert">
      {event.content}
    </div>
  );
}
