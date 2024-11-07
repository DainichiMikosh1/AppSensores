import React from 'react';
import { StyleSheet, Image, SafeAreaView, Text } from 'react-native';

import LevelIndicator from '../components/Nivel';
import StepCounter from '../components/Pasos';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../imagenes/imagen.jpg')} style={styles.image} />
      <Text style={styles.title}>Contador de Pasos</Text>
      <StepCounter />
      <LevelIndicator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default HomePage;