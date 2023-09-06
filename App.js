import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "red", fontSize: 30}}>ABOUT ME</Text>
      <Text style={{fontWeight: "bold", color: "blue", fontSize: 30}}>Emre Deniz</Text>
      <Text style={{fontWeight: "bold", color: "black", fontSize: 30}}>301371047</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
