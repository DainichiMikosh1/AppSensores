import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);
    let previousAcceleration = { x: 0, y: 0, z: 0 };
    const threshold = 1.8;

    const accelSubscription = Accelerometer.addListener(({ x, y, z }) => {
      const totalAcceleration = Math.sqrt(x * x + y * y + z * z);
      const totalPreviousAcceleration = Math.sqrt(
        previousAcceleration.x ** 2 +
        previousAcceleration.y ** 2 +
        previousAcceleration.z ** 2
      );

      const delta = totalAcceleration - totalPreviousAcceleration;

      if (delta > threshold) {
        setSteps((prevSteps) => prevSteps + 1);
      }

      previousAcceleration = { x, y, z };
    });

    return () => {
      accelSubscription && accelSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.steps}>{steps}</Text>
      <Text style={styles.label}>Pasos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30,
  },
  steps: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#0a84ff',
  },
  label: {
    fontSize: 24,
    color: '#666',
  },
});

export default StepCounter;