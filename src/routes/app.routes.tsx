import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Auth from '@/screens/Auth'
import Home from '@/screens/Home'

const {Navigator, Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Auth" component={Auth} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
