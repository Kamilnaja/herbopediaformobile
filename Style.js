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
    backgroundColor: 'rgb(221, 177, 10)',
    position: 'absolute',
    width: 300,
    left: 0,
    top: 80,
    bottom: 0,
    paddingTop: 15,
    paddingLeft: 15,
  }
})