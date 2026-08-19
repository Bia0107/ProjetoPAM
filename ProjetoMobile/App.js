// o jsx é um html, só que escrito em js 
// importando as coisas 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

// a View é tipo a div, o que o usuário vai ver.
export default function App() {
  // retorna algo
  return (
    //interface *chamando o style do container
    <View style={styles.container}>
      <Text style={styles.container}>Primeiro app!</Text>
      <Image source={require('../ProjetoMobile/assets/img1.jpg')} style={{width: 100, height: 150,}}></Image>
      <Button title='Entrar' onPress={() => alert('Botão pressionado!')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

// um tipo de estilização, como o css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: '20',
    fontWeight: 'bold',
  },
});

// comando pra criar o projeto: npx create-expo-app ProjetoMobile --template blank 
// comando pra caso dê erro: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// comando pra vizualizar o projeto: npx expo start *precisa estar na mesma net pra ver o app pelo celular