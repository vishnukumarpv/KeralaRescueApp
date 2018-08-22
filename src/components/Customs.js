import React, { Component } from 'react';
import { TouchableHighlight, View, Image } from 'react-native';

class CustomButton extends Component {
    render() {
        return (
        <TouchableHighlight > 
          <Image style={{ width:'100%', borderRadius:5, marginTop:8 }} 
          source={require('../../res/img/submit.png')}/> 
        </TouchableHighlight>
        );
      }
}