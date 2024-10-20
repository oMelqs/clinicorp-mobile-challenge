import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import {
  User,
  UserCredential,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {FIREBASE_AUTH} from '@/services/firebase'
import Toast from 'react-native-toast-message'
import {useNavigation} from '@react-navigation/native'

interface AuthContextType {
  currentUser: User | null
  loading: boolean
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

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const {navigate} = useNavigation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      )
      setCurrentUser(userCredential.user)
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
      await signOut(FIREBASE_AUTH)
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
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
