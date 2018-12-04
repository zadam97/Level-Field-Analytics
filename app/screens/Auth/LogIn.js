import React, { Component } from 'react';
import {StatusBar, StyleSheet, SafeAreaView, AsyncStorage, View, Button, Dimensions} from 'react-native';
import Color from '../../components/color';
import FirebaseLogin from "../../FirebaseLogin";
import wallpaper1 from "../../assets/images/Football2.jpg";
import wallpaper2 from "../../assets/images/RW.jpg";
import wallpaper3 from "../../assets/images/AB.jpg";

const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;
      

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollEnabled: true };
  }

  render() {

    return (
          <View>
            <StatusBar
            backgroundColor={Color.Black} 
            barStyle="light-content"
            />
            <FirebaseLogin  
            //login={//Something Here} 
            background={wallpaper3}
            mainApp={() => {this.props.navigation.navigate('App')}}            
            />
          </View>          
            );
        }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});