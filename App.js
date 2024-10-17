
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Basket } from './src/screens/basket';
import { cesta } from './src/mocks/cesta'
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {

  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          "MontserratRegular": Montserrat_400Regular,
          "MontserratBold": Montserrat_700Bold,
        })
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e)
      } finally {
        setAppReady(true)
      }
    })()
  }, [])

  const onLayout = useCallback(() => {
    if (appReady) {
      SplashScreen.hideAsync()
    }
  }, [appReady])

  if (!appReady) {
    return null
  }  

  return (
    <SafeAreaView>
      <View onLayout={onLayout}>
        <StatusBar style="auto" />
        <Basket {...cesta}/>
      </View>
    </SafeAreaView>
  );
}


