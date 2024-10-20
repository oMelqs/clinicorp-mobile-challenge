import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Auth from '@/screens/Auth'
import Home from '@/screens/Home'
import SignUp from '@/screens/SignUp'

const {Navigator, Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Auth" component={Auth} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
