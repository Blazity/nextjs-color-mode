export function useColorModeValue(
  name: string,
  lightThemeValue: string,
  darkThemeValue: string,
): [string, { light: string; dark: string }] {
  return [`var(--${name})`, { light: `--${name}: ${lightThemeValue};`, dark: `--${name}: ${darkThemeValue};` }]
}
