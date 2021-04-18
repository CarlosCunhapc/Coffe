import React, {useState, useEffect} from 'react';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Curiosities from './curiosities';
import Recipes from './recipes';
import {
SafeAreaView,
View,
Text,
KeyboardAvoidingView,
TextInput,
TouchableOpacity,
Modal,
TabBarIOS,
} from 'react-native';
import { css } from '../../assets/css/cssVisitor';

export default function HomeVisitor() {
  
  //const Tab = createMaterialBottomTabNavigator();
  const Tab = createMaterialTopTabNavigator();
  const [name, setName] = useState('Visitante');
  const [visible, setVisible] = useState(true);

    return (
      // <SafeAreaView style={css.container}>
      //   <Modal
      //   animationType='slide'
      //   visible={visible}
      //   >
      //     <KeyboardAvoidingView style={css.containerName}>
      //     <Text style={css.text}>Como gostaria de ser chamado?</Text>
      //     <TextInput 
      //     style={css.input}
      //     onChangeText={text=>setName(text)}
      //     />
      //     <TouchableOpacity 
      //       style={css.btnEntrar}
      //       onPress={()=>setVisible(false)}
      //       >
      //       <Text style={css.btnText}>Entrar</Text>
      //       </TouchableOpacity>
      //     </KeyboardAvoidingView>
      //   </Modal>
      //   </SafeAreaView> ,
      <Tab.Navigator initialRouteName={'Recipes'} >
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Curiosities" component={Curiosities} />
      </Tab.Navigator>
        /* <View style={css.containerConteudo}>
          <Text>Bem vindo {name}</Text>
        </View> */
      //     
    );
  }