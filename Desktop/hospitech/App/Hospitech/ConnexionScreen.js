import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, SafeAreaView, Button } from 'react-native';


export default class ConnexionScreen extends React.Component {
  onPress1 = () => {
    this.props.navigation.navigate('Page_1')
  };
onPress2 = () => {
    this.props.navigation.navigate('Home')
  };


  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('./snack-static/H.png')} 
        style={{ width: 100, height: 80, margin: 40}}
        />
      <View>
        <Text>Email :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Email"
        keyboardType="numeric"
      />
        <Text>Mot de passe :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Mot de passe"
        keyboardType="numeric"
      />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress1}
        >
          <Text>Valider</Text>
        </TouchableOpacity>
  </View>
        <View>
    

        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress2}
        >
          <Text>Annuler</Text>
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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
});