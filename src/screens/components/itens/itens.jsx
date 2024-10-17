import { Image, StyleSheet, View } from "react-native"
import { Texto } from "../text/Texto"


const Itens = ({titulo, lista}) => {
    return (
        <>
        <Texto>{ titulo }</Texto>
        {lista.map(({nome, imagem}) => {
            return (                
                <View key={nome} style={style.itens}>
                <Image source={imagem}/>
                <Texto style={style.nome}>{nome}</Texto>
                </View>
            )
        })}
        </>
    )
}

const style = StyleSheet.create({

    itens:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: "center",
        
    },

    nome:{
        marginLeft: 15,
        fontSize: 15
    }


})

export { Itens }