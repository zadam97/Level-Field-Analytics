import React, { Component } from 'react';
import {StyleSheet, AsyncStorage, View, Button, Dimensions} from 'react-native';
import Color from '../../components/color';
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
                 <Button title="OnBoarding" onPress={() => {this.props.navigation.navigate('SignIn')}} />
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
  }
});