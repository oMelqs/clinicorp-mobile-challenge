import {DarkTheme as NavigationDarkTheme} from '@react-navigation/native'
import {MD3DarkTheme, adaptNavigationTheme} from 'react-native-paper'

const {DarkTheme} = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
})

export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    background: '#000',
    backdrop: '#000',
  },
}
