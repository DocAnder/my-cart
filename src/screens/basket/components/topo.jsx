import { Image, StyleSheet, Dimensions, Text } from "react-native"

import img2 from '../../../../assets/topo.png'
import { Texto } from "../../components/text/Texto";

const width = Dimensions.get('screen').width;

const Topo = ({ titulo }) => {
    return (
        <>
            <Image source={img2} style={style.topo}/>
            <Texto style={style.titulo}>{ titulo }</Texto>            
        </>
    )
}

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
})



export {Topo}