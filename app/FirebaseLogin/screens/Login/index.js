import React, { Component } from 'react';
import { Platform, TouchableWithoutFeedback, Alert, Keyboard, StyleSheet, KeyboardAvoidingView, View, TouchableOpacity, Text, Image, } from 'react-native';
import InputField from "../../components/InputField";
import {w, h, totalSize} from '../../api/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import GetStarted from './GetStarted';
import Firebase from '../../api/Firebase';
import Color from '../../../components/color';
import DismissKeyboard from 'dismissKeyboard';
import KeyboardSpacer from 'react-native-keyboard-spacer';


const companyLogo = require('../../assets/companylogo.png');
const email = require('../../assets/email.png');
const password = require('../../assets/password.png');

export default class Login extends Component {

  state = {
    isEmailCorrect: false,
    isPasswordCorrect: false,
    isLogin: false,
  };

  getStarted = () => {
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();

    this.setState({
      isEmailCorrect: email == '',
      isPasswordCorrect: password == '',
    }, () => {
      if(email !== '' && password !== ''){
        this.loginToFireBase(email, password);
      } else {
        Alert.alert('Fill up all fields')
      }
    });
  };

  changeInputFocus = name => () => {
    if (name == 'Email') {
      this.setState({ isEmailCorrect: this.email.getInputValue() == '' });
      this.password.input.focus();
    } else {
      this.setState({ isPasswordCorrect: this.password.getInputValue() == '' });
    }
  };

  loginToFireBase = (email, password) => {
    this.setState({ isLogin: true });
    Firebase.userLogin(email, password)
      .then(user => {
        if(user) this.props.success(user);
        this.setState({ isLogin: false });
      });
  };

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    //REdux
  }


  _keyboardDidHide () {
    //IMPLEMENT REDUX
  }

  render() {
    if(Platform.OS == 'ios'){
      
    
    return (
      <TouchableWithoutFeedback onPress={() =>{DismissKeyboard()}}>
 
      <View style={styles.container}>          
          <LinearTextGradient
            style={styles.logoText}
            locations={[0, 1]}
            colors={[Color.White, Color.White]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >Level Field</LinearTextGradient>

        <KeyboardAvoidingView
        enabled={Platform.OS === 'ios' ? true : false}
        behavior='position'
        keyboardVerticalOffset={-w(35)}
        style={styles.keyboardContainer}
        
      >
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          style={styles.email}
          error={this.state.isEmailCorrect}
          focus={this.changeInputFocus}
          ref={ref => this.email = ref}
          icon={email}
        />
        <InputField
          placeholder="Password"
          returnKeyType="done"
          secureTextEntry={true}
          blurOnSubmit={true}
          error={this.state.isPasswordCorrect}
          ref={ref => this.password = ref}
          focus={this.changeInputFocus}
          icon={password}
        />
        <GetStarted
          style={styles.Login}
          click={this.getStarted}
          isLogin={this.state.isLogin}
        />
        </KeyboardAvoidingView>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={this.props.change('register')} style={styles.touchable} activeOpacity={0.6}>
            <Text style={styles.createAccount}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.change('forgot')} style={styles.touchable} activeOpacity={0.6}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
    } else {
      return (
        //Android
        <TouchableWithoutFeedback onPress={() =>{DismissKeyboard()}}>
   
        <View style={styles.container}>          
            <LinearTextGradient
              style={styles.logoTextAndroid}
              locations={[0, 1]}
              colors={[Color.White, Color.White]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >Level Field</LinearTextGradient>
          
          <InputField
            placeholder="Email"
            keyboardType="email-address"
            style={styles.email}
            error={this.state.isEmailCorrect}
            focus={this.changeInputFocus}
            ref={ref => this.email = ref}
            icon={email}
          />
          <InputField
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
            blurOnSubmit={true}
            error={this.state.isPasswordCorrect}
            ref={ref => this.password = ref}
            focus={this.changeInputFocus}
            icon={password}
          />
          <GetStarted
            style={styles.Login}
            click={this.getStarted}
            isLogin={this.state.isLogin}
          />
          <View style={styles.textContainerAndroid}>
            <TouchableOpacity onPress={this.props.change('register')} style={styles.touchable} activeOpacity={0.6}>
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.change('forgot')} style={styles.touchable} activeOpacity={0.6}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  keyboardContainer: {
    flex: 1,
    alignItems: 'center',
    //width: '100%',
    height: '100%',
  },
  icon: {
    width: w(70),
    height: h(30),
    marginTop: h(10),
    marginBottom: h(7),
  },
  textContainer: {
    width: w(100),
    flexDirection: 'row',
    //marginTop: h(18),
    marginBottom: h(8),

  },
  textContainerAndroid: {
    width: w(100),
    flexDirection: 'row',
    marginTop: h(28),
    marginBottom: h(8),

  },
  email: {
    marginBottom: h(4.5),
  },
  touchable: {
    flex: 1,
  },
  createAccount: {
    color:'#ffffffEE',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600',
  },
  forgotPassword: {
    color:'#ffffffEE',
    textAlign: 'center',
    fontSize: totalSize(2),
    fontWeight: '600',
  },
  logoText: {
    fontSize: 45,
    fontWeight: "800",
    color: Color.White,
    marginTop: h(12),
    marginBottom: h(18),
    textAlign: 'center',
  },
  logoTextAndroid: {
    fontSize: 45,
    fontWeight: "800",
    color: Color.White,
    marginTop: h(12),
    marginBottom: h(12),
    textAlign: 'center',
  },
  Login: {
    flex: 1,
    alignItems: 'center',
    width: '85%',
  },
});
