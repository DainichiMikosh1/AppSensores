import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';

const LevelIndicator = () => {
  const [pitch, setPitch] = useState(0);
  const [roll, setRoll] = useState(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);
    Gyroscope.setUpdateInterval(100);

    const accelSubscription = Accelerometer.addListener(({ x, y, z }) => {
      const pitchAngle = (Math.atan2(x, Math.sqrt(y * y + z * z)) * 180) / Math.PI;
      const rollAngle = (Math.atan2(y, z) * 180) / Math.PI;

      setPitch((prevPitch) => (prevPitch + pitchAngle) / 2);
      setRoll((prevRoll) => (prevRoll + rollAngle) / 2);
    });

    const gyroSubscription = Gyroscope.addListener(({ x, y }) => {
      setPitch((prevPitch) => prevPitch + x * 0.5);
      setRoll((prevRoll) => prevRoll + y * 0.5);
    });

    return () => {
      accelSubscription && accelSubscription.remove();
      gyroSubscription && gyroSubscription.remove();
    };
  }, []);

  const maxTilt = 90;
  const offsetY = (roll / maxTilt) * 40;
  const offsetX = (pitch / maxTilt) * 40;

  return (
    <View style={styles.container}>
      <View style={styles.level}>
        <Image
          source={require('../imagenes/bubble.png')}
          style={[
            styles.bubble,
            {
              transform: [{ translateX: offsetX }, { translateY: offsetY }],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  level: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0a84ff',
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  bubble: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});

export default LevelIndicator;