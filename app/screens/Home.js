import React, { Component } from 'react';
import {StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';
import { VictoryBar, VictoryScatter, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryStack, createContainer, VictoryZoomContainer, VictoryVoronoiContainer } from "victory-native";
import Color from '../components/color';
const deviceWidth = Dimensions.get ('window').width;
const deviceHeight = Dimensions.get ('window').height;
      

const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
  ];
  
  const data2014 = [
    {quarter: 1, earnings: 11500},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 20000},
    {quarter: 4, earnings: 15500}
  ];
  
  const data2015 = [
    {quarter: 1, earnings: 18000},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 15000},
    {quarter: 4, earnings: 12000}
  ];

  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
  const datax = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollEnabled: true };
  }
  render() {

    return (
        <ScrollView scrollEnabled={this.state.scrollEnabled}>
            <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack
          colorScale={"warm"}
        >
          <VictoryBar
            data={data2012}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2013}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2014}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2015}
            x="quarter"
            y="earnings"
          />
        </VictoryStack>
      </VictoryChart>
      <VictoryChart
  theme={VictoryTheme.material}
>
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    animate={{
        duration: 5000,
        onLoad: { duration: 1000 }
      }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
    ]}
  />
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    animate={{
        duration: 5000,
        onLoad: { duration: 1000 }
      }}
    data={[
      { x: 1, y: 4 },
      { x: 2, y: 2 },
      { x: 3, y: 1 },
      { x: 4, y: 6 },
      { x: 5, y: 2 }
    ]}
  />
</VictoryChart>

<ScrollView horizontal={true}>
<VictoryChart
  theme={VictoryTheme.material}
  width={800}
>
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    animate={{
        duration: 5000,
        onLoad: { duration: 1000 }
      }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
    ]}
  />
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    animate={{
        duration: 5000,
        onLoad: { duration: 1000 }
      }}
    data={[
      { x: 1, y: 4 },
      { x: 2, y: 2 },
      { x: 3, y: 1 },
      { x: 4, y: 6 },
      { x: 5, y: 2 }
    ]}
  />
</VictoryChart>
</ScrollView>

<VictoryChart domainPadding={{ y: 10 }}
  containerComponent={
    <VictoryVoronoiContainer
      labels={(d) => `${Math.round(d.x, 2)}, ${Math.round(d.y, 2)}`}
      onTouchStart={() => this.setState({ scrollEnabled: false })}
      onTouchEnd={() => this.setState({ scrollEnabled: true })}
    />
  }
>
  <VictoryLine
  style={{
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc"}
  }}
    animate={{
      duration: 5000,
      onLoad: { duration: 1000 }
    }}
  data={[
    { x: 1, y: 4 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 4, y: 6 },
    { x: 5, y: 2 }
  ]}
  />
</VictoryChart>

 </ScrollView>
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