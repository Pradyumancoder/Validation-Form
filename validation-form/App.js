import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactForm from './ContactForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>VALIDATION FORM</Text>
      <ContactForm/>
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
