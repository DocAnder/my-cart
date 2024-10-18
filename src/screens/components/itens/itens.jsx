import { FlatList, Image, StyleSheet, View } from "react-native"
import { Texto } from "../text/Texto"


const Item = ({item : {nome, imagem}}) => (
    <View key={nome} style={style.itens}>
        <Image source={imagem}/>
        <Texto style={style.nome}>{nome}</Texto>
    </View>
);


const Itens = ({titulo, lista}) => {
    return (
        <>
        <Texto>{ titulo }</Texto>
        <FlatList
            data={lista}
            renderItem={({item}) => <Item item={item} />} 
        />
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