/* eslint-disable no-useless-catch */
import * as SecureStore from 'expo-secure-store'

async function getToken(key: string) {
  try {
    return SecureStore.getItem(key)
  } catch (error) {
    throw error
  }
}

async function saveToken(key: string, token: string) {
  try {
    return SecureStore.setItemAsync(key, token)
  } catch (error) {
    throw error
  }
}

export const tokenCache = {getToken, saveToken}
