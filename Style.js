import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    height: 80,
    backgroundColor: 'cornflowerblue',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    lineHeight: 25,
    marginRight: 20,
    marginLeft: 10
  },
  listElem: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingLeft: 5,
    height: 50,
    alignItems: 'center',
  },
  textItem : {
    color: 'white'
  },
  modal : {
    backgroundColor: 'tan',
    position: 'absolute',
    height: 300,
    width: 200,
    left: 30,
    top: 0,
    bottom: 0,
  }
})