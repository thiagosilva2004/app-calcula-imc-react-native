import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/componets/title';
import Main from './src/componets/main';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title></Title>
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ee5e5s',
    paddingTop: 80,
  },
});
