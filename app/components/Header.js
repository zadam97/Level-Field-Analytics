import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Color from './color';

export default function Header(props) {
  const {
    children,
  } = props;

  return (
    <View style={styles.container}>
         <StatusBar
              backgroundColor='#2E2E2E'
              //^for android match with header background
              barStyle="light-content"
         />
          <Text style ={styles.title}>
              Level Field Analytics
          </Text>
    </View>
  );
}
//Header.propTypes = {
//  children: PropTypes.node.isRequired,
//};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BlackX,
    //borderBottomWidth: 1,
    //borderBottomColor: Color.Black,
    paddingTop: 44,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Avenir-heavy',
    color: Color.LightTeal,
  },
});
