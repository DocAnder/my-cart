import { Image, Dimensions, StyleSheet, Text, View } from "react-native"

import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'
import { Texto } from "../components/text/Texto";

const width = Dimensions.get('screen').width;

const Basket = () => {
    return(
        <>
        <Image source={topo} style={style.topo}/>
        <Texto style={style.titulo}>Detalhes da cesta</Texto>
        <View style={style.container}>
            <Texto style={style.nome}>Cesta de Verduras</Texto>
            <View style={style.containerImg}>
                <Image source={logo} style={style.logo}/>
                <Texto style={style.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={style.descricao}>
                Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
            </Texto>
            <Texto style={style.preco}>R$40.00</Texto>
        </View> 
        </>
    )
}   


export {Basket}


const style = StyleSheet.create({

    topo:{
        width: '100%',
        height: 578 / 768 * width,
    },

    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        paddingTop:15,
        color:"white",
        lineHeight:26,
        fontWeight: "bold"
    },

    container:{
        paddingHorizontal:8,
        paddingVertical:16
    },

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