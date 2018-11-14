import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import firebase from "firebase";
var config = {
    apiKey: "AIzaSyB2inbzuH_x5xevuC8ZxYWw4vfrmqfgE6M",
    authDomain: "level-field.firebaseapp.com",
    databaseURL: "https://level-field.firebaseio.com",
    projectId: "level-field",
    storageBucket: "level-field.appspot.com",
    messagingSenderId: "806202871591"
  };
  //firebase.initializeApp(config);

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }
componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
}
    


  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});