import React, {useState, useEffect} from 'react';
import {
SafeAreaView,
View,
Text,
KeyboardAvoidingView,
TextInput,
TouchableOpacity,
Modal,
} from 'react-native';
import { css } from '../assets/css/cssVisitor';

export default function HomeVisitor() {
    
  const [name, setName] = useState('Visitante');
  const [visible, setVisible] = useState(true);

    return (
      <SafeAreaView style={css.container}>
        <Modal
        animationType='slide'
        visible={visible}
        >
          <KeyboardAvoidingView style={css.containerName}>
          <Text style={css.text}>Como gostaria de ser chamado?</Text>
          <TextInput 
          style={css.input}
          onChangeText={text=>setName(text)}
          />
          <TouchableOpacity 
            style={css.btnEntrar}
            onPress={()=>setVisible(false)}
            >
            <Text style={css.btnText}>Entrar</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </Modal>
        
        
        <View style={css.containerConteudo}>
          <Text>Bem vindo {name}</Text>
        </View>
      </SafeAreaView>      
    );
  }