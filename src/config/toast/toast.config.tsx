import {JSX} from 'react'
import {
  BaseToastProps,
  ErrorToast,
  SuccessToast,
} from 'react-native-toast-message'
import styles from './styles'

export const TOAST_CONFIG = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <SuccessToast {...props} style={styles.successContainer} />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast {...props} style={styles.errorContainer} />
  ),
}
