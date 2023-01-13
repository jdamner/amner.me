
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import type { post } from "../../types/post.type"
import Title from "./Title"
import PostLink from "../Links/PostLink"

export default function PostList({ posts }: { posts: post[] }): JSX.Element {
  return (
    <div className='columns-1 xs:columns-2 md:columns-3 lg:columns-4 gap-3' id='post-list'>
      {posts && posts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.01, duration: 0.5 }}
          className='break-inside-avoid-column'>
          <PostLink post={post} />
        </motion.div>
      ))}
    </div>
  );
}