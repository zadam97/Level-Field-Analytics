import React, {Component} from 'react';
import {Platform, StyleSheet, Text,ScrollView, View} from 'react-native';
import {Tabs,Nav} from './config/navigation';
import Header from './components/Header';
import Color from './components/color';

import store from './redux/store';
import { Provider } from 'react-redux';
//import App from '../index';
//export default App;


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.navtab}>
          <Nav/>
      </View>  
      </Provider>      
    );
  }
}

const styles = StyleSheet.create({
  
  navtab: {
    flex: 1,
    //marginBottom: 5,
    //height: 400,
  },
});

/*

*/