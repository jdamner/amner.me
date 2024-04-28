import React from "react";

export default function TimelineDetail({ children }: React.PropsWithChildren) {
  return (
    <div className="prose px-3 md:px-0 prose-slate dark:prose-invert">
      {children}
    </div>
  );
}
