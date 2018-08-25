import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
 

export default class Home extends Component{
    static navigationOptions = { header: null };
    render(){
        return(
            <View style={styles.main}>
            <ImageBackground source={ require('../../res/img/bg_res.jpg')} style={styles.ImgBg}>

                <View style={styles.header}>
                    <TouchableOpacity style={styles.touchable_big}>
                        <Image
                        style={styles.img_big_btn}  
                        source={require('../../res/img/help.png')}
                        />
                    </TouchableOpacity>

                <View style={styles.body_lays}>
                    <TouchableOpacity 
                    style={styles.touchable_g} 
                    onPress={() => this.props.navigation.navigate('Needhelp')} 
                    >
                        <Image
                        style={styles.img_btn} 
                        source={require('../../res/img/needhelp.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchable_g}
                    onPress={() => this.props.navigation.navigate('ICanHelp')} >
                        <Image
                        style={styles.img_btn} 
                        source={require('../../res/img/canhelp.png')}
                        />
                    </TouchableOpacity>

                </View>

                </View>

                <View style={styles.body_lays}>
                    <TouchableOpacity style={styles.touchable_g}>
                        <Image
                        style={styles.img_btn} 
                        source={require('../../res/img/donate.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchable_g}
                    onPress={() => this.props.navigation.navigate('HelpLines')}>
                        <Image
                        style={styles.img_btn} 
                        source={require('../../res/img/helpline.png')}
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.body_lays}>
                    <TouchableOpacity style={styles.touchable_g}>
                        <Image
                        style={styles.img_btn} 
                        source={require('../../res/img/volunteer.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchable_g}>
                        <Image
                        style={styles.img_btn} 
                        source={require('../../res/img/camps.png')}
                        />
                    </TouchableOpacity>

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
    header:{ 
        height:"68%", 
        alignItems:'center'
    },
    body_lays:{
        flexDirection: 'row',
        width:"80%",
        alignSelf : 'center',

    },


    touchable_g:{
        width:"50%",
        padding:10,
        flex: 1,
        alignItems:'center',
        borderColor:"white", 
    },
    img_btn:{  
        padding:10,
        paddingBottom:5,
        
    },
    img_big_btn:{   
        marginTop:"28%",  
    },
    touchable_big:{
        width:"80%",
        alignItems:'center'
    },
    ImgBg:{
        width:"100%",
        height:"100%",
      }
});

