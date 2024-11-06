# Contador de Pasos y Nivel de Inclinación 📱

Una aplicación móvil que utiliza los sensores integrados de los dispositivos para ofrecer un **contador de pasos** y un **nivel de inclinación**. Es una herramienta práctica para monitorear la actividad física y para tareas cotidianas como nivelar superficies.

---

## 🚀 Funcionalidades

| Funcionalidad          | Descripción                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Contador de Pasos**   | Utiliza el acelerómetro para detectar pasos basándose en el movimiento del dispositivo. |
| **Nivel de Inclinación**| Muestra un nivel dinámico que indica si el dispositivo está plano o inclinado. Combina datos del acelerómetro y giroscopio para mayor precisión. |
| **Uso de Sensores**     | Aprovecha el acelerómetro y giroscopio para ofrecer datos en tiempo real.  |

---

## 🛠️ Tecnologías Usadas

- **React Native**: Framework principal para el desarrollo de la aplicación.
- **Expo**: Manejo de sensores y fácil despliegue.
- **expo-sensors**: Biblioteca para acceder al acelerómetro y giroscopio.

---

## 📂 Estructura del Proyecto

├── /components
│   ├── Nivel.js          # Componente para el nivel de inclinación
│   ├── Pasos.js          # Componente para mostrar los pasos contados
├── /imagenes             # Carpeta para las imágenes utilizadas en la app
├── /screens
├── /screens/HomePage.js           # Pantalla principal que combina las funcionalidades
├── App.js                # Entrada principal de la aplicación

🔑 Código Destacado
Contador de Pasos
Detecta pasos usando el acelerómetro y un umbral predefinido:

const accelSubscription = Accelerometer.addListener(({ x, y, z }) => {
  const totalAcceleration = Math.sqrt(x * x + y * y + z * z);
  const delta = totalAcceleration - Math.sqrt(
    previousAcceleration.x ** 2 +
    previousAcceleration.y ** 2 +
    previousAcceleration.z ** 2
  );

  if (delta > threshold) {
    setSteps((prevSteps) => prevSteps + 1);
  }
  previousAcceleration = { x, y, z };
});
Nivel de Inclinación
Calcula pitch y roll combinando acelerómetro y giroscopio:

Accelerometer.addListener(({ x, y, z }) => {
  const pitchAngle = (Math.atan2(x, Math.sqrt(y * y + z * z)) * 180) / Math.PI;
  const rollAngle = (Math.atan2(y, z) * 180) / Math.PI;

  setPitch((prevPitch) => (prevPitch + pitchAngle) / 2); // Suavizado
  setRoll((prevRoll) => (prevRoll + rollAngle) / 2); // Suavizado
});

Gyroscope.addListener(({ x, y }) => {
  setPitch((prevPitch) => prevPitch + x * 0.5);
  setRoll((prevRoll) => prevRoll + y * 0.5);
});

📸 Captura de Pantalla

![image](https://github.com/user-attachments/assets/03ba4630-2253-43a1-b0f6-c3a1e1fac233)

🛠️ Cómo Ejecutar el Proyecto
Clona el repositorio.

Instala las dependencias:
npm install

Ejecuta la app:
yarn start
o Escanea el código QR con tu dispositivo móvil para probarla.

🌟 Reflexiones

Desarrollar esta app fue una experiencia emocionante que nos permitió explorar el uso de sensores como el acelerómetro y giroscopio. Al trabajar en funcionalidades como el contador de pasos y el nivel de inclinación, aprendimos cómo interpretar datos de sensores y cómo presentarlos de forma clara y visualmente atractiva.
