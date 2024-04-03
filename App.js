import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Dimensions} from 'react-native';
import BottomNavigation from './Components/BottomNavigation';
import ScrollVideo from './Components/ScrollVideo';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container }>
     <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center' 
  }
});

