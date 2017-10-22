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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
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

  listElemWrapper: {
    borderBottomColor: 'green',
    borderBottomWidth: 1
  },
  
  listElem : {
    flexDirection: 'row',
    display: 'flex',
    paddingLeft: 5,
    minHeight: 50,
    alignItems: 'center',
  },

  listElemMoreInfo : {
    height: 50,
  },
  
  listElemMoreInfoText: {
    color: 'white',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    
    
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
  },
  menuBtn: {
    
  },
  listTitleWrapper: {
    backgroundColor: "rgba(0, 100, 10, 0.4)",
  }
})