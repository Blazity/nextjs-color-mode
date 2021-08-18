<div align="center">
  <h1>Next.js color-mode</h1>
  <p>A helper for creating non-flickering and accessible themed applications</p>
  <br />
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/nextjs-color-mode"><img alt="npm version badge" src="https://img.shields.io/npm/v/nextjs-color-mode"></a>  
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/nextjs-color-mode">
  <img alt="license badge" src="https://img.shields.io/npm/l/nextjs-color-mode">
</div>

<br />

## Features

- [x] 🙉 Non-flickering
- [x] ♿ Accessible (supports `prefers-color-scheme`)
- [x] 🐱 Dynamic theme values
- [x] 🐄 No additional dependencies
- [x] 🧠 Agnostic to the way you style your app

## Installation

```
$ npm i --save nextjs-color-mode

# or

$ yarn add nextjs-color-mode
```

## Setup
First, you need to import `ColorModeScript` from `nextjs-color-mode` and place it somewhere in the `_app.js` file.   
> If you're using styled-components or emotion, you can put the contents of `criticalThemeCss` to GlobalStyles. Just make sure it's critical css, and at the top of your global styles.

```jsx
// _app.js

import Head from 'next/head'
import { ColorModeScript } from 'nextjs-color-mode'

const criticalThemeCss = `
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
        <style dangerouslySetInnerHTML={{ __html: criticalThemeCss }} />
      </Head>
      <ColorModeScript />
      <Component {...pageProps} />
    </>
  )
}
```

## Theme switcher (`useColorSwitcher`)
To implement theme switcher, you should use the `useColorSwitcher` hook
> Note that every component that explicitly uses this hook should be rendered only on the client-side. [Check out how we do this in the example](https://github.com/bmstefanski/next-color-mode/blob/master/example/pages/index.js#L5)

```jsx
import { ColorModeStyles, useColorModeValue, useColorSwitcher } from 'nextjs-color-mode'

export default function ColorSwitcher(props) {
  const { toggleTheme, colorMode } = useColorSwitcher()

  return (
    <button onClick={toggleTheme}>
      Change theme to {colorMode === 'light' ? 'dark' : 'light'}
    </button>
  )
}
```
```tsx
function useColorSwitcher(): {
    colorMode: string;
    changeTheme: (colorMode: 'light' | 'dark') => void;
    toggleTheme: () => void;
};

```

## Using dynamic variables (`useColorModeValue`)
Sometimes you may want to omit the design system or need to hotfix something fast. Here's the solution for that.

```jsx
export default function SomeComponent() {
  const [boxBgColor, boxBgCss] = useColorModeValue('box-color', 'blue', 'red')
  const [boxBorderColor, boxBorderCss] = useColorModeValue('box-border-color', 'red', 'blue')
  // the first item of the array returns CSS variable name
  // and the second one returns a special object that then gets parsed into a themable CSS variable

  return (
    <>
      <ColorModeStyles styles={[boxBgCss, boxBorderCss]} />
      <div style={{ width: '24rem', height: '12rem', backgroundColor: boxBgColor, border: "10px solid", borderColor: boxBorderColor }} />
    </>
  )
}
```
```tsx
function useColorModeValue(name: string, lightThemeValue: string, darkThemeValue: string);
```
> Do not use the same name twice, it may cause variable overriding and is hard to debug. 
Also using things like unique id, UUID or any randomly generated set of characters is a bad idea - it will display mismatch content warning and make it even harder to debug!
