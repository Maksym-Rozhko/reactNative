import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  screenTitleOrder: {
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
  profile: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    paddingTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 40,
    marginHorizontal: -20,
    marginTop: -40,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  profileTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
    gap: 20,
  },
  profileTabBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgb(94, 150, 26)',
  },
  orderContainer: {
    flexDirection: 'column-reverse',
  },
  order: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(94, 150, 26)',
  },
  orderText: {
    fontSize: 14,
  },
  orderTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 7,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    borderRadius: 7,
  },
  orderStatusText: {
    color: '#fff',
  },
});

export default styles;
