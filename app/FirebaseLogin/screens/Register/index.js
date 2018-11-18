import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {w, h, totalSize} from '../../api/Dimensions';
import InputField from '../../components/InputField';
import Continue from './Continue';
import Firebase from "../../api/Firebase";
import DismissKeyboard from 'dismissKeyboard';
import Color from '../../../components/color';
import store from '../../../redux/store';


const email = require('../../assets/email.png');
const password = require('../../assets/password.png');
const repeat = require('../../assets/repeat.png');
const person = require('../../assets/person.png');

export default class Register extends Component {
  state = {
    isNameCorrect: false,
    isEmailCorrect: false,
    isPasswordCorrect: false,
    isRepeatCorrect: false,
    isCreatingAccount: false,

  };

  createUserAccount = () => {
    const name = this.name.getInputValue();
    const email = this.email.getInputValue();
    const password = this.password.getInputValue();
    const repeat = this.repeat.getInputValue();

    this.setState({
      isNameCorrect: name == '',
      isEmailCorrect: email == '',
      isPasswordCorrect: password == '',
      isRepeatCorrect: repeat == '' || repeat !== password,
    }, () => {
      if(name !== '' && email !== '' && password !== '' && (repeat !== '' && repeat == password)){
        this.createFireBaseAccount(name, email, password);
      } else {
        Alert.alert('Fill up all fields correctly');
      }
    })

  };

  createFireBaseAccount = (name, email, password) => {
    this.setState({ isCreatingAccount: true });
    Firebase.createFirebaseAccount(name, email, password)
      .then(result => {
        if(result) this.goToMainApp();
        this.setState({ isCreatingAccount: false });
      });
  };

  goToMainApp(){
    this.props.mainAppx();
  }

  changeInputFocus = name => () => {
    switch (name) {
      case 'Name':
        this.setState({ isNameCorrect: this.name.getInputValue() == '' });
        this.email.input.focus();
        break;
      case 'Email':
        this.setState({ isEmailCorrect: this.email.getInputValue() == '' });
        this.password.input.focus();
        break;
      case 'Password':
        this.setState({ isPasswordCorrect: this.password.getInputValue() == '',
          isRepeatCorrect: (this.repeat.getInputValue() !== ''
            && this.repeat.getInputValue() !== this.password.getInputValue()) });
        this.repeat.input.focus();
        break;
      default:
        this.setState({ isRepeatCorrect: (this.repeat.getInputValue() == ''
            || this.repeat.getInputValue() !== this.password.getInputValue()) });
    }
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
    store.dispatch({type: 'BLUR'})
  }


  _keyboardDidHide () {
    store.dispatch({type: 'unBLUR'})
  }

  render() {
    if(Platform.OS == 'ios'){

    return(

      <TouchableWithoutFeedback onPress={() =>{DismissKeyboard()}}>

      <View style={styles.container}>
        
        <Text style={styles.create}>Create Account</Text>

        <KeyboardAvoidingView
        enabled={Platform.OS === 'ios' ? true : false}
        behavior="position"
        keyboardVerticalOffset={-h(5)}
        style={styles.keyboardContainer}
        
      >

        <InputField
          placeholder="Name"
          autoCapitalize="words"
          error={this.state.isNameCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.name = ref}
          icon={person}
        />
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          error={this.state.isEmailCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.email = ref}
          icon={email}
        />
        <InputField
          placeholder="Password"
          error={this.state.isPasswordCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.password = ref}
          secureTextEntry={true}
          icon={password}
        />
        <InputField
          placeholder="Repeat Password"
          error={this.state.isRepeatCorrect}
          style={styles.input}
          secureTextEntry={true}
          returnKeyType="done"
          blurOnSubmit={true}
          focus={this.changeInputFocus}
          ref={ref => this.repeat = ref}
          icon={repeat}
        />
        <Continue isCreating={this.state.isCreatingAccount} click={this.createUserAccount}/>

        </KeyboardAvoidingView>

        <TouchableOpacity onPress={this.props.change('login')} style={styles.touchable}>
          <Text style={styles.signIn}>{'<'} Back to Login</Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
      )
    } else {

      return(

      <TouchableWithoutFeedback onPress={() =>{DismissKeyboard()}}>

      <View style={styles.containerAndroid}>
        
        <Text style={styles.createAndroid}>Create Account</Text>

        <InputField
          placeholder="Name"
          autoCapitalize="words"
          error={this.state.isNameCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.name = ref}
          icon={person}
        />
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          error={this.state.isEmailCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.email = ref}
          icon={email}
        />
        <InputField
          placeholder="Password"
          error={this.state.isPasswordCorrect}
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.password = ref}
          secureTextEntry={true}
          icon={password}
        />
        <InputField
          placeholder="Repeat Password"
          error={this.state.isRepeatCorrect}
          style={styles.input}
          secureTextEntry={true}
          returnKeyType="done"
          blurOnSubmit={true}
          focus={this.changeInputFocus}
          ref={ref => this.repeat = ref}
          icon={repeat}
        />
        <Continue isCreating={this.state.isCreatingAccount} click={this.createUserAccount}/>

        <TouchableOpacity onPress={this.props.change('login')} style={styles.touchableAndroid}>
          <Text style={styles.signIn}>{'<'} Back to Login</Text>
        </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      )
    }
  }
}

Register.propTypes = {
  change: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAndroid: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardContainer: {
    flex: 1,
    alignItems: 'center',
    //width: '100%',
    height: '100%',
  },
  create: {
    color:'white',
    fontSize: totalSize(3.5),
    marginTop: h(6),
    marginBottom: h(15),
    fontWeight: '700',
  },
  createAndroid: {
    //fontSize: 45,
    fontSize: totalSize(3.5),
    fontWeight: "700",
    color: 'white',
    marginTop: h(6),
    marginBottom: h(6),
    textAlign: 'center',
  },
  signIn: {
    color:'white',
    fontSize: totalSize(2),
    fontWeight: '700',
    marginBottom: h(8),
  },
  touchable: {
    alignSelf: 'flex-start',
    marginLeft: w(8),
    marginTop: h(4),
  },
  touchableAndroid: {
    alignSelf: 'flex-start',
    marginLeft: w(8),
    marginTop: h(24),
    marginBottom: h(8)
  },
  input: {
    marginVertical: h(2),
  }
});