import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: '4%',
    marginTop: 40,
  },
  titleContainer: {
    marginBottom: 16,
  },
  emailLabelContainer: {
    marginBottom: 8,
    marginTop: 32,
    paddingHorizontal: 8,
  },
  passwordLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
  },
  input: {
    height: 56,
    marginTop: 4,
    marginBottom: 8,
  },
  rememberPasswordLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    marginTop: 16,
  },
})

export default styles
