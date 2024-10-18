import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Auth from '@/screens/Auth'

const {Navigator, Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Auth" component={Auth} />
    </Navigator>
  )
}
