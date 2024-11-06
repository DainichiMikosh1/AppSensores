import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, SafeAreaView, Text } from 'react-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';
 
import LevelIndicator from '../components/Nivel';
import StepCounter from '../components/Pasos'; 

const HomePage = () => {
  const [steps, setSteps] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [roll, setRoll] = useState(0);

  useEffect(() => {
    // Configurar sensores
    Accelerometer.setUpdateInterval(100);
    Gyroscope.setUpdateInterval(100);

    let previousAcceleration = { x: 0, y: 0, z: 0 };
    const umbral = 1.8;

    const accelSubscription = Accelerometer.addListener(({ x, y, z }) => {
      // Contador de pasos
      const totalAcceleration = Math.sqrt(x * x + y * y + z * z);
      const totalPreviousAcceleration = Math.sqrt(
        previousAcceleration.x ** 2 +
        previousAcceleration.y ** 2 +
        previousAcceleration.z ** 2
      );
      const delta = totalAcceleration - totalPreviousAcceleration;

      if (delta > umbral) {
        setSteps((prevSteps) => prevSteps + 1);
      }
      previousAcceleration = { x, y, z };

      // Calcular pitch y roll iniciales usando acelerómetro
      const pitchAngle =
        (Math.atan2(x, Math.sqrt(y * y + z * z)) * 180) / Math.PI;
      const rollAngle = (Math.atan2(y, z) * 180) / Math.PI;

      setPitch((prevPitch) => (prevPitch + pitchAngle) / 2); // Suavizado
      setRoll((prevRoll) => (prevRoll + rollAngle) / 2); // Suavizado
    });

    const gyroSubscription = Gyroscope.addListener(({ x, y }) => {
      // Ajustar finamente pitch y roll con el giroscopio
      setPitch((prevPitch) => prevPitch + x * 0.5); // Ajuste del eje x
      setRoll((prevRoll) => prevRoll + y * 0.5); // Ajuste del eje y
    });

    return () => {
      accelSubscription && accelSubscription.remove();
      gyroSubscription && gyroSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../imagenes/imagen.jpg')} style={styles.image} />
      <Text style={styles.title}>Contador de Pasos</Text>
      <StepCounter steps={steps} />
      <LevelIndicator pitch={pitch} roll={roll} />
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