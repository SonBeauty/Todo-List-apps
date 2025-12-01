import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>abc</Text>
      <Text style={styles.title}>Welcome to my apps</Text>
      <Button title="Press Me" onPress={() => Alert.alert('Button Pressed!')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default App;
