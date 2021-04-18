import React, {useState, useEffect} from 'react';
import {css} from '../../assets/css/cssHome';
import {
View,
Text,
Button,
Animated,
TouchableOpacity,
KeyboardAvoidingView,
TextInput,
} from 'react-native';

export default function Home(props) {
    
    const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
    const [name, setName] = useState('Visitante');
    const [display, setDisplay] = useState('none');

    //Animação da tela
    useEffect(()=> {
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true,
      }).start();

    }, []);

    return (
      <Animated.View style={[
        css.container,
        {
          transform: [
            { translateY: offset.y}
          ]
        }
        ]}>
        <TouchableOpacity 
          style={css.btn} 
          onPress={()=>props.navigation.navigate('Login')}
        >
          <Text style={css.text}>Realizar Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={css.btn} 
          onPress={()=>props.navigation.navigate('HomeVisitor')}
          //onPress={()=>setDisplay('flex')}
        >
          <Text style={css.text}>Acesar sem logar</Text>
        </TouchableOpacity>

        {/* <KeyboardAvoidingView style={css.containerName(display)}>
          <TextInput 
            style={css.input}
            onChangeText={text=>setName(text)}
          />
          <TouchableOpacity 
            style={css.btn}
            onPress={()=>props.navigation.navigate('HomeVisitor')}
          >
            <Text style={css.text}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView> */}
        
      </Animated.View>
    );
  }