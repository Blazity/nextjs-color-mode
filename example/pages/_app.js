import React from 'react'
import Head from 'next/head'
import { ColorModeScript } from 'next-next-color-mode'

const criticalCss = `
.light-theme {
--background: #fff;
--text: #000;
}

.dark-theme {
--background: #000;
--text: #fff;
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
