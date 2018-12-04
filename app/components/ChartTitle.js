import React, {
    PropTypes,
  } from 'react';
  import {
    StyleSheet,
    View,
    Text,
    Platform,
  } from 'react-native';
  
  import Color from './color';
  
  export default function ChartTitle(props) {
    const {
      children,
    } = props;
  
    return (
      <View style={styles.container}>
            <Text style ={styles.title}>
                {props.title}
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
      marginHorizontal: 20,
      paddingBottom: 10,
    },
    title: {
      fontSize: 20,
      fontFamily: 'Avenir-heavy',
      color: Color.BlackX,
      textAlign: 'center'
    },
  });
  