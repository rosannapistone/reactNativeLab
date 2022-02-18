import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ClickButton from './components/Button';
import NameInput from './components/NameInput';
import Greeting from './components/Greeting';
import Message from './components/Message';

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
      {buttonVisible ? 
      <>
      <Message />
      <NameInput setInput={setInputValue} />
      <ClickButton submit='>' onClick={printName}/>
      </>
      :
      <>
      <Greeting value={name}/>
      <Text style={styles.emoji}>🐷</Text>
      </>
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
  },
  emoji: {
    fontSize: 60
  }
});