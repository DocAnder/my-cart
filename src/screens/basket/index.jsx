import { Image, Dimensions, StyleSheet, Text, View } from "react-native"


import { Topo } from "./components/topo";
import { Detalhes } from "./components/detalhes";

const width = Dimensions.get('screen').width;

const Basket = () => {
    return(
        <>
        <Topo />
            
        <View style={style.container}>
            <Detalhes />
        </View> 
        </>
    )
}   


export {Basket}


const style = StyleSheet.create({

    container:{
        paddingHorizontal:8,
        paddingVertical:16
    },  

})