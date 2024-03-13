import React from "react";

/* Components */
import PostLink from "../Links/PostLink"

/* Types */
import type { PostLinkType } from "../../types"

export default function PostList(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { posts: PostLinkType[] }) {
  const { posts, ...rest } = props;
  return (
    <div className='columns-1 xs:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2' id='post-list' {...rest} >
      {posts && posts.map((post, index) => <div key={index} className='break-inside-avoid-column'><PostLink {...post} /></div>
      )}
    </div >
  );
}