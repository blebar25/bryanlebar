import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ConnexionScreen from './ConnexionScreen';
import InscriptionScreen from './InscriptionScreen';
import ImagePicker from 'react-native-image-picker'

// npm install --save react-native-gesture-handler react-native-reanimated react-native-screens

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Connexion"
            component={ConnexionScreen}
          />
          <Stack.Screen
            name="Inscription"
            component={InscriptionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}