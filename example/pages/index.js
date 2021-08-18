import Head from 'next/head'
import { ColorModeStyles, useColorModeValue } from 'nextjs-color-mode'

export default function Home() {
  const {} = useColorMode()
  const [boxColor, boxCss] = useColorModeValue('box-color', 'blue', 'red')
  const [buttonColor, buttonCss] = useColorModeValue('button-color', 'green', 'yellow')

  return (
    <>
      <Head>
        <ColorModeStyles styles={[boxCss, buttonCss]} />
      </Head>
      <div>
        hello world
        <div style={{ width: '24rem', height: '12rem', backgroundColor: boxColor }} />
        <button style={{ backgroundColor: buttonColor }} onClick={} />
      </div>
    </>
  )
}
