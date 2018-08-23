import React, { Component } from 'react';
import {
    StyleSheet, View, Image,
     Button, Text,
      ImageBackground,
      TextInput,
      ScrollView,
      TouchableHighlight,
      Picker
    } from 'react-native';
 




export default class Needhelp extends Component{

    constructor(props) {
        super(props);
        this.state = {
          text: '',
          language: ''
        };
      }

    bigBtnClickHandler = () =>{
        
    }
    render(){
        return(
            <View style={styles.main}>
            <ImageBackground source={ require('../../res/img/bg_res.jpg')} style={styles.ImgBg}>
                <ScrollView style={styles.body}>
                    <TouchableHighlight style={{ alignItems:'center' }}>
                    <View>
                        <Image source={require('../../res/img/location.png')}/>
                        <Text>Locate with GPS</Text>
                    </View>
                    </TouchableHighlight>
                    
                    <Text style={styles.label}>District</Text>
                    <Picker 
                         itemStyle={{backgroundColor:'white'}} 
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    {/* <TextInput style={styles.input}/> */}

                    <Text style={styles.label}>Address line #1</Text>
                    <TextInput style={styles.input}/>
  
                    <Text style={styles.label}>Address line #2</Text>
                    <TextInput style={styles.input}/>

                    <Text style={styles.label}>city/ Village</Text>
                    <TextInput style={styles.input}/>

                    <Text style={styles.label}>Needs</Text>

             <TextInput style={{
                         borderColor: '#ddd', 
                         borderWidth: 5,
                         borderRadius:5
             }} 
             editable = {true}
              maxLength = {140} 
              multiline = {true}
              numberOfLines = {4}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
                 

                
                    
                    <TouchableHighlight > 
                        <Image style={{ width:'100%', borderRadius:5, marginTop:8 }} source={require('../../res/img/submit.png')}/> 
                    </TouchableHighlight>

                </ScrollView>
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main:{
        justifyContent:'center'
    },
    ImgBg:{
        width:"100%",
        height:"100%",
    },
    body:{
        flex:1,
        marginTop:50,
        padding:15, 
        backgroundColor:"white",
        alignSelf : 'center',
        width:"90%", 
        height:50,
        borderRadius:5
    },
    input:{
        height: 40, 
        borderColor: '#ddd', 
        borderWidth: 5,
        borderRadius:7, 
        fontSize:18,
        borderEndColor:'#fff',
        marginBottom:18
    },
    label:{
        fontWeight: 'bold',
        fontSize:21
    }
});