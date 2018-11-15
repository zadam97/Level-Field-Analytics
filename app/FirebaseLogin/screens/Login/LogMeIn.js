import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Color from '../../../components/color';
import {w, h, totalSize} from '../../api/Dimensions';

export default class LogMeIn extends Component {
  render() {
    return (

      <TouchableOpacity
        onPress={this.props.click}
        style={styles.button}
        activeOpacity={0.6}
      >
        {this.props.isLogin
          ? <ActivityIndicator size="large" style={styles.spinner} color='white' />
          : <Text style={styles.text}>Login</Text>}
      </TouchableOpacity>
    );
  }
}

LogMeIn.propTypes = {
  click: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  button: {
    width: w(85),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    //backgroundColor: 'white',
    paddingVertical: w(2),
    borderRadius: w(10),
    borderColor: 'white',
    borderWidth: 1,
    marginTop: h(7),
  },
  text: {
    color: 'white',
    fontWeight: '700',
    paddingVertical: h(1),
    fontSize: totalSize(2.1),
  },
  spinner: {
    height: h(5),
  },
});
