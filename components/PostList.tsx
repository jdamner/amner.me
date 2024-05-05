import React from "react";

/* Components */
import PostLink from "./Atoms/Links/PostLink";

/* Types */
import type { PostLinkType } from "../types";
import { TwoThirds } from "./Layouts";

export default function PostList(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { posts: PostLinkType[] },
) {
  const { posts, ...rest } = props;
  return (
    <TwoThirds>
      <div className="flex flex-col gap-2" {...rest}>
        {posts &&
          posts.map((post, index) => (
            <div key={index} className="break-inside-avoid-column">
              <PostLink {...post} />
            </div>
          ))}
      </div>
    </TwoThirds>
  );
}
