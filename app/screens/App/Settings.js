import React, { Component } from 'react';
import {Alert, StyleSheet, Button, Text, ScrollView, View, Dimensions} from 'react-native';
import { VictoryZoomContainer, VictoryBrushContainer, VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryStack } from "victory-native";
import Header from '../../components/Header';
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
    };
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }
      
  render() {
    return (
        <View>
          <Header/>
          <Text style={styles.title}>{this.state.displayName}</Text>

          


        <Button title="Sign me out" onPress={this._logout} />

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
    //justifyContent: 'center',
   //x alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    height: 100,
  },
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
  },
  stretch: {
    left: 50,
    top: 500,
    width: 1200,
    height: 940,
  }
});