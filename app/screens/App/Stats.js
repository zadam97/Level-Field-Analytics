import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Color from '../../components/color';
import Header from '../../components/Header';

import { LineChart, XAxis, YAxis, StackedAreaChart, AreaChart, Grid} from 'react-native-svg-charts';
import { Circle, G, Line, Rect, Text } from 'react-native-svg';

import * as shape from 'd3-shape';

export default class Stats extends Component {
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

        return (
            <View>
                <Header/>
                <ScrollView>
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