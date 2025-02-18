export function themeClasses(key: string) {
  return {
    text: `text-${key}-50`,
    textLighter: `text-${key}-100`,
    textLight: `text-${key}-300`,
    textTint: `text-${key}-500`,
    highlight: `text-${key}-400`,
    link: `text-${key}-300 hover:text-${key}-200`,
    card: `border-${key}-500 bg-${key}-900/20`,
    fill: `fill-${key}-500`,
    stroke: `stroke-${key}-500`,
    gradient: `transition will-change-background bg-gradient-to-b from-${key}-800 via-${key}-900 to-${key}-950`,
  }
}
