import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgb(180, 180, 180)',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'rgb(60, 60, 60)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    position: 'relative',
    maxWidth: 420,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemInfoBottom: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    gap: 20,
  },
  itemProduct: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemImageBox: {
    position: 'relative',
    maxWidth: 100,
  },
  title: {
    fontSize: 28,
    lineHeight: 32,
    color: '#000',
    marginBottom: 10,
  },
  newPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
  },
  oldPrice: {
    fontSize: 20,
    fontWeight: 'normal',
    lineHeight: 24,
    textDecorationLine: 'line-through',
  },
  description: {
    maxWidth: 150,
    marginRight: 'auto',
  },
  likeBox: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  likeImage: {
    width: 20,
    height: 20,
  },
  labelNew: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 32,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
    overflow: 'hidden',
  },
  basketBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    gap: 5,
  },
  basketImage: {
    width: 35,
    height: 35,
  },
  basketText: {
    fontSize: 20,
    lineHeight: 24,
  },
  itemHovered: {
    shadowColor: 'rgb(255, 99, 71)',
    shadowOpacity: 0.76,
  },
});

export default styles;
