# Clinicorp Mobile Challenge

Welcome to the Clinicorp Mobile Challenge project! This project is a mobile application built with React Native and Expo, designed to manage tasks efficiently. Below, you'll find a detailed description of the project, the important libraries used, and instructions on how to run the project.

## Project Description

The Clinicorp Mobile Challenge is a task management application that allows users to create, update, and manage tasks. The app is built using modern technologies and libraries to ensure a smooth and efficient user experience.

## Important Libraries

### Authentication

- **clerk**: The library that abstracts google login.

### React Native

- **react-native**: The core library for building mobile applications using React.
- **react-native-paper**: A library that provides a collection of customizable and easy-to-use UI components.
- **react-native-vector-icons**: A library that provides a wide range of customizable icons.

### Navigation

- **@react-navigation/native**: The core library for navigation in React Native apps.
- **@react-navigation/native-stack**: A library for stack-based navigation.

### Expo

- **expo**: The core library for Expo, which simplifies the development and deployment of React Native apps.
- **expo-image-picker**: A library for picking images from the device's gallery or camera.
- **expo-status-bar**: A library for controlling the status bar appearance.

### Firebase

- **firebase**: A library for integrating Firebase services, such as authentication and database, into the app.

### Testing

- **jest**: A testing framework for JavaScript.
- **jest-expo**: A Jest preset for testing Expo apps.
- **@testing-library/react-native**: A library for testing React Native components.
- **@testing-library/jest-native**: A library for extending Jest matchers to test React Native components.

### Toast Notifications

- **react-native-toast-message**: A library for displaying toast notifications.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- Expo CLI installed globally. You can install it using the following command:
  ```sh
  npm install -g expo-cli
  ```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/clinicorp-mobile-challenge.git
   ```
2. Navigate to the project directory:
   ```sh
   cd clinicorp-mobile-challenge
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Project

1. Start the Expo development server:
   ```sh
   npm start
   ```
2. Follow the instructions in the terminal to open the app on an emulator or a physical device using the Expo Go app.

### Running Tests

To run the tests, use the following command:
```sh
npm test
```

## Project Structure

- **src/components**: Contains the React components used in the app.
- **src/screens**: Contains the different screens of the app.
- **src/contexts**: Contains the context providers for state management.
- **src/styles**: Contains the global styles and themes.
- **src/config**: Contains the configuration files for the app.
