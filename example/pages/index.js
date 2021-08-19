import { ColorModeStyles, useColorModeValue } from 'nextjs-color-mode'
import { useCallback, useState } from 'react'
import dynamic from 'next/dynamic'

const ColorSwitcher = dynamic(() => import('../components/ColorSwitcher'), { ssr: false })

export default function Home() {
  const [boxColor, boxCss] = useColorModeValue('box-color', 'blue', 'red')

  return (
    <>
      <ColorModeStyles styles={[boxCss]} />
      <div>
        hello world
        <div style={{ width: '24rem', height: '12rem', backgroundColor: boxColor }} />
        <ColorSwitcher />
      </div>
    </>
  )
}
