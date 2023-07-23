import React from "react";
/* API */
import { motion, useReducedMotion } from "framer-motion"

/* Components */
import PostLink from "../Links/PostLink"

/* Types */
import type { Post } from "../../types/Post.type"
import type { MotionProps } from "framer-motion"

/**
 * Post List
 * 
 * @param {Post[]} posts
 * @returns JSX.Element
 */
export default function PostList({ posts }: { posts: Post[] }): React.JSX.Element {
  const reduceMotion: boolean = useReducedMotion()
  const PostLinks = posts && posts.map((post, index) => {
    const delay = index * 0.01
    const motionProps: MotionProps = {
      initial: { opacity: reduceMotion ? 1 : 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { delay, duration: 0.5 },
    }
    return <motion.div {...motionProps} key={index} className='break-inside-avoid-column'>
      <PostLink post={post} />
    </motion.div>
  })

  return (
    <div className='columns-1 xs:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2' id='post-list' >
      {PostLinks}
    </div >
  );
}