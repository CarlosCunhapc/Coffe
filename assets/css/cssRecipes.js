import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
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
  creator: {
    fontSize: 18,
    fontFamily: 'sans-serif-thin',
  },
  creatorName: {
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    textAlign: 'justify',
  },
  recipeFixo: {
    fontSize: 21,
    textAlign: 'justify',
    textDecorationLine: 'underline',
  },
  recipe: {
    fontSize: 19,
    textAlign: 'justify',
  },
  noteFixo: {
    fontSize: 18,
    textAlign: 'justify',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  note: {
    fontSize: 18,
    textAlign: 'justify',
    fontStyle: 'italic',
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
