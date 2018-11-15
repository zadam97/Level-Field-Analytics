import React, { Component } from 'react';
import {SafeAreaView, Text, Image, StyleSheet, AsyncStorage, View, Dimensions} from 'react-native';
import Color from '../../components/color';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import Sketch from '../../assets/images/footballSketch.jpg';
import {Button} from 'react-native-elements';
//import Dimensions from 'Dimensions';

const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;
      

export default class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollEnabled: true };
  }
  static navigationOptions = {
    title: 'Onboarding',
    headerStyle: {
        backgroundColor: 'white',
      },
  };

  render() {

    return (
            <SafeAreaView style={styles.container}>
              <LinearTextGradient
              style={styles.logoText}
              locations={[0, 1]}
              colors={['red', 'blue']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              Level Field
              </LinearTextGradient>  
              <Image source={Sketch} style={{ width: '100%', height: 250, marginBottom: 40}}/>
              <Text style={{marginBottom: 150, fontSize: 20,textAlign: 'center', fontWeight: 'bold'}}>
                Creating a Level Playing Field for All Amateur Athletes
              </Text>
              <Button title="Continue" buttonStyle={{
              backgroundColor: Color.DarkTeal,
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5}}
              onPress={() => {this.props.navigation.navigate('LogIn')}} />
            </SafeAreaView>
            );
        }
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gradient: {
    //flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: deviceWidth,
    height: deviceHeight,
  },
  button: {
    //flex: 1,
    borderColor: Color.Black,
    color: Color.LightRed,
    borderWidth: 1,
    marginTop: 150,
    marginBottom: 30
  },
  logoText: {
    fontSize: 45,
    fontWeight: "800",
    color: Color.BlackX,
    marginTop: 50,
    marginBottom: 60,
    textAlign: 'center',
  },
});