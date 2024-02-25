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
});

export default styles;