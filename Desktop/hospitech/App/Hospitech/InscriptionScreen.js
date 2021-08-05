import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Button } from 'react-native';
import Avatar from './Avatar'
import ImagePicker from 'react-native-image-picker'

//  npm install --save react-native-image-picker  dépendances pour "component device image"
//  react-native link      permet de lier des librairies à nos projets mobiles natifs


export default class InscriptionScreen extends React.Component {
  onPress1 = () => {
    this.props.navigation.navigate('Connexion')
  };
onPress2 = () => {
    this.props.navigation.navigate('Home')
  };


  render() {

    return (
      <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
        <Image source={require('./snack-static/H.png')} 
        style={{ width: 100, height: 80, margin: 40}}
        />
      <View>
      <Text>Inscription :</Text>
        <Text>Nom :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Nom"
        keyboardType="numeric"
      />
        <Text>Prénom :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Prénom"
        keyboardType="numeric"
      />
        <Text>Âge :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Âge"
        keyboardType="numeric"
      />
        <Text>Email :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Email"
        keyboardType="numeric"
      />
        <Text>N° sécurité sociale :</Text>
        <TextInput
        style={styles.input}
        placeholder="  N° sécurité sociale"
        keyboardType="numeric"
      />
              <Text>Ajouter ma mutuelle :</Text>
              <View style={styles.avatar_container}>
          <Avatar/>
        </View>
              <Text>Adresse :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Adresse"
        keyboardType="numeric"
      />
              <Text>Hôpital favoris :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Hôpital favoris"
        keyboardType="numeric"
      />
              <Text>Mot de passe :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Mot de passe"
        keyboardType="numeric"
      />
              <Text>Répéter le mot de passe :</Text>
        <TextInput
        style={styles.input}
        placeholder="  Répéter le mot de passe"
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
      </ScrollView>
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
    scrollView: {
      marginHorizontal: 20,
    },
    avatar_container: {
      alignItems: 'center'
    }
});