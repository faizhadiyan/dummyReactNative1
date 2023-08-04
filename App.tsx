import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Imagex from './components/Imagex';
import TextX from './components/TextX';
import FlatListX from './components/FlatListX';
import ButtonX from './components/ButtonX';
import TouchableOpacityX from './components/TouchableOpacityX';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Open up App.tsx to start working on your app! CODED BY FAIZ HADIYAN FIRZA</Text>
        <Text>Hello React Native!</Text>
        <StatusBar style="auto" />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 40 }}>Hello React Native</Text>
        </View>
        <View style={{ flexDirection: 'row', height: 100 }}>
          <View style={{ backgroundColor: 'blue', flex: 3 }} />
          <View style={{ backgroundColor: 'red', flex: 2 }} />
          <View style={{ backgroundColor: 'green', flex: 1 }} />
        </View>
        <Text style={{ fontSize: 30 }}>
          <Text style={{ fontWeight: 'bold' }}>Belajar Progate</Text>
          <Text>Saat ini aku sedang berlajar mengenai text komponen</Text>
          <View>
            <Text>Ayo belajar dengan Guru Domba</Text>
          </View>
        </Text>
        <View style={styles.container}>
          <Text style={styles.title}>React Native - Prograte</Text>
          <Text style={styles.title}>React Native - Prograte</Text>
          <Text style={styles.title}>React Native - Prograte</Text>
        </View>
        <Imagex />
        <TextX />
        {/* <FlatListX /> */}
        <ButtonX />
        <TouchableOpacityX />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  scrollView: {
    // backgroundColor: 'gray',
    marginHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  spacing: {
    height: 500,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
