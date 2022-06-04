import React from "react";

export default function Contact({ site }) {
  return (
    <section className='row my-3 align-items-center' id='contact'>
      <div className='col-md-4'>
        <h2 className='fancy-title'>Say Hello</h2>
        <p>Looking for someone just like me?</p>
      </div>
      <div className='col-md-8'>
        <a href='tel:+447515352631'>
          +44 07515 352631
        </a>
        <br />
        <a href='mailto:jdamner@me.com' className=''>
          jdamner@me.com
        </a>
      </div>
    </section>
  );
}