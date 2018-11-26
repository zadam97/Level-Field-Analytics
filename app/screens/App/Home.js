import React, { Component } from 'react';
import {Alert, Platform, Text, StyleSheet, AsyncStorage, ScrollView, View, Dimensions} from 'react-native';
import { LineChart, XAxis, YAxis, StackedAreaChart, AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Circle, G, Line, Rect,Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import Color from '../../components/color';
import Header from '../../components/Header';
import ChartTitle from '../../components/chartTitle';
import PureChart from 'react-native-pure-chart';


const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;
      
let pureData = [
  {
      seriesName: 'TopSpeed',
      data: [
      {x: '1', y: 16},
      {x: '2', y: 17},
      {x: '3', y: 17},
      {x: '4', y: 16},
      {x: '5', y: 18},
      {x: '6', y: 17},
      {x: '7', y: 17},
      {x: '8', y: 18},
      {x: '9', y: 17},
      {x: '10', y: 19},
      {x: '11', y: 18},
      {x: '12', y: 18},
      {x: '13', y: 17},
      {x: '14', y: 18}
      ],
      color: Color.DarkTeal
  },
  {
      seriesName: 'Endurance%',
      data: [
      {x: '1', y: 52},
      {x: '2', y: 62},
      {x: '3', y: 69},
      {x: '4', y: 68},
      {x: '5', y: 71},
      {x: '6', y: 70},
      {x: '7', y: 73},
      {x: '8', y: 72},
      {x: '9', y: 75},
      {x: '10', y: 72},
      {x: '11', y: 75},
      {x: '12', y: 74},
      {x: '13', y: 76},
      {x: '14', y: 76}
      ],
      color: Color.DarkRed
  },
  
  ]


  export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

  render() {

    return (
      <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: 'grey'}}>
          <Header/>  
                <View style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 0, paddingRight: 15, margin: 20, borderRadius: 10, backgroundColor: 'white'}}>

                 <ChartTitle
                        title='Game vs. Top Speed'
                        fontsize={20}
                  />
               
             
                <PureChart data={pureData} type='line'
                    style={{flex: 1, marginTop: 400}}
                    height={100}
                    width = {'100%'}
                    numberOfYAxisGuideLine={5}
                    showEvenNumberXaxisLabel={false}
                    
                    xAxisColor={'black'}
                    yAxisColor={'black'}
                    xAxisGridLineColor={'transparent'}
                    yAxisGridLineColor={'grey'}
                    onPress={(a) => {
                        // Alert.alert((a + 1).toString())
                      }}
                    labelColor={'black'}
                    selectedColor={'black'}
                    gap={45}
                    primaryColor={Color.Green}
                />
                
                 
                </View>
                
            </View>

            );
        }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});