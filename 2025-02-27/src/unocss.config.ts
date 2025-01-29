import config from '@slidev/client/uno.config'
import { mergeConfigs } from 'unocss'
import { themeClasses } from './utils/themeClasses'
import { tailwindColors } from './utils/constants'

const colors: string[] = tailwindColors
  .map((key) => {
    return Object.values(themeClasses(key))?.map(item => item.split(' ')).flat()
  })
  .flat()

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    safelist: colors,
  },
])
