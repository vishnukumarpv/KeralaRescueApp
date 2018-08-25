import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';

export class CustomsComponent2 extends Component {
  componentName = 'CustomsComponent2';
    render() {
        return (
        <TouchableHighlight > 
          <Image style={{ width:'100%', borderRadius:5, marginTop:8 }} 
          source={require('../../res/img/submit.png')}/> 
        </TouchableHighlight>
        );
      }
}