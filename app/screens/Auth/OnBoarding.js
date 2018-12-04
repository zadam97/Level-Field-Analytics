import React, { Component } from 'react';
import {SafeAreaView, Text, Image, StyleSheet, StatusBar, View, Dimensions} from 'react-native';
import Color from '../../components/color';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import C1 from '../../assets/images/Catch1.png';
import Dive from '../../assets/images/Dive.png';
import C2 from '../../assets/images/Catch2.png';

import {Button} from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';

//import Dimensions from 'Dimensions';

const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;
      

export default class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollEnabled: true };
  }
  
  
  // Don't Need this
  static navigationOptions = {
    title: 'Onboarding',
    headerStyle: {
        backgroundColor: 'white',
      },
  };
///

  render() {

    return (
    
      <Onboarding
      onDone={() => this.props.navigation.navigate('LogIn')}
      showSkip={false}
      pages={[
        {
          backgroundColor: Color.Green,
          image: <Image source={C1} style={{width:300, height:250}}/>,
          title: 'Hey',
          subtitle: 'Welcome to Level Field',
        },
        {
          backgroundColor: Color.LightRed,
          image: <Image source={Dive} style={{marginRight: 80, width:375, height:250}}/>,
          title: 'Track Your Stats',
          subtitle: 'You can see your acceleration, top speed and more',
        },
        {
          backgroundColor: Color.Blue,
          image: <Image source={C2} style={{width:300, height:400}} />,
          title: 'See Your Progress',
          subtitle: 'Keep track of your improvments over time',
        },
        
      ]}
     />
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