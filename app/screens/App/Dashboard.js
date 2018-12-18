import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, StatusBar, Platform} from 'react-native';
import Color from '../../components/color';
import Header from '../../components/Header';
import ChartTitle from '../../components/ChartTitle';
import LinearGradientx from 'react-native-linear-gradient';

export default class Dashboard extends Component {

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


        return (
            <View>
                <Header/>

                <LinearGradientx colors={[Color.BlackX, Color.BlackXX]} >
                
                        <ScrollView showsVerticalScrollIndicator={false} contentInset= {{top: 20, left: 0, bottom: 120, right: 0}} style={{bounce: false,paddingBottom: 0}}>
                       

                        <LinearGradientx start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.Card} colors={[Color.RedCard, Color.RedCard]} >

                        <Text style={{fontSize: 30, fontFamily: 'Avenir-heavy', textAlign: 'center'}}>
                          Today
                        </Text>

                        <View style={{ marginLeft: 15, height: 350, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{flex: 1, padding: 0, margin: 15, alignItems: 'center', flexDirection: 'column' }}>
                                      <Text style={styles.cardText}>
                                        Top Speed
                                      </Text>
                                <View style={{flex: 1, height: 150, width: 120, margin: 10 , borderRadius: 10}} backgroundColor= 'white'>
                                      <Text style={styles.stat}>
                                        17         mph
                                      </Text>
                                </View>
                                      <Text style={styles.cardText}>
                                        Max Jerk
                                      </Text>
                                <View style={{flex: 1, height: 150, width: 120, padding: 10, margin: 10 , borderRadius: 10}} backgroundColor= 'white'>
                                      <Text style={styles.stat}>
                                        14              m/s^3
                                      </Text>
                                </View>
                            </View>
                            <View style={{flex: 1, padding: 0, margin: 15, alignItems: 'center', flexDirection: 'column' }}>
                                      <Text style={styles.cardText}>
                                        Max Accel
                                      </Text>
                                  <View style={{flex: 1, height: 150, width: 120, margin: 10 , borderRadius: 10}} backgroundColor= 'white'>
                                      <Text style={styles.stat}>
                                       8                m/s^2
                                      </Text>
                                  </View>
                                      <Text style={styles.cardText}>
                                        Avg Speed
                                      </Text>
                                  <View style={{flex: 1, height: 150, width: 120, padding: 10, margin: 10 , borderRadius: 10}} backgroundColor= 'white'>                                     
                                      <Text style={styles.stat}>
                                      13             mph
                                      </Text>
                                   </View>
                            </View>
                        </View>
                        </LinearGradientx>


                        <LinearGradientx start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.Card} colors={[Color.RedCard, Color.RedCard]} >

                            <Text style={{fontSize: 30, fontFamily: 'Avenir-heavy', textAlign: 'center'}}>
                              Trends
                            </Text>

                            <View style={{ height: 325, alignItems: 'center', flexDirection: 'column' }}>
                                    <View style={{flex: 1, height: 100, width: '90%', padding: 10, marginLeft: 20, margin: 10 , borderRadius: 10}} backgroundColor= 'white'>
                                          <Text style={styles.trendText}>
                                          Average Speed up 12% from last week
                                          </Text>
                                    </View>
                                    <View style={{flex: 1, height: 80, width: '90%', padding: 10, marginLeft: 20, margin: 10 , borderRadius: 10}} backgroundColor= 'white'>
                                          <Text style={styles.trendText}>
                                           CHS Average Acceleration down 5% from last week
                                          </Text>
                                    </View>
                                    <View style={{flex: 1, height: 80, width: '90%', padding: 10, marginLeft: 20, margin: 10 , borderRadius: 10}} backgroundColor= 'white'>
                                          <Text style={styles.trendText}>
                                           Edurance up 6% from 2 weeks ago
                                          </Text>
                                    </View>

                            </View>
                         </LinearGradientx>


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
  Card: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 0, 
    paddingRight: 15, 
    margin: 20, 
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontFamily: 'Avenir-heavy',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
    color: Color.White
  },
  trendText: {
    fontSize: 18,
    fontFamily: 'Avenir-heavy',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,

    color: Color.BlackX
  },
  stat: {
    fontSize: 24,
    fontFamily: 'Avenir-heavy',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,

    color: Color.BlackX
  },
});