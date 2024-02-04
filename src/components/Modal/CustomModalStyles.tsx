import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  touchableBackground: {
    backgroundColor: 'rgba(0,0,0, .3)',
  },
  modalView: {
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    padding: 50,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
