import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View } 
from 'react-native';
import ClickButton from './components/Button';
import NameInput from './components/NameInput';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);
  return (
    <View style={styles.container}>
      <NameInput />
      <ClickButton hej='min prop' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});