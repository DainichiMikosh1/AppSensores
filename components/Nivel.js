import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const LevelIndicator = ({ pitch, roll }) => {
  // Limitar el rango de inclinación para evitar desplazamientos excesivos
  const maxTilt = 90; // grados máximos de inclinación visualizados
  const offsetY = (roll / maxTilt) * 40; // Ajusta 40 para controlar el movimiento horizontal
  const offsetX = (pitch / maxTilt) * 40; // Ajusta 40 para controlar el movimiento vertical

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
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
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