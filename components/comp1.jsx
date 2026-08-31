//uma função retorna valores, essa vai retornar uma interface(usuário vai ver)
import {View, Text, Image, Button}  from "react-native";
import {style} from "./comp1.style"


//defaul = unica função que retorna o helloworld
export default function HelloWorld()
{
    return(
        <View>
            <Text style={style.text}>Primeiro app!</Text>
            <Image source={require('../ProjetoMobile/assets/img1.jpg')} style={{width: 100, height: 150,}}></Image>
            <Button title='Entrar' onPress={() => alert('Botão pressionado!')}></Button>
        </View>
    )
}




