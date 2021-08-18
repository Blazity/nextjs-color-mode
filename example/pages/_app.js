import React from 'react'
import Head from 'next/head'
import { ColorModeScript } from 'nextjs-color-mode'

const criticalCss = `
.next-light-theme {
--background: #fff;
--text: #000;
}

.next-dark-theme {
--background: #000;
--text: #fff;
}

body {
  background: var(--background);
  color: var(--text);
}
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </Head>
      <ColorModeScript />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
