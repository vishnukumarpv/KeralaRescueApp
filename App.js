/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

import Home from './src/screens/Home';
  
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={ require('./res/img/bg_res.jpg')} style={styles.ImgBg}>
      <Home/>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } ,
  ImgBg:{
    width:"100%",
    height:"100%",
  }
});
