import React from "react";
import Title from "./Global/Title";

import PostList from "./PostList/PostList";


export default function Blog( { posts }) {
  return (
    <section className='blog' id='blog'>
      <div className='blog-wrap'>
        <Title text='My Projects and Writing' />
        <div className='blog-wrap-grid'>
          <PostList posts={posts} />
        </div>
        
      </div>
    </section>
  );
}