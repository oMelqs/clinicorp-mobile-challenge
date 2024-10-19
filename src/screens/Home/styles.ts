import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 48,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: '4%',
    marginTop: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginBottom: 8,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 700,
    fontSize: 24,
  },
  column: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  columnTitle: {
    marginHorizontal: 24,
    fontSize: 20,
  },
  card: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
  },
  cardTexts: {
    marginRight: 40,
    paddingLeft: 8,
  },
  cardCover: {
    marginTop: -8,
    marginHorizontal: 24,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
  },
})

export default styles
