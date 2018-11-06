import React, { Component } from 'react';
import {StyleSheet,
TouchableOpacity,
Animated,
Easing,
Image,
Alert,
AsyncStorage, 
View, 
Text, 
Keyboard,
TextInput,
TouchableWithoutFeedback, 
KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import Color from '../components/color';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import spinner from '../assets/images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;
      

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      name: "",
      email: "",
      password: "",
      scrollEnabled: true,
      isLoading: false,
    }

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);

    }

  static navigationOptions = {
    title: 'Sign In',
    headerStyle: {
      backgroundColor: '#f5fcff',
    },
  };

  _Animate() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);
    this.props.goToApp;

    setTimeout(() => {
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);

  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }



  render() {

    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });


    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View>
            <Text style={styles.logoText}>Level Field</Text>

              <View style={styles.loginFormView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => this.setState({name: text})}
                      placeholder="Name"
                      autoCorrect={false}
                      autoCapitalize={"words"}
                      returnKeyType={"next"}
                      placeholderTextColor = {"grey"}
                      underlineColorAndroid="transparent"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => this.setState({email: text})}
                      placeholder="E-Mail"
                      autoCorrect={false}
                      autoCapitalize={"none"}
                      returnKeyType={"next"}
                      placeholderTextColor = {"grey"}
                      underlineColorAndroid="transparent"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => this.setState({password:text})}
                      secureTextEntry={true}
                      placeholder="Password"
                      autoCorrect={false}
                      autoCapitalize={"none"}
                      placeholderTextColor = {"grey"}
                      returnKeyType={"done"}

                    />
                </View>
              <View style={styles.container}>
                <Animated.View style={{width: changeWidth}}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={this._signIn}
                      activeOpacity={1}>
                      {this.state.isLoading ? (
                        <Image source={spinner} style={styles.image} />
                      ) : (
                        <Text style={styles.text}>LOGIN</Text>
                      )}
                    </TouchableOpacity>
                    <Animated.View
                      style={[styles.circle, {transform: [{scale: changeScale}]}]}
                    />
                </Animated.View>
              </View>
            </View>
          
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

            );
        }

_signIn = async () => {
  try{
    if(this.state.name == ""||
       this.state.email == ""
       )
      {
       Alert.alert(
         'Error',
         'Please Enter Valid Information'
      )
    } else if (this.state.password.length <= 5){
        Alert.alert(
          'Invalid Password',
          'Password must at least 5 characters'
     )
    }
    else if (this.state.name.length <= 2){
      Alert.alert(
        'Invalid Name',
        'Name must be at least 2 characters'
   )
  }else if (this.state.email.length <= 4 //||
            //this.state.email.search(/[.]/g) == -1 ||
            //this.state.email.search(/[@]/g == -1)
            ){
    Alert.alert(
      'Invalid Email',
      'Email must be a valid address'
 )
} else {
      this._Animate();
      await AsyncStorage.setItem(this.state.name, this.state.password);
      this.props.navigation.navigate('FireBaseSignIn');
    }
    
  } catch (error) {
    Alert.alert(
      'Error',
      'Please Try Again'
    )
  }
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
  containerView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.LightTeal,
  },
  container: {
    flex: 1,
    top: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginScreenContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logoText: {
    fontSize: 45,
    fontWeight: "800",
    marginTop: 75,
    marginBottom: 60,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  input: {
    width: 300,
    height: 40,
    margin: 5,
    textAlign: 'center',
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: Color.BlackX,
    //backgroundColor: '#fafafa',
    opacity: 0.5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.DarkTeal,
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});