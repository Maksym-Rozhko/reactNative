import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    margin: 20,
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    height: 40,
  },
  searchBtn: {
    width: 20,
    height: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  inputSearch: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flex: 14,
  },
  likeImage: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
  },
  filterBtn: {
    display: 'flex',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'grey',
    color: 'white',
    width: 100,
    borderRadius: 8,
  },
  filterBtnText: {
    color: 'white',
  },
  filterTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    marginRight: 10,
  },
  checked: {
    borderColor: 'transparent',
  },
  label: {
    fontSize: 16,
  },
  checkboxBackground: {
    borderRadius: 5,
    width: 20,
    height: 20,
    marginRight: 8,
    zIndex: 1,
  },
});

export default styles;
