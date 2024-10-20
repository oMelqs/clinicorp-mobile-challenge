import {CombinedLightTheme} from '@/styles/theme'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: CombinedLightTheme.colors.surface,
    borderLeftColor: 'green',
  },
  errorContainer: {
    backgroundColor: CombinedLightTheme.colors.surface,
    borderLeftColor: CombinedLightTheme.colors.error,
  },
})

export default styles
