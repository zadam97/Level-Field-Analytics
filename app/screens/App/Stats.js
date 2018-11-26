import React, { Component } from 'react';
import { Alert, StyleSheet, View, ScrollView, StatusBar, Platform} from 'react-native';
import Color from '../../components/color';
import Header from '../../components/Header';
import ChartTitle from '../../components/ChartTitle';
import LinearGradientx from 'react-native-linear-gradient';
import { VictoryZoomContainer, VictoryBrushContainer, VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryStack } from "victory-native";
import { LineChart, XAxis, YAxis, StackedAreaChart, AreaChart, Grid} from 'react-native-svg-charts';
import { Circle, G, Line, Rect, Text,Path, Defs, LinearGradient, Stop } from 'react-native-svg';
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

        
            const topSpeed = [ 16, 17, 17, 16, 18, 17, 17, 18, 17, 19, 18, 18, 17, 18]
            const Endurance = [ 52, 62, 69, 68, 71, 70, 73, 72, 75, 72, 75, 74, 76, 76]
            const Play = [ 14, 14, 15, 17, 14, 16, 13, 10, 16, 17, 16, 14, 14, 12, 9, 15, 15, 13, 15, 12, 11, 14, 12, 8, 11, 13, 14, 11, 13, 10]


        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30

        const Gradient1 = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={Color.DarkTeal}/>
                    <Stop offset={'100%'} stopColor={Color.Green}/>
                </LinearGradient>
            </Defs>
        )
        const Gradient2 = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={Color.DarkRed}/>
                    <Stop offset={'100%'} stopColor={Color.Blue}/>
                </LinearGradient>
            </Defs>
        )
        const Shadow = ({ line }) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={4}
                stroke={'rgba(100, 100, 100, 0.2)'}
            />
        )

        return (
            <View>
                <Header/>

                <LinearGradientx colors={['#C31432', '#240B36']} >
                
                <ScrollView contentInset= {{top: 20, left: 0, bottom: 120, right: 0}} style={{bounce: false,paddingBottom: 0}}>
                
                <View style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 0, paddingRight: 15, margin: 20, borderRadius: 10, backgroundColor: 'white' }}>
                    <ChartTitle
                        title='Game vs. Top Speed'
                        fontsize={20}
                    />
                    <View style={{ height: 200, padding: 10, flexDirection: 'row' }}>
                        <YAxis
                            data={topSpeed}
                            style={{ marginBottom: xAxisHeight }}
                            contentInset={verticalContentInset}
                            svg={{
                                fill: Color.BlackX,
                                fontSize: 10
                            }}
                            numberOfTicks={5}
                        />
                    <View style={{ flex: 1, marginLeft: 10, }}>
                        <LineChart
                        style={ { flex: 1 } }
                        data={ topSpeed }
                        contentInset={verticalContentInset}
                        svg={{
                            strokeWidth: 2,
                            stroke: 'url(#gradient)',
                        }}
                        >
                        <Grid/>
                        <Gradient1/>
                        <Shadow/>
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                            data={topSpeed}
                            formatLabel={(value, index) => index + 1}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{
                                fill: Color.BlackX,
                                fontSize: 10
                            }}                        
                        />
                    </View>
                    </View>
                </View>
                
                <View style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 0, paddingRight: 15, margin: 20, borderRadius: 10, backgroundColor: 'white'}}>
                <ChartTitle
                    title='Game vs. Endurance%'
                />
                <View style={{ height: 200, padding: 10, flexDirection: 'row' }}>
                <YAxis
                    data={Endurance}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={{
                        fill: Color.BlackX,
                        fontSize: 10
                    }}
                    numberOfTicks={5}
                />
                <View style={{ flex: 1, marginLeft: 10, }}>
                <LineChart
                style={ { flex: 1 } }
                data={ Endurance }
                contentInset={verticalContentInset}
                svg={{
                    strokeWidth: 2,
                    stroke: 'url(#gradient)',
                }}
                 >
                <Grid/>
                <Gradient2/>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={Endurance}
                    formatLabel={(value, index) => index + 1}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{
                        fill: Color.BlackX,
                        fontSize: 10
                    }}                        
                />
                </View>
                </View>
                </View>
                 
                <View style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 0, paddingRight: 15, margin: 20, borderRadius: 10, backgroundColor: 'white'}}>
                <ChartTitle
                    title='Play vs. Top Speed'
                />
                <View style={{ height: 200, padding: 10, flexDirection: 'row' }}>
                <YAxis
                    data={Play}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={{
                        fill: Color.BlackX,
                        fontSize: 10
                    }}
                    numberOfTicks={5}
                />
                <ScrollView horizontal={true} style={{flex: 1, marginLeft: 10, }}>
                <View style={{width: 600}}>
                <LineChart
                style={ { flex: 1 } }
                data={ Play }
                contentInset={verticalContentInset}
                svg={{
                    strokeWidth: 2,
                    stroke: 'url(#gradient)',
                }}
                 >
                <Grid/>
                <Gradient2/>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={Play}
                    formatLabel={(value, index) => index + 1}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{
                        fill: Color.BlackX,
                        fontSize: 10
                    }}                        
                />
                </View>
                
                </ScrollView>
                </View>
                </View>
                
                </ScrollView>

                </LinearGradientx>

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
  containerx: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BlackX,
    //borderBottomWidth: 1,
    //borderBottomColor: Color.Black,
    paddingTop: Platform.OS=='ios' ? 44 : 15,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Avenir-heavy',
    color: Color.LightTeal,
  },
});