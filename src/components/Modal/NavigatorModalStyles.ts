import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
  },
  likeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 11,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  flatlistParent: {
    marginTop: 25,
  },
  favoritesClearBtn: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#BC1B26',
    borderRadius: 10,
  },
  favoritesClearBtnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
