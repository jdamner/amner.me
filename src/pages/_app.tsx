/* Types */
import type { AppProps } from 'next/app';
/* Global Styles */
import "../global.css";

/**
 * App
 * 
 * @param {AppProps} { Component, pageProps }
 * @returns {JSX.Element}
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
