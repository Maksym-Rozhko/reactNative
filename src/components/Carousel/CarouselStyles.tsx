import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 70,
  },
  imageWrapper: {
    margin: 20,
  },
  image: {
    width: screenWidth - 40,
    height: screenHeight - 40,
    maxWidth: '100%',
    resizeMode: 'contain',
  },
});

export default styles;