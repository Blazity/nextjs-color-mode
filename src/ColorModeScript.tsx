import React from 'react'
import Head from 'next/head'

export const initColorModeScript = `
const selectedColorMode = localStorage.getItem("nextColorMode");

if (!selectedColorMode) {
  setupPreferredColorMode();
  window.colorMode = window.prefersDarkMode ? "dark" : "light";
} else {
  window.colorMode = selectedColorMode;
}

appendThemeClassName(window.colorMode)

function setupPreferredColorMode() {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  window.prefersDarkMode = darkModeMediaQuery.matches
}

function appendThemeClassName(colorMode) {
  window.document.querySelector('body').classList.remove("next-light-theme");
  window.document.querySelector('body').classList.remove("next-dark-theme");
  window.document.querySelector('body').classList.add("next-" + colorMode + "-theme")
}
`

export function ColorModeScript() {
  return (
    <Head>
      <script dangerouslySetInnerHTML={{ __html: initColorModeScript }} />
    </Head>
  )
}
