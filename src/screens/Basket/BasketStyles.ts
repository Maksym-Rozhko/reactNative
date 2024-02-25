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
  flatlistParent: {
    maxHeight: 700,
  },
  basketTotal: {
    marginTop: 20,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    backgroundColor: 'rgba(0,0,0, .7)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
  },
  basketTotalPriceText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
  },
  basketTotalPrice: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  basketClearBtn: {
    padding: 10,
    backgroundColor: '#BC1B26',
    borderRadius: 10,
  },
  basketClearBtnText: {
    color: '#fff',
    fontSize: 15,
  },
  basketToCheckout: {
    padding: 10,
    backgroundColor: 'rgb(94, 150, 26)',
    borderRadius: 10,
  },
  basketToCheckoutText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;
