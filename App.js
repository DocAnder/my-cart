
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { Basket } from './src/screens/basket/Basket';

export default function App() {
  return (
    <SafeAreaView>
      <Basket />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


