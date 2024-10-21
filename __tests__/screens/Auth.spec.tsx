import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import {useAuth} from '@/contexts/auth/Auth.context'
import {useNavigation} from '@react-navigation/native'
import Auth from '@/screens/Auth'
import {act} from 'react-test-renderer'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}))

jest.mock('@/contexts/auth/Auth.context', () => ({
  useAuth: jest.fn(),
}))

describe('Auth Screen', () => {
  const navigate = jest.fn()
  const login = jest.fn()

  beforeEach(() => {
    jest.useFakeTimers()
    ;(useNavigation as jest.Mock).mockReturnValue({navigate})
    ;(useAuth as jest.Mock).mockReturnValue({login, loading: false})
  })

  afterEach(() => {
    act(() => {
      jest.runAllTimers()
    })
    jest.clearAllMocks()
  })

  it('navigates to SignUp on sign up button press', () => {
    const {getByText} = render(<Auth />)
    const signUpButton = getByText('Criar conta')

    act(() => {
      fireEvent.press(signUpButton)
    })

    expect(navigate).toHaveBeenCalledWith('SignUp')
  })

  it('calls handleAuth on login button press', async () => {
    const {getByText, getByLabelText} = render(<Auth />)
    const emailInput = getByLabelText('Digite seu e-mail')
    const passwordInput = getByLabelText('Digite sua senha')
    const loginButton = getByText('Entrar')

    act(() => {
      fireEvent.changeText(emailInput, 'test@example.com')
      fireEvent.changeText(passwordInput, 'password')
    })

    await act(async () => {
      fireEvent.press(loginButton)
    })

    expect(login).toHaveBeenCalledWith('test@example.com', 'password')
    expect(navigate).toHaveBeenCalledWith('Home')
  })

  it('calls handleForgotPassword on forgot password button press', () => {
    const {getByText} = render(<Auth />)
    const forgotPasswordButton = getByText('Esqueci minha senha')

    act(() => {
      fireEvent.press(forgotPasswordButton)
    })
  })

  it('updates email state on email input change', () => {
    const {getByLabelText} = render(<Auth />)
    const emailInput = getByLabelText('Digite seu e-mail')

    act(() => {
      fireEvent.changeText(emailInput, 'test@example.com')
    })

    expect(emailInput.props.value).toBe('test@example.com')
  })

  it('updates password state on password input change', () => {
    const {getByLabelText} = render(<Auth />)
    const passwordInput = getByLabelText('Digite sua senha')

    act(() => {
      fireEvent.changeText(passwordInput, 'password')
    })

    expect(passwordInput.props.value).toBe('password')
  })
})
