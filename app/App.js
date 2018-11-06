import React, {Component} from 'react';
import {Platform, StyleSheet, Text,ScrollView, View} from 'react-native';
import {Tabs,Nav} from './config/navigation';
import Header from './components/Header';
import Color from './components/color';
//import App from '../index';
//export default App;


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.navtab}>
          <Nav/>
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    //height: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navtab: {
    flex: 1,
    //marginBottom: 5,
    //height: 400,
  },
});

/*

*/