//uma função retorna valores, essa vai retornar uma interface(usuário vai ver)
import {View, Text, Image, Button}  from "react-native";
import {style} from "../components/comp1.style";
import { StatusBar } from 'expo-status-bar';


//defaul = unica função que retorna o helloworld
export default function Perfil()
{
    return(
        <View >
            <Image source={require('../ProjetoMobile/assets/fotoperfil.jpg')} style={style.image}></Image>
            <Text style={style.text}>Gatinho nerd</Text>
            <Text style={style.text}>Usuário ativo.</Text>
            <Button title='Confirmar' onPress={() => alert('Bem-Vindo!!!')}></Button>
        </View>
    )
}




