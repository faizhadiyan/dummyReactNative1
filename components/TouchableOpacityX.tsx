import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const MyButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(count + 1);

  const handlePress = () => {
    setIsPressed(true);
    Alert.alert('Button pressed!');
  };

  const handleLongPress = () => {
    setIsPressed(false);
    Alert.alert('Button long pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress} style={[styles.button, isPressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>Press and Hold Me</Text>
      </TouchableOpacity>

      {/* DIFERENT MEANING */}
      <Text>You clicked {count} times</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default MyButton;
