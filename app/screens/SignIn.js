import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, AsyncStorage, View, Button, Dimensions} from 'react-native';
import Color from '../components/color';
const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;
      

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollEnabled: true };
  }
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {

    return (
            <View style={styles.container}>
                 <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
            );
        }

_signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
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