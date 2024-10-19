import {CombinedLightTheme} from '@/styles/theme'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: CombinedLightTheme.colors.background,
    padding: '4%',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 48,
    paddingHorizontal: 24,
  },
  modal: {
    margin: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    alignSelf: 'center',
  },
  imageContainer: {
    backgroundColor: '#d4d4d4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 108,
    marginBottom: 16,
    marginTop: 8,
  },
  input: {
    height: 54,
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
})

export default styles
