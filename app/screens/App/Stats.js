import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Color from '../../components/color';
import Header from '../../components/Header';
import { VictoryZoomContainer, VictoryBrushContainer, VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryStack } from "victory-native";
import { LineChart, XAxis, YAxis, StackedAreaChart, AreaChart, Grid} from 'react-native-svg-charts';
import { Circle, G, Line, Rect, Text } from 'react-native-svg';
import PureChart from 'react-native-pure-chart';



import * as shape from 'd3-shape';

export default class Stats extends Component {

    constructor() {
        super();
        this.state ={};
      }



      handleZoom(domain) {
        this.setState({selectedDomain: domain});
      }
    
      handleBrush(domain) {
        this.setState({zoomDomain: domain});
      }


    render() {

        const data2 = [ 50, 10, 40, 75, -4, -24, 67, 81, 35, 53, -53, 24, 50, -20, -80, 0, 0, 80, -30, 4, 5, 6, 10 ]
        const data3 = [ 80, 10, 70, 75, -7, -24, 76, 43, 35, 23, -23, 24, 50, -20, -80, 0, 7, 9, -10, 4, 70, 6, 10 ]

        const contentInset = { top: 20, bottom: 20 }


        const colors = [ '#8800cc', '#aa00ff', '#cc66ff', '#eeccff' ]
        const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]
        const svgs = [
                    { onPress: () => console.log('apples') },
                    { onPress: () => console.log('bananas') },
                    { onPress: () => console.log('cherries') },
                    { onPress: () => console.log('dates') },
                ]

        let sampleData = [
            {
                seriesName: 'series1',
                data: [
                {x: '2018-02-01', y: 30},
                {x: '2018-02-02', y: 200},
                {x: '2018-02-03', y: 170},
                {x: '2018-02-04', y: 250},
                {x: '2018-02-05', y: 10}
                ],
                color: '#297AB1'
            },
            {
                seriesName: 'series2',
                data: [
                {x: '2018-02-01', y: 20},
                {x: '2018-02-02', y: 100},
                {x: '2018-02-03', y: 140},
                {x: '2018-02-04', y: 550},
                {x: '2018-02-05', y: 40}
                ],
                color: 'yellow'
            }
            ]
           

        return (
            <View>
                <Header/>
                <ScrollView contentInset= {{top: 20, left: 0, bottom: 120, right: 0}}>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <YAxis style={{ height: 300, marginLeft: 10, marginRight: 5}}
                                    data={ data2 }
                                    contentInset={ contentInset }
                                    svg={{
                                        fill: 'black',
                                        fontSize: 10,
                                    }}
                                    numberOfTicks={ 10 }
                                    formatLabel={ value => `${value}ºC` }
                            />
                            <ScrollView horizontal={true} style={ { height: 350, paddingVertical: 16 } } bounces={true}>
                                <View style={{width: 600, height: 300}}>
                                <LineChart
                                    style={{ flex: 1, marginLeft: 22, marginBottom: 22,}}
                                    data={ data2 }
                                    svg={{ stroke: Color.DarkRed, strokeWidth: 2 }}
                                    contentInset={{ contentInset }}
                                    curve={shape.curveLinear}
                                >
                                <Grid/>
                                </LineChart>
                                <XAxis
                                style={{ width: 615, marginHorizontal: -10 }}
                                data={ data2 }
                                formatLabel={ (value, index) => index }
                                contentInset={{ left: 35, right: 0 }}
                                svg={{ fontSize: 10, fill: 'black' }}
                                />
                                </View>
                            </ScrollView>
                        </View>
                    </View>

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
                    <PureChart data={sampleData} type='line'
                    height={300}
                    width = {'95%'}
                    
                    />
                    
                    <Text style={styles.title}>
                    Cool Charts
                    </Text>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
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
  }
});