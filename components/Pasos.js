import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepCounter = ({ steps }) => {
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