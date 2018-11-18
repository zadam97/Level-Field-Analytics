import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TextInput} from 'react-native';
import {w, h, totalSize} from '../api/Dimensions';
import Color from "../../components/color";
const close = require('../assets/close.png');
const closeRed = require('../assets/closeRed.png');
const astrixRed = require('../assets/astrixRed.png');



export default class InputField extends Component {
  state = {
    text: ''
  };
//        <Image style={styles.icon} source={this.props.icon}/>

  getInputValue = () => this.state.text;

  render() {
    return (
      <View style={[styles.container, this.props.style, this.props.error ? styles.containerError : {}]}>
      
      <Image style={styles.icon} source={this.props.icon}/>


        <TextInput
          style={styles.inputText}
          value={this.state.text}
          selectionColor="white"
          autoCapitalize={this.props.autoCapitalize}
          ref={ref => this.input = ref}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          secureTextEntry={this.props.secureTextEntry}
          blurOnSubmit={this.props.blurOnSubmit}
          keyboardType={this.props.keyboardType}
          returnKeyType={this.props.returnKeyType}
          placeholder={this.props.placeholder}
          onSubmitEditing={this.props.focus(this.props.placeholder)}
          placeholderTextColor={Color.LightGrey}
          onChangeText={(text) => this.setState({ text })}
          
        />
        {this.props.error && <Image style={styles.iconError} source={astrixRed}/>}
      </View>
    );
  }
}

InputField.defaultProps = {
  focus: () => {},
  style: {},
  placeholder: '',
  blurOnSubmit: false,
  returnKeyType: 'next',
  error: false,
  keyboardType: null,
  secureTextEntry: false,
  autoCapitalize: "none",
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: (Platform.OS === 'ios' ? h(2.5) : -h(4)),
    width: '85%',
    borderBottomColor: Color.White,
    borderBottomWidth: 1,
    paddingBottom: (Platform.OS === 'ios' ? h(1) : -h(3)),
    opacity: 50

  },
  containerError: {
    //backgroundColor: '#EF9A9A88',
    //borderWidth: 1,
    //boorderColor: Color.LightRed,
    //Add Error Views Here
  },
  inputText: {
    color: Color.White, //This is the actual color not hint
    opacity: 50,
    flex: 1,
    fontSize: totalSize(2.1),
    marginLeft: w(3),
    marginBottom: (Platform.OS === 'ios' ? 0 : -h(0)),
    //backgroundColor: Color.DarkGrey


  },
  icon: {
    marginLeft: w(2),
    width: (Platform.OS === 'ios' ? w(7) : w(9)),
    height: (Platform.OS === 'ios' ? w(7) : w(9)),

  },
  iconError: {
    width: w(6),
    height: w(6),
    marginRight: w(3),
  },
});
