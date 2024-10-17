import { Image, Dimensions, StyleSheet, Text, View, ScrollView } from "react-native"


import { Topo } from "./components/topo";
import { Detalhes } from "./components/detalhes";
import { Itens } from "../components/itens/itens";

const width = Dimensions.get('screen').width;

const Basket = ({topo, detalhes, itens}) => {
    return(
        <ScrollView>
        <Topo {...topo}/>            
        <View style={style.container}>
            <Detalhes {...detalhes}/>
            <Itens {...itens}/>
        </View> 
        </ScrollView>
    )
}   


export {Basket}


const style = StyleSheet.create({

    container:{
        paddingHorizontal:8,
        paddingVertical:16
    },  

})