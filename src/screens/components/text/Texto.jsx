import { StyleSheet, Text } from "react-native"


const Texto = ({ children, style }) => {

    let estiloPadrao = estilo.text;

    if(style?.fontWeight === "bold"){
        estiloPadrao = estilo.textoNegrito;
    } 

    return (
        <Text style={[style, estiloPadrao]}>{ children }</Text>
    )

}


export {Texto}

const estilo = StyleSheet.create({
    text:{
        fontFamily: "MontserratRegular",
    },

    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    },
})