import TOAST_CONFIG from '@/config/toast'
import {Routes} from '@/routes'
import {CombinedLightTheme} from '@/styles/theme'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {PaperProvider} from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <PaperProvider theme={CombinedLightTheme}>
      <StatusBar style="dark" />
      <Routes />
      <Toast config={TOAST_CONFIG} />
    </PaperProvider>
  )
}
