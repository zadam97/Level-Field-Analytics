import React, {Component} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
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
      <View style={{flex: 1, backgroundColor: Color.BlackX}} forceInset={{'top': 'never'}}>
          <Nav/>
      </View>  
      </Provider>      
    );
  }
}

const styles = StyleSheet.create({
  
  navtab: {
    //flex: 1,
    //height: 400,
  },
});

/*

*/