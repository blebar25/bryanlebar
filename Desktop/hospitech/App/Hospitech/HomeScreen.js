import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, SafeAreaView, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    onPress1 = () => {
        this.props.navigation.navigate('Connexion')
      };
    onPress2 = () => {
        this.props.navigation.navigate('Inscription')
      };
  render() {
    return (
        <SafeAreaView style={styles.container}>
        <Image source={require('./snack-static/Accueil.png')} 
        style={{ width: 470, height: 330 }}
        />
        <Image source={require('./snack-static/Hospitech-logo.png')} 
        style={{ width: 400, height: 100, margin: 40}}
        />
      <View>
        
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress1}
            >
              <Text>Connexion</Text>
            </TouchableOpacity>
      </View>
            <View>
        

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress2}
            >
              <Text>Inscription</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
    );
  }
}

// ...

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: 10,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#A4BBE8",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
        margin: 10,
      },
  });