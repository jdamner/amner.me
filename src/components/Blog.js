import React from "react";

import PostList from "./PostList";

export default function Blog() {
  return (
  <section className='row my-3' id='portfolio'>
    <div className='col-md-4'>
      <h2 className='fancy-title'>
        My Projects and Writing
      </h2>
      A few things I've done, a few things I think about and a few things that have nowhere else to be.
    </div>
    <div className='col-md-8'>
      <div className='grid'>
        <PostList />
      </div>
    </div>
  </section>
  );
}