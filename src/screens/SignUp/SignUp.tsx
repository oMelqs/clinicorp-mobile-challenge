import {useState} from 'react'
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native'
import {TextInput, Button, Text} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import Toast from 'react-native-toast-message'
import {FIREBASE_AUTH} from '@/services/firebase'
import styles from './styles'
export const SignUp = () => {
  const {navigate} = useNavigation()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleAuth = () => {
    navigate('Auth')
  }

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'As senhas não estão iguais!',
      })
      return
    }
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      Toast.show({
        type: 'success',
        text1: 'Conta criada com sucesso!',
      })
      navigate('Home')
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Falha ao criar conta!',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text variant="headlineLarge">Criar uma conta</Text>
          <Text variant="titleMedium">
            É necessário ter conta para usar este aplicativo.
          </Text>
        </View>
        <Text variant="labelLarge" style={styles.labelContainer}>
          Email
        </Text>
        <TextInput
          mode="outlined"
          label="Digite seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text variant="labelLarge" style={styles.labelContainer}>
          Nome
        </Text>
        <TextInput
          mode="outlined"
          label="Digite seu nome"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text variant="labelLarge" style={styles.labelContainer}>
          Senha
        </Text>
        <TextInput
          mode="outlined"
          label="Digite sua senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye' : 'eye-off'}
              onPress={toggleShowPassword}
            />
          }
        />
        <Text variant="labelLarge" style={styles.labelContainer}>
          Confirmar senha
        </Text>
        <TextInput
          mode="outlined"
          label="Digite sua senha novamente"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={handleSignUp}
          style={styles.button}
          loading={loading}>
          Criar conta
        </Button>
        <Button mode="outlined" onPress={handleAuth} style={styles.button}>
          Já tenho conta
        </Button>
      </View>
    </TouchableWithoutFeedback>
  )
}
