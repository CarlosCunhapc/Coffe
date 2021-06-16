import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '8%',
    paddingBottom: '2%',
    backgroundColor: '#FFE4B5',
  },
  containerLista: {
    height:'100%',
  },
  containerCriar: {
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    fontFamily: 'serif',
    textAlign: 'left',
    textDecorationLine: 'underline',
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
    padding: 20,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 14,
  },
  fabNew: {
    position: 'absolute',
    margin: 10,
    right: 3,
    bottom: 3,
  },
  fabRefresh: {
    position: 'absolute',
    margin: 10,
    right: 3,
    bottom: 70,
  },
  fabEdit: {
    position: 'absolute',
    margin: 10,
    right: 70,
    bottom: 3,

  },
});
export { css };
