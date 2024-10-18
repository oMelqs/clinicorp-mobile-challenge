import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
import {CombinedDarkTheme} from '@/styles/theme'

export const Routes = () => {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <AppRoutes />
    </NavigationContainer>
  )
}
