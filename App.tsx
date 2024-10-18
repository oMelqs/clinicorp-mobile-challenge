import {Routes} from '@/routes'
import {CombinedLightTheme} from '@/styles/theme'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {PaperProvider} from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider theme={CombinedLightTheme}>
      <StatusBar style="dark" />
      <Routes />
    </PaperProvider>
  )
}
