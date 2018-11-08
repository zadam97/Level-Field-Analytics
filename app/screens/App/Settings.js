import React, { Component } from 'react';
import {AsyncStorage, StyleSheet, Button, Text, ScrollView, View, Dimensions} from 'react-native';
import { VictoryZoomContainer, VictoryBrushContainer, VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryStack } from "victory-native";
import Header from '../../components/Header';

const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;


export default class Settings extends Component {

  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

  render() {
    return (
        <View>
          <Header/>
          <VictoryChart width={400} height={350} scale={{x: "time"}}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />
            </VictoryChart>

<VictoryChart
  padding={{top: 0, left: 50, right: 50, bottom: 30}}
  width={400} height={120} scale={{x: "time"}}
  containerComponent={
    <VictoryBrushContainer responsive={false}
      brushDimension="x"
      brushDomain={this.state.selectedDomain}
      onBrushDomainChange={this.handleBrush.bind(this)}
    />
  }
>
  <VictoryAxis
    tickValues={[
      new Date(1985, 1, 1),
      new Date(1990, 1, 1),
      new Date(1995, 1, 1),
      new Date(2000, 1, 1),
      new Date(2005, 1, 1),
      new Date(2010, 1, 1)
    ]}
    tickFormat={(x) => new Date(x).getFullYear()}
  />
  <VictoryLine
    style={{
      data: {stroke: "tomato"}
    }}
    data={[
      {x: new Date(1982, 1, 1), y: 125},
      {x: new Date(1987, 1, 1), y: 257},
      {x: new Date(1993, 1, 1), y: 345},
      {x: new Date(1997, 1, 1), y: 515},
      {x: new Date(2001, 1, 1), y: 132},
      {x: new Date(2005, 1, 1), y: 305},
      {x: new Date(2011, 1, 1), y: 270},
      {x: new Date(2015, 1, 1), y: 470}
    ]}
  />
</VictoryChart>


        <Button title="Sign me out" onPress={this._signOutAsync} />

        </View>        
    );
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    //justifyContent: 'center',
   //x alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  stretch: {
    left: 50,
    top: 500,
    width: 1200,
    height: 940,
  }
});