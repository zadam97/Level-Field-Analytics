import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import Color from '../components/color';
import { connect } from 'react-redux';

class FirebaseLogin extends Component {

  state = {
    currentScreen: 'login', // can be: 'login' or 'register' or 'forgot'
    showImage: true,
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

  render() {
    let screenToShow;

    switch(this.state.currentScreen) {
      case 'login':
        screenToShow = <Login change={this.changeScreen} success={this.userSuccessfullyLoggedIn} />;
        break;
      case 'register':
        screenToShow = <Register change={this.changeScreen} mainAppx={() => {this.goToMainApp()}}/>;
        break;
      case 'forgot':
        screenToShow = <ForgotPassword change={this.changeScreen} />;
        break;
    }

    if(this.state.showImage){
      return (
        <View>
          <ImageBackground
            source={this.props.background}
            style={styles.background}
            resizeMode="stretch"
            blurRadius={this.props.blur}
          >
            {screenToShow}
          </ImageBackground>
        </View>
      )
    } else {

      return (
        <View>
          <ImageBackground
            style={styles.background}
            resizeMode="stretch"
            backgroundColor={Color.DarkTeal}
          >
            {screenToShow}
          </ImageBackground>
        </View>
      )
    }
  }
}

FirebaseLogin.propTypes = {
  //login: PropTypes.func.isRequired,
};

FirebaseLogin.defaultProps = {
  background: null,
};

const mapStateToProps = (state, ownProps) => {
  return{
    blur: state.authBlur.blur //grt rid of this to get rid of keyboard blur
  }
}

export default connect(mapStateToProps)(FirebaseLogin)

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
