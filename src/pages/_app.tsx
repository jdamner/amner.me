/* Types */
import type { AppProps } from 'next/app';
/* Global Styles */
import { Poppins } from "@next/font/google";

// Get Regular, Bold and SemiBold
const font = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin-ext'],
});
import "../global.css";

/**
 * App
 * 
 * @param {AppProps} { Component, pageProps }
 * @returns {JSX.Element}
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <style jsx global>{`
      :root {
        --sans-font: ${font.style.fontFamily};
    `}</style>
  <Component {...pageProps} />
  </>
}
