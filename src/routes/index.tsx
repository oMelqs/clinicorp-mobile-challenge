import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
import {CombinedLightTheme} from '@/styles/theme'
import {AuthProvider} from '@/contexts/auth/Auth.context'
import {TasksProvider} from '@/contexts/tasks/Tasks.context'

export const Routes = () => {
  return (
    <NavigationContainer theme={CombinedLightTheme}>
      <AuthProvider>
        <TasksProvider>
          <AppRoutes />
        </TasksProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
