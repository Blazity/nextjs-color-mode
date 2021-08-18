export function useColorModeValue(name: string, lightThemeValue: string, darkThemeValue: string) {
  return [`var(--${name})`, { light: `--${name}: ${lightThemeValue};`, dark: `--${name}: ${darkThemeValue};` }]
}
