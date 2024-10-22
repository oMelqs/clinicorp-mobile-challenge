import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
import {CombinedLightTheme} from '@/styles/theme'
import {AuthProvider} from '@/contexts/auth/Auth.context'
import {TasksProvider} from '@/contexts/tasks/Tasks.context'
import {ClerkProvider} from '@clerk/clerk-expo'
import {EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY} from '@/services/clerk'
import {tokenCache} from '@/storage/tokenCache'

export const Routes = () => {
  return (
    <NavigationContainer theme={CombinedLightTheme}>
      <ClerkProvider
        publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
        tokenCache={tokenCache}>
        <AuthProvider>
          <TasksProvider>
            <AppRoutes />
          </TasksProvider>
        </AuthProvider>
      </ClerkProvider>
    </NavigationContainer>
  )
}
