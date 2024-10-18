import {DefaultTheme as NavigationLightTheme} from '@react-navigation/native'
import {MD3LightTheme, adaptNavigationTheme} from 'react-native-paper'

const {LightTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationLightTheme,
})

export const CombinedLightTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
}
