import React, { Component } from 'react';
import {Alert, StatusBar, SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View, Dimensions, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Header from '../../components/Header';
import Color from '../../components/color';
import User from '../../assets/images/user.png'
import firebase from "firebase";
import LinearGradient from 'react-native-linear-gradient';
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
      
           <View style={styles.container}>
              
           <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[Color.RedCard, Color.RedCard]}>
           
           <View style={{height: 30}}/>


           <Text style={styles.profile}>
             Profile
           </Text>

           <Image source={User} style={{height: 50, width: 50, alignSelf: 'center', marginBottom: 10}} />
            

           <Text style={styles.name}>
             {this.state.displayName}
           </Text>

           <Text style={styles.email}>
             {this.state.email}
           </Text>

           <Button buttonStyle={styles.button} backgroundColor='transparent' outline = {true} fontSize={16} title='Log Out' onPress={this._logout} />

            </LinearGradient>
            
                <LinearGradient style={{flex: 1}} start={{x: .25, y: 0}} end={{x: .75, y: 1}} colors={[Color.BlackX, Color.BlackXX]}>

                <Text style={styles.bests}>
                Personal Bests
                </Text>
                  <View style={{flex: 1, justifyContent: 'space-around', flexDirection:'row', alignItems: 'center'}}>

                  
                  <LinearGradient style={{width: 150, height: 150, borderRadius: 15, alignItems: 'center'}} colors={[Color.RedCard, Color.RedCard]}>

                      <View style={{borderRadius: 15, width: 100, height: 100}}>
                      <Text style={styles.cardText}>
                      Max Accel
                      </Text>
                      <Text style={styles.stat}>
                      20
                      </Text>
                      </View>

                  </LinearGradient>

                  <LinearGradient style={{width: 150, height: 150, borderRadius: 15, alignItems: 'center'}} colors={[Color.RedCard, Color.RedCard]}>

                      <View style={{borderRadius: 15, width: 100, height: 100}}>
                      <Text style={styles.cardText}>
                      Top Speed
                      </Text>
                      <Text style={styles.stat}>
                      19
                      </Text>
                      </View>

                  </LinearGradient>
                  
                  </View>
              
                </LinearGradient>


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
    //justifyContent: 'flex-start',
  },
  name: {
    fontSize: 24,
    marginTop: 20,
    fontFamily: 'Avenir-heavy',
    textAlign: 'center',
    color: 'white'
  },
  profile: {
    marginBottom: 40,
    fontSize: 24,
    fontFamily: 'Avenir-medium',
    textAlign: 'center',
    marginTop: 20,

    color: Color.White
  },
  bests: {
    marginBottom: 10,
    fontSize: 30,
    fontFamily: 'Avenir-heavy',
    textAlign: 'center',
    marginTop: 15,

    color: Color.White
  },
  cardText: {
    fontSize: 20,
    fontFamily: 'Avenir-medium',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,

    color: Color.White
  },
  stat: {
    fontSize: 26,
    fontFamily: 'Avenir-medium',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,

    color: Color.White
  },
  email: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Avenir-book',
    textAlign: 'center',
    color: 'white'
  },
  stretch: {
    left: 50,
    top: 500,
    width: 1200,
    height: 940,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: Color.White,
    width: 175,
    height: 45,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 75,
    alignSelf: 'center',
  },
  text: {
    color: 'blue',
    fontWeight: '700',
    paddingVertical: 3,
    fontSize: 20,
  },
});