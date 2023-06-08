import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Dinho! </Text>
      <Button title='Klik!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'goldenrod',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
