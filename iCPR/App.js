import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iCPR</Text>
      <TouchableOpacity><Text style={styles.start}>Start</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
  },
  start: {
    backgroundColor: 'lightgreen',
    color: 'black',
    padding: 5,
    fontSize: 22,
  }
});
