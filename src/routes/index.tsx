import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
import {CombinedLightTheme} from '@/styles/theme'

export const Routes = () => {
  return (
    <NavigationContainer theme={CombinedLightTheme}>
      <AppRoutes />
    </NavigationContainer>
  )
}
