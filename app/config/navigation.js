import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, createSwitchNavigator, createStackNavigator, TabNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Color from '../components/color';

import Home from '../screens/Home';
import Stats from '../screens/Stats';
import Settings from '../screens/Settings';

import SignIn from '../screens/SignIn';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';



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

export const AuthScreens = createStackNavigator({ SignIn: SignIn });

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