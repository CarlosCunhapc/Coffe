import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '8%',
    paddingBottom: '2%',
    backgroundColor: '#FFE4B5',
  },
  title: {
    fontSize: 32,
    fontFamily: 'serif',
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  recipe: {
    fontSize: 19,
    textAlign: 'justify',
  },
  item: {
    width: '90%',
    padding: 20,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 14,
  },
});
export { css };
