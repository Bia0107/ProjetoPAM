//uma função retorna valores, essa vai retornar uma interface(usuário vai ver)
import {View, Text, Image, Button}  from "react-native";
import {style} from "../components/comp1.style";
import { StatusBar } from 'expo-status-bar';


//defaul = unica função que retorna o helloworld
export default function Perfil()
{
    return(
        <View >
            <Text style={style.text}>Acesse seu perfil</Text>
            <Image source={require('../ProjetoMobile/assets/fotoperfil.jpg')} style={style.image}></Image>
            <StatusBar style="auto" />
            <Button title='Entrar' onPress={() => alert('Bem-Vindo!!!')}></Button>
        </View>
    )
}




