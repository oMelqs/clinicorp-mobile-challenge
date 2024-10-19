import {useState} from 'react'
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native'
import {TextInput, Button, Text} from 'react-native-paper'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

export const Auth = () => {
  const {navigate} = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleForgotPassword = () => {}

  const handleAuth = () => {
    console.log('Email:', email)
    console.log('Password:', password)
    navigate('Home')
  }

  const handleSignUp = () => {}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text variant="headlineLarge">Acessar sua conta</Text>
        <Text variant="titleMedium">bem-vindo de volta</Text>
        <Text variant="labelLarge" style={styles.emailLabelContainer}>
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
        <View style={styles.passwordLabelContainer}>
          <Text variant="labelLarge">Senha</Text>
          <Button mode="text" onPress={handleForgotPassword}>
            Esqueci minha senha
          </Button>
        </View>
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
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button mode="contained" onPress={handleAuth} style={styles.button}>
          Entrar
        </Button>
        <Button mode="outlined" onPress={handleSignUp} style={styles.button}>
          Criar conta
        </Button>
      </View>
    </TouchableWithoutFeedback>
  )
}
