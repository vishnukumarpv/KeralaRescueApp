import React, { Component } from 'react';
import {
    StyleSheet, View, Image,
     Button, Text,
      ImageBackground,
      TextInput,
      ScrollView,
      TouchableOpacity,
      Picker
    } from 'react-native';
 




export default class Needhelp extends Component{
    static navigationOptions = {
        title: 'I need help',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      
    constructor(props) {
        super(props);
        this.state = { 
          district: '',
          address1:'',
          address2:'',
          city:'',
          needs:'',

          districts: ['kollam','trivandrum','pathanamthitta','alappuzha'],
        };
      }

      _onSubmit = () =>{

        if (this.state.address1 == ''){
            alert('Enter the address line');
            return;
        }
        
        if (this.state.address2 == ''){
            alert('Enter the address line 2');
            return;
        }
        if (this.state.city == ''){
            alert('Enter the address city');
            return;
        }
        if (this.state.needs == ''){
            alert('Enter the address needs');
            return;
        }


        fetch('http://169.254.180.17/test.php', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                method      :   'helprequest',
                address1    :   this.state.address1,
                address2    :   this.state.address2,
                city        :   this.state.city,
                needs       :   this.state.needs
            }),
          }).then((response) => response.json())
               
              .catch((error) => {
                console.error(error);
              });
      }

     

 
    render(){
        return(
            <ImageBackground source={ require('../../res/img/bg_res.jpg')} style={styles.ImgBg}>
            <View style={styles.main}>
            
                <ScrollView style={styles.body}>
                    <TouchableOpacity style={{ alignItems:'center' }}>
                    <View>
                        <Image source={require('../../res/img/location.png')}/>
                        <Text>Locate with GPS</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <Text style={styles.label}>District</Text>
                    <Picker 
                        selectedValue={this.state.district}
                        style={{backgroundColor:'white'}} 
                        itemStyle={{backgroundColor:'white'}} 
                        onValueChange={(itemValue, itemIndex) => this.setState({district: itemValue})}>

                        <Picker.Item label="Kollam" value="kollam" />
                        <Picker.Item label="Trivandrum" value="trivandrum" />
                        <Picker.Item label="Kozhikkodu" value="kozhikkodu" />
                        <Picker.Item label="Alappuzha" value="alappuzha" />
                    </Picker>

                    {/* <TextInput style={styles.input}/> */}

                    <Text style={styles.label}>Address line #1</Text>
                    <TextInput style={styles.input} 
                    onChangeText={(address1) => this.setState({address1})}
                    value={this.state.address1}
                    />
  
                    <Text style={styles.label}>Address line #2</Text>
                    <TextInput style={styles.input} 
                    onChangeText={(address2) => this.setState({address2})}
                    value={this.state.address2}
                    />

                    <Text style={styles.label}>city/ Village</Text>
                    <TextInput style={styles.input} 
                    onChangeText={(city) => this.setState({city})}
                    value={this.state.city}
                    />

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
               
              onChangeText={(needs) => this.setState({needs})}
              value={this.state.needs}
              
            />
                 

                
                    
                    <TouchableOpacity onPress={this._onSubmit}> 
                        <Image style={{ width:'100%', borderRadius:5, marginTop:8 }} source={require('../../res/img/submit.png')}/> 
                    </TouchableOpacity>

                </ScrollView>
            
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    main:{
        justifyContent:'center',
        height:"90%",
        marginBottom:20
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
        width:"96%", 
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