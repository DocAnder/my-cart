
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { Basket } from './src/screens/basket';
import { cesta } from './src/mocks/cesta'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'; 

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fontCarregada){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Basket {...cesta}/>
    </SafeAreaView>
  );
}


