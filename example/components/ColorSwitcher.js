import { ColorModeStyles, useColorModeValue, useColorSwitcher } from 'nextjs-color-mode'

export default function ColorSwitcher(props) {
  const { toggleTheme, colorMode } = useColorSwitcher()
  const [buttonColor, buttonCss] = useColorModeValue('button-color', 'green', 'yellow')

  return (
    <>
      <ColorModeStyles styles={[buttonCss]} />
      <button style={{ backgroundColor: buttonColor }} onClick={toggleTheme}>
        Change theme to {colorMode === 'light' ? 'dark' : 'light'}
      </button>
    </>
  )
}
