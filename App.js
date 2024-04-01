import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Dimensions} from 'react-native';
import BottomNavigation from './Components/BottomNavigation';
import ScrollVideo from './Components/ScrollVideo';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <>
      <HomeScreen />
      <BottomNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    justifyContent: 'center', // Espacer les éléments verticalement
  },
});

