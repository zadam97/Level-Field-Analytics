import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, AsyncStorage, View, Button, Dimensions} from 'react-native';
import Color from '../../components/color';
import LinearGradient from 'react-native-linear-gradient';
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
        backgroundColor: '#f5fcff',
      },
  };

  render() {

    return (

            <View style={styles.container}>
            <LinearGradient colors={[Color.LightRed, Color.DarkRed]} style={styles.gradient}>
              <View style={styles.body}>
              <Button color='white' title="OnBoarding" onPress={() => {this.props.navigation.navigate('LogIn')}} />
              </View>
            </LinearGradient>
            </View>
            );
        }
}
const styles = StyleSheet.create({
  body: {
    //height: 400,
    flex: 1,
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
  gradient: {
    //flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: deviceWidth,
    height: deviceHeight,
  },
});