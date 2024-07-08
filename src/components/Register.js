
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Button, } from 'react-native';


const Register = () => {
   



    return (

        <SafeAreaView style={styles.main}>
            <View style={styles.container} >
                <View style={styles.logoContainer}>
                    <Text style={styles.register}>Register</Text>
                    <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
                    <Text style={styles.Company}>Intellect Dive</Text>
                </View>
            </View>

            <View style={styles.ContentContainer}>
                <Text style={styles.txt1}>
                Please fill the information below
                </Text>
                <Text style={styles.txt2}>
                Fill your account’s profile information and password
                </Text>
                <Text style={styles.heading}>
                    Username
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="User000"
                    placeholderTextColor={'grey'}
                />
                   <Text style={styles.heading}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="User000 @gmail.com"
                    placeholderTextColor={'grey'}
                />
                   <Text style={styles.heading}>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="User Password"
                    placeholderTextColor={'grey'}
                />
                <Text style={styles.heading}>
                    Confirm Password
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="User Password"
                    placeholderTextColor={'grey'}
                />
                <View style={{position:'relative'}}>
                <TouchableOpacity style={styles.Button}>
                <Image source={require('../../assets/ButtonPic.png')} style={styles.icon}/>
                    <Text style={styles.ButtonText}>Register</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    main: {
        // display:'block',
        backgroundColor: '#009177',
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: '#009177',
        height: 240,
    },
    logoContainer: {
        height: 250,
        width: 250,
        borderRadius: 100,
        backgroundColor: "#009177",
        alignSelf: "center",
        flexDirection:'column',
        position: "relative"

    },
    logo: {
        position: 'absolute',
        alignSelf:'center',
        top: 115,
        width: 74,
        height: 74,
        borderRadius: 100
    },
    Company:{
        fontSize: 16,
        fontWeight:'600',
        color:'white',
        top:165,
        alignSelf:'center',
    
    },
    ContentContainer: {
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        height:600,
    },

    heading: {
        fontSize: 10,
        fontWeight: '700',
        marginTop:15,
        marginBottom:9,

    },
    input: {
        padding: 10,
        borderBlockColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        height: 40,

    },

    Button: {
        backgroundColor: '#24A0ED',
        alignItems: 'center',
        width: 350,
        height: 40,
        marginVertical: 39,
        borderRadius: 8,
    },
    ButtonText: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: '600',
        marginTop: 7,
    },
    txt1: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 30,
        color: '#151515',


    },
    icon:{
        width:17,
        height:17,
        position:'absolute',
        top:10,
        left:120,

    },
    txt2: {
        fontSize: 16,
        fontWeight: '300',
        marginTop: 10,
        color: '#151515',

    },
    register:{
        fontSize: 24,
        fontWeight:'700',
        color:'white',
        top:65,
        alignSelf:'center',    
    },
   

});

export default Register;