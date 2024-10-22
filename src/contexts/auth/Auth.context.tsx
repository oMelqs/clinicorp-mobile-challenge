import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import {
  UserCredential,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {FIREBASE_AUTH} from '@/services/firebase'
import Toast from 'react-native-toast-message'
import {useNavigation} from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser'
import {useOAuth, useUser, useAuth as useClerkAuth} from '@clerk/clerk-expo'

interface AuthContextType {
  currentUser: string | null
  loading: boolean
  googleLogin: () => Promise<void>
  login: (email: string, password: string) => Promise<UserCredential>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
interface AuthProviderProps {
  children: ReactNode
}

WebBrowser.maybeCompleteAuthSession()

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const googleOAuth = useOAuth({strategy: 'oauth_google'})
  const {user, isLoaded} = useUser()
  const clerkAuth = useClerkAuth()
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const {navigate} = useNavigation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user?.email) setCurrentUser(user?.email)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    WebBrowser.warmUpAsync()
    return () => {
      WebBrowser.coolDownAsync()
    }
  }, [])

  useEffect(() => {
    if (isLoaded && user) {
      setCurrentUser(user.primaryEmailAddress?.emailAddress ?? null)
      navigate('Home')
    }
  }, [isLoaded, user, navigate])

  const googleLogin = async () => {
    setLoading(true)
    try {
      const oAuthFlow = await googleOAuth.startOAuthFlow()
      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({session: oAuthFlow.createdSessionId})
          if (user && user.primaryEmailAddress?.emailAddress) {
            setCurrentUser(user.primaryEmailAddress?.emailAddress)
          }
          return
        }
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      )
      setCurrentUser(userCredential.user.email)
      Toast.show({
        type: 'success',
        text1: 'Login Successful!',
      })
      return userCredential
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: (error as Error).message,
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      if (user) {
        await clerkAuth.signOut()
      }
      if (FIREBASE_AUTH.currentUser) {
        await signOut(FIREBASE_AUTH)
      }
      setCurrentUser(null)
      Toast.show({
        type: 'success',
        text1: 'Logged out successfully!',
      })
      navigate('Auth')
    } catch (error) {
      setLoading(false)
      Toast.show({
        type: 'error',
        text1: 'Logout Failed',
      })
    } finally {
      setLoading(false)
    }
  }

  const value: AuthContextType = {
    currentUser,
    loading,
    googleLogin,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
