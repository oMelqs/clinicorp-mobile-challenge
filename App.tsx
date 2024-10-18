import {Routes} from '@/routes'
import {CombinedDarkTheme} from '@/styles/theme'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {PaperProvider} from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <StatusBar style="light" />
      <Routes />
    </PaperProvider>
  )
}
