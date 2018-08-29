import React, { Component } from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';

 class ViButton extends Component { 
   constructor(props){
     super(props);
     this.props = {
        label : 'submit'
     };
     
   } 

    render() {
        return (
        <TouchableHighlight
        onPress={this.props.postPressed}
        style={{
          height:45,
          borderRadius:5,
          width:'100%',
          backgroundColor:'#11BE73',
          justifyContent:'center',
          alignItems:'center',  
          marginTop: this.props.marginTop
        }}> 
        <View
        style={{ flexDirection:'row' }}
        >
            <Text style={{
              color:'#fff',
              fontSize:20,
            }}>
            {this.props.label}
            </Text>
              <Image 
              style={{ height:22,width:35, marginTop:3, marginLeft:"3%" }}
              source={require('../../res/img/Right_Arrow_50px.png')}/> 
        </View>

        </TouchableHighlight>
        );
      }
}

export default ViButton