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

│   ├── HomePage.js           # Pantalla principal que combina las funcionalidades

├── App.js                # Entrada principal de la aplicación

🔑 Código Destacado

Contador de Pasos

![image](https://github.com/user-attachments/assets/f17d6a82-6ec8-4600-9943-c4df8592df69)


Nivel de Inclinación

![image](https://github.com/user-attachments/assets/e542a65b-f034-4e7c-ae44-0b22f2efcfa3)

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
