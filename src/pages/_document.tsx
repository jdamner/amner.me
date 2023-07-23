import React from "react";
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Document
 * 
 * @returns {JSX.Element}
 */
export default function Document(): React.JSX.Element {
  return (
    <Html lang="en-GB">
      <Head />
      <body className='bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-300 font-sans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
