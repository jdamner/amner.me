import React from "react";


export default function Footer() {
  const year = new Date().getFullYear();
  return (
  <footer id="colophon" className="site-footer container-fluid">
    <div className="site-info py-3 text-center">
      <small>
        &copy; James Amner {year}
      </small>
    </div>
  </footer>
  )
}