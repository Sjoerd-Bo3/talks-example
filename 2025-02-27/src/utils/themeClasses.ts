export function themeClasses(key: string) {
  return {
    text: `text-${key}-50`,
    textLight: `text-${key}-300`,
    textTint: `text-${key}-500`,
    highlight: `text-${key}-400`,
    menu: `bg-${key}-500`,
    menuUnderline: `bg-${key}-200`,
    button: `rounded bg-${key}-500:50 hover:bg-${key}-500:70 px-4 py-2 transition`,
    link: `text-${key}-300 hover:text-${key}-200`,
    card: `transition border-${key}-500 border-1 bg-${key}-700:80 hover:bg-${key}-800:80`,
    fill: `fill-${key}-500`,
    stroke: `stroke-${key}-500`,
    gradient: `transition will-change-background bg-gradient-to-b from-${key}-800 via-${key}-900 to-${key}-950`,
    icon: `hover:text-${key}-300`,
    tag: `inline-flex py-1 px-2 text-sm justify-center items-center rounded flex-wrap gap-x-1 rounded font-medium text-${key}-100 bg-${key}-950`,
  }
}
