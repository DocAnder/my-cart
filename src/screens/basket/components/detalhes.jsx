import { Image, StyleSheet, View } from "react-native"
import { Texto } from "../../components/text/Texto"

import logo from '../../../../assets/logo.png'

const Detalhes = () => {
    return (
        <>
            <Texto style={style.nome}>Cesta de Verduras</Texto>
            <View style={style.containerImg}>
                <Image source={logo} style={style.logo}/>
                <Texto style={style.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={style.descricao}>
                Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
            </Texto>
            <Texto style={style.preco}>R$40.00</Texto>
        </>
    )
}

const style = StyleSheet.create({
    nome:{
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight:"bold"
    },

    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        paddingBottom: 5,
        paddingLeft: 15,
        alignSelf: "center",
        fontFamily: "MontserratRegular"
    },

    descricao:{
        color: "#A3A3A3",
        fontSize:14,
        lineHeight: 15,        
        paddingBottom: 5
    },

    preco:{
        fontWeight:"bold",
        fontSize: 20
    },

    containerImg:{ 
        flexDirection: "row",
        paddingVertical: 12,
    },

    logo:{
        width: 32,
        height: 32,
        marginLeft: 10,
        alignSelf: "center"
    }
})


export { Detalhes }