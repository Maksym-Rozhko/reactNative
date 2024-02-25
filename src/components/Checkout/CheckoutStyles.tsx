import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
  input: {
    marginVertical: 16,
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  textarea: {
    marginVertical: 16,
    fontSize: 20,
    padding: 10,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
  },
  basketTotal: {
    marginTop: 20,
    padding: 20,
    gap: 10,
    backgroundColor: 'rgba(0,0,0, .7)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
  },
  basketTotalPriceText: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
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
    padding: 15,
    backgroundColor: 'rgb(94, 150, 26)',
    borderRadius: 10,
  },
  basketToCheckoutText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  delivery: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
    backgroundColor: 'rgba(155,155,155, .3)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFEE00',
  },
  deliveryImage: {
    width: 40,
    height: 40,
  },
  deliveryText: {
    color: 'grey',
    fontSize: 14,
    maxWidth: 280,
  },
});

export default styles;
