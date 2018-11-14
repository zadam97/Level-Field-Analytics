import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, View, StyleSheet, ImageBackground } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import { w } from './api/Dimensions';
import { Alert } from 'react-native';

export default class FirebaseLogin extends Component {

  state = {
    currentScreen: 'login', // can be: 'login' or 'register' or 'forgot'
    blur: 0,
  };

  changeScreen = screenName => () => {
    this.setState({ currentScreen: screenName });
  };

  userSuccessfullyLoggedIn = (user) => {
    this.props.login(user);
    this.goToMainApp();
  };

  goToMainApp(){
    this.props.mainApp();
  }

  setBlur(blur){
    this.setState.blur = blur;
  }

  render() {
    let screenToShow;

    switch(this.state.currentScreen) {
      case 'login':
        screenToShow = <Login change={this.changeScreen} success={this.userSuccessfullyLoggedIn} setBlur={(blur) => {this.setBlur(blur)}}/>;
        break;
      case 'register':
        screenToShow = <Register change={this.changeScreen} mainAppx={() => {this.goToMainApp()}}/>;
        break;
      case 'forgot':
        screenToShow = <ForgotPassword change={this.changeScreen} />;
        break;
    }

    return (
      <View>
      
        <ImageBackground
          source={this.props.background}
          style={styles.background}
          resizeMode="stretch"
          blurRadius={this.state.blur}
        >
          {screenToShow}
        </ImageBackground>
      </View>
    )
  }
}

FirebaseLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

FirebaseLogin.defaultProps = {
  background: null,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#555',
  },
  background: {
    width: '100%',
    height: '100%',
  }
});
