import { Image, StyleSheet, View } from "react-native"
import { Texto } from "../../components/text/Texto"


const Detalhes = ({ nome, logoFazenda, nomeFazenda, descricao, preco  }) => {
    return (
        <>
            <Texto style={style.nome}> { nome } </Texto>
            <View style={style.containerImg}>
                <Image source={logoFazenda} style={style.logo}/>
                <Texto style={style.nomeFazenda}>{ nomeFazenda }</Texto>
            </View>
            <Texto style={style.descricao}>
            { descricao }
            </Texto>
            <Texto style={style.preco}>{ preco }</Texto>
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
        width: 40,
        height: 40,
        marginLeft: 10,
        alignSelf: "center"
    }
})


export { Detalhes }