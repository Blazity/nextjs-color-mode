import React from 'react'
import Head from 'next/head'

interface ColorModeStylesProps {
  styles: ColoredValue[]
}

type ColoredValue = { light: string; dark: string }

export function ColorModeStyles({ styles }: ColorModeStylesProps) {
  return (
    <Head>
      <style>{transformColorModeStyles(...styles)}</style>
    </Head>
  )
}

function transformColorModeStyles(...styles: ColoredValue[]) {
  const lightStyles = styles.map((entry) => entry.light)
  const darkStyles = styles.map((entry) => entry.dark)
  return ['.next-light-theme {', lightStyles.join(''), '}', '.next-dark-theme {', darkStyles.join(''), '}']
}
