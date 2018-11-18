import React, { Component } from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import {Button} from 'react-native-elements';
import { VictoryZoomContainer, VictoryBrushContainer, VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryStack } from "victory-native";
import Header from '../../components/Header';
import Color from '../../components/color';
import User from '../../assets/images/user.jpg'
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
const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;


export default class Settings extends Component {

  constructor() {
    super();
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,

    };
  }

      
  render() {
    return (
        <View style={{flex: 1}}>
          <Header/>
          <View style={styles.container}>
            <View style={{marginLeft: 10, flexDirection: 'row'}}>
              <Image source={User} style={{width: 60, height: 60, margin: 20}}/>
              <View style={{marginLeft: 10}}>
                <Text style={styles.name}>{this.state.displayName}</Text>
                <Text style={styles.email}>{this.state.email}</Text>
              </View>
            </View>
            <Button buttonStyle={styles.button} title='Log Out' onPress={this._logout} />
            <View style={{height: 600, marginTop: 20, marginVertical: 10, backgroundColor: Color.LightGrey}}/>
           </View>
      </View>        
    );
  }
  _logout(){
    firebase.auth().signOut().then(function() {
        Alert.alert("Signed-Out");
    }, function(error) {
        Alert.alert("Sign-Out Unsuccsessful");
    });
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 20,
  },
  email: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    color: 'grey'
  },
  stretch: {
    left: 50,
    top: 500,
    width: 1200,
    height: 940,
  },
  button: {
    backgroundColor: Color.Blue,
    width: 250,
    height: 45,
    borderRadius: 8,
    margin: 20,
    alignSelf: 'center'
  },
  text: {
    color: 'blue',
    fontWeight: '700',
    paddingVertical: 3,
    fontSize: 20,
  },
});