import { useState, useCallback } from 'react'

export function useColorSwitcher() {
  const [isLightMode, { toggle }] = useBoolean(() => {
    const colorMode = localStorage.getItem('nextColorMode')
    if (!colorMode) {
      return window.prefersDarkMode ? false : true
    }
    return colorMode === 'light'
  })

  function changeTheme(colorMode: 'light' | 'dark') {
    toggle()
    localStorage.setItem('nextColorMode', colorMode)
    const bodyElement = window.document.querySelector('body')
    bodyElement?.classList.remove('next-light-theme')
    bodyElement?.classList.remove('next-dark-theme')
    bodyElement?.classList.add('next-' + colorMode + '-theme')
  }

  function toggleTheme() {
    return changeTheme(isLightMode ? 'dark' : 'light')
  }

  return { colorMode: isLightMode ? 'light' : 'dark', changeTheme, toggleTheme }
}

function useBoolean(initialState: boolean | (() => boolean) = false) {
  const [value, setValue] = useState(initialState)

  const on = useCallback(() => {
    setValue(true)
  }, [])

  const off = useCallback(() => {
    setValue(false)
  }, [])

  const toggle = useCallback(() => {
    setValue((prev: boolean) => !prev)
  }, [])

  return [value, { on, off, toggle }] as const
}
