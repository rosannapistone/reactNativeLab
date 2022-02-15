import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ClickButton from './components/Button';
import NameInput from './components/NameInput';
import Greeting from './components/Greeting';

export default function App() { 
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [buttonVisible, isVisible] = useState(true);
  
  const printName = () => {
    setName(inputValue); 
    isVisible(false);
  }  
  
  
  return (
    <View style={styles.container}>
      <Greeting value={name}/>
      {buttonVisible ? 
      <>
      <NameInput setInput={setInputValue} />
      <ClickButton submit='OK!' onClick={printName}/>
      </>
      :
      <Text>🐷</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  }
});