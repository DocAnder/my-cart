import { Image, Dimensions, StyleSheet, Text, View } from "react-native"

import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'

const width = Dimensions.get('screen').width;

const Basket = () => {
    return(
        <>
        <Image source={topo} style={style.topo}/>
        <Text style={style.titulo}>Peido Violento!</Text>
        <View style={style.container}>
            <Text style={style.nome}>Cesta de Verduras</Text>
            <View style={style.containerImg}>
                <Image source={logo} style={style.logo}/>
                <Text style={style.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={style.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Text>
            <Text style={style.preco}>R$40.00</Text>
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
        fontWeight:"bold",
        lineHeight:26
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
        alignSelf: "center"
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