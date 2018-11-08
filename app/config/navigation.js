import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, createSwitchNavigator, createStackNavigator, TabNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Color from '../components/color';


import Home from '../screens/App/Home';
import Stats from '../screens/App/Stats';
import Settings from '../screens/App/Settings';


import LogIn from '../screens/Auth/LogIn';
import SignIn from '../screens/Auth/SignIn';
import OnBoarding from '../screens/Auth/OnBoarding';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';



let screen = Dimensions.get('window');

const tabBarOptions={
  activeTintColor: Color.BlackX,
  inactiveTintColor: Color.DarkTeal,
  activeBackgroundColor: Color.White,
  inactiveBackgroundColor: Color.White,
  };


export const Tabs = createBottomTabNavigator({
  
  'Home': {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarOptions,
      tabBarIcon: ({ tintColor }) => <Icon name="dashboard" type="material-icons" size={24} color={tintColor} />
    },
  },
  'Stats': {
    screen: Stats,
    navigationOptions: {
      tabBarLabel: 'Stats',
      tabBarOptions,
      tabBarIcon: ({ tintColor }) => <Icon name="show-chart" type="material-icons" size={24} color={tintColor} />
    },
  },
  'Settings': {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarOptions,
      tabBarIcon: ({ tintColor }) => <Icon name="settings" type="material-icons" size={24} color={tintColor}/>
    },
  }, 
});

export const createRootNavigator = () => {
  return StackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },   
    },
  )
};

export const AuthScreens = createStackNavigator({ Onboarding: OnBoarding, LogIn: LogIn, SignIn: SignIn},{ headerMode: 'none'});
//Add More OnBoarding to AuthScreens in the future if needed
export const Nav = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: Tabs,
    Auth: AuthScreens,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);