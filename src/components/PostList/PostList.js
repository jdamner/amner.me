import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function PostList({ posts }) {
  if (!posts) {
    console.error("No posts found");
    return null;
  }
  return posts.map((post, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.01, duration: 0.5 }}
      className='grid-item'>
      <Link href={post.slug}>
        <Image src={post.thumbnail} alt={post.title} loading='lazy' fill style={{ objectFit: "cover" }} />
        <h3>
          {post.title}
        </h3>
      </Link>
    </motion.div>
  ));
}