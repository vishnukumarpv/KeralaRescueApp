import React, { Component } from 'react';
import {
    StyleSheet, View, Image,
     Button, Text,
      ImageBackground,
      TextInput,
      ScrollView,
      TouchableHighlight,
      FlatList,
      TouchableOpacity
    } from 'react-native';
 
    class PersonsListItem extends React.PureComponent {
 
      
        render() {  
          return (
            <TouchableOpacity >
              <View style={{ borderColor:"#ddd", borderWidth:2, padding:5, paddingLeft:10}}>
                <View style={{  flexDirection: 'row', width:"100%" }}>
                        <View style={{ width: "70%"}}>
                            <Text style={{  fontWeight:'bold', fontSize:21 }}>
                            {this.props.name}
                            </Text>
                            <Text style={{ fontSize:17 }}>
                                {this.props.address}
                            </Text>
                        </View>
                        <View style={{ width: 100, flexDirection: 'row', alignContent:'flex-end'}}>
                            <TouchableHighlight>
                                <Image  source={require('../../res/img/phone.png')}/>
                            </TouchableHighlight>
                            <TouchableHighlight style={{ paddingLeft:5}}>
                                <Image  source={require('../../res/img/locate.png')}/>
                            </TouchableHighlight>
                        </View> 
                </View>

                <View  style={{width:"100%", flex:1}}>
                <Text>
                    {this.props.needs}
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }
      }






export default class ICanHelp extends Component{

    constructor(props) {
        super(props);
        this.state = {
          text: '',
          data: [
                {id:1, name: 'Raveendran', address: 'Raju vilas', needs: 'cloths ext sjhj hg'}, 
                {id:2, name: 'Raveendran', address: 'Raju vilas', needs: 'cloths ext sjhj hg'}, 
                {id:2, name: 'Raveendran', address: 'Raju vilas', needs: 'cloths ext sjhj hg'}, 
                {id:2, name: 'Raveendran', address: 'Raju vilas', needs: 'cloths ext sjhj hg'}, 
                {id:2, name: 'Raveendran', address: 'Raju vilas', needs: 'cloths ext sjhj hg'}, 
                {id:2, name: 'Raveendran', address: 'Raju vilas', needs: 'cloths ext sjhj hg'}, 
            ]
        }; 

        this._fetchFromServer();
      }


      _fetchFromServer = () => {

        fetch('http://169.254.180.17/test.php', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                this.state.data =  responseJson; 
              })
              .catch((error) => {
                console.error(error);
              });
      }
 

      _keyExtractor = (item, index) => item.id;


 


    _renderItem = ({item}) => (
            <PersonsListItem
            // id={item.id}  
            name={item.name}
            address={item.address}
            needs={item.needs}
            />
    )
    render(){
        return(
            <View style={styles.main}>
            <ImageBackground source={ require('../../res/img/bg_res.jpg')} style={styles.ImgBg}>
                <View style={styles.body}>
                
                    <TouchableHighlight style={{ alignItems:'center' }}>
                    <View>
                        <Image source={require('../../res/img/location.png')}/>
                        <Text>Locate with GPS</Text>
                    </View>
                    </TouchableHighlight>
                    
                    <Text style={styles.label}>District</Text>
                    <TextInput style={styles.input}/>

      <FlatList
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />

 

                </View>
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