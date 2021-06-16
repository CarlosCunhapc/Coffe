import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFE4B5',
  },
  container2: {
    width: '100%',
    paddingLeft: 10,
    alignItems: 'flex-start',
    backgroundColor: '#FFE4B5',
  },
  containerRadio: {
    width: '100%',
    alignItems: 'flex-start',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  containerSlider: {
    width: '100%',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
  },
  containerInputs: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#FFE4B5',
  },
  textQuestion: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  containerBtn: {
    width: '100%',
    alignItems: 'center',
  },
  textQuestion2: {
    fontSize: 20,
  },
  inputs: {
    backgroundColor: '#fff',
    width: '95%',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    marginBottom: 8,
  },
  inputsRecipe: {
    backgroundColor: '#fff',
    width: '95%',
    color: '#222',
    height: 200,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    marginBottom: 8,
    textAlign: 'justify',
  },
  btnSave: {
    backgroundColor: '#35AAFF',
    width: '70%',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
});
export { css };
