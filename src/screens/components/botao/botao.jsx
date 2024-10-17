import { StyleSheet, TouchableOpacity } from "react-native"
import { Texto } from "../text/Texto"


const Botao = ({botao}) => {
    return (
        <>
        <TouchableOpacity style={style.botao}>
            <Texto style={style.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
        </>
    )
}


const style = StyleSheet.create({

    botao:{
        paddingVertical: 12,
        borderRadius: 6,
        backgroundColor: '#A3BFE2'
    },

    textoBotao:{
        alignSelf: "center",
        color: 'black',
        fontWeight:"bold"        
    },

})

export { Botao }