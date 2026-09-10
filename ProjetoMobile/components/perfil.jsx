//uma função retorna valores, essa vai retornar uma interface(usuário vai ver)
import {View, Text, Image, Button}  from "react-native";
import style from "./perfil.style";


//defaul = unica função que retorna o helloworld
export default function Perfil()
{
    return(
        
        <View >
            <Image source={require('../assets/fotoperfil.jpg')} style={style.image}></Image>
            <Text style={style.text}>Nome: Gatinho nerd</Text>
            <Text style={style.text1}>Status: Usuário ativo</Text>
            <Button style={style.button} title='Confirmar' onPress={() => alert('Bem-Vindo!!!')}></Button>
        </View>
    )
}




