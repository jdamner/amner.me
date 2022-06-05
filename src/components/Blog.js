import React from "react";

import PostList from "./PostList";
import Seperator from "./global/Seperator";

export default function Blog() {
  return (
    <section className='blog' id='blog'>
      <div className='blog-wrap'>
        <div className='blog-wrap-title'>  
          <Seperator />
          <h2>My Projects and Writing</h2>
          <Seperator modifier='rotate' />
        </div>
        <div className='blog-wrap-grid'>
          <PostList />
        </div>
        
      </div>
    </section>
  );
}