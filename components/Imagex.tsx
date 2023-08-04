import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';

const Imagex = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://progate.com/images/ogp/about.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Imagex;
