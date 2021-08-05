import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'



class Avatar extends React.Component {

  /*_avatarClicked() {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('L\'utilisateur a annulé')
      }
      else if (response.error) {
        console.log('Erreur : ', response.error)
      }
      else {
        console.log('Photo : ', response.uri )
        let requireSource = { uri: response.uri }
        this.setState({
          avatar: requireSource
        })
      }
    })
  }
  
  constructor(props) {
    super(props)
    this.state = {
      avatar: require('./snack-static/inserer-logo.png')
    }
    // this.setState est appelé dans un callback dans showImagePicker, pensez donc bien à binder la fonction _avatarClicked
    this._avatarClicked = this._avatarClicked.bind(this)
  }*/
  //const [filePath, setFilePath] = useState({});

  chooseFile() {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
       // setFilePath(source);
      }
    });
  }
  


  render() {
    return(
      /*<TouchableOpacity
        style={styles.touchableOpacity}
        onPress={this._avatarClicked}>
          <Image style={styles.avatar} source={this.state.avatar} />
      </TouchableOpacity>*/
            
            <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={chooseFile}>
          <Image style={styles.avatar} source={this.state.avatar} />
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B',
    borderWidth: 2
  }
})

export default Avatar