import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
  editBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    display: 'flex',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'grey',
    color: 'white',
    width: 100,
    borderRadius: 8,
  },
  editBtnText: {
    color: 'white',
  },
  input: {
    marginVertical: 16,
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default styles;
