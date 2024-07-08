
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Button, } from 'react-native';
import CheckBox from 'expo-checkbox';
const Login = ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
const handleRoute = ()=>navigation.navigate('MainDashboard')




    return (

        <SafeAreaView style={styles.main}>
            <View style={styles.container} >
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
                    <Text style={styles.Company}>Intellect Dive</Text>
                </View>
            </View>

            <View style={styles.ContentContainer}>
                <Text style={styles.heading}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={'grey'}
                />
                <Text style={styles.heading}>
                    Password
                </Text>
                <View style={styles.iconcontainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    secureTextEntry={true}
                />
                <Image source={require('../../assets/Vector.png')} style={styles.icon}/>
                </View>
                <View style={styles.Containercheckbox}>
                    <CheckBox
                        style={styles.checkbox}
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text style={styles.txt}>Remember me</Text>
                </View>
                <TouchableOpacity style={styles.Button} onPress={handleRoute}>
                    <Text style={styles.ButtonText}>Login</Text>
                </TouchableOpacity>
               <View style={styles.termcontainer}>
                <Text style={styles.txt1}>
                    Don't Have Account? 
                                 
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.txt2}>  Register</Text>
                    </TouchableOpacity>  
                </View>
                <View style={styles.termcontainer}>
                <Text style={styles.Term}>
                    I agree to the user 
                </Text>
                <TouchableOpacity style={styles.Button2}>
                    <Text style={{color:'#24A0ED', fontSize:10,}}> terms and conditions</Text>
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
        height: 300,
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
        top: 70,
        width: 100,
        height: 100,
        borderRadius: 100
    },
    Company:{
        fontSize: 24,
        fontWeight:'600',
        color:'white',
        top:180,
        alignSelf:'center',
    
    
    },
    ContentContainer: {
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        height:550,
    },
    Containercheckbox: {
        flexDirection: 'row',

    },
    heading: {
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 15,

    },
    iconcontainer:{
        position:'relative',

    },
    icon:{
        width:16,
        height:10,
        position:'absolute',
        alignSelf:'flex-end',
        top:20,
        right:10,

    },
    input: {
        padding: 10,
        borderBlockColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        height: 50,

    },
    checkbox: {
        height: 20,
        width: 20,
        marginTop: 20,
    },
    txt: {
        marginTop: 20,
        marginLeft: 10,
    },
    Button: {
        backgroundColor: '#24A0ED',
        alignItems: 'center',
        width: 180,
        height: 36,
        marginVertical: 39,
        marginLeft: 80,
        borderRadius: 8,
    },
    ButtonText: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: '600',
        marginTop: 5,
    },
    txt1: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 30,
        alignSelf: 'center',
        color: '#585858',


    },
    txt2: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 30,
        color: '#24A0ED',

    },
    Term: {
        fontSize: 10,
        alignSelf: 'center',
        fontWeight: '300',
    },
    Button2:{
        color:'#24A0ED',
        alignItems: 'center',    
    },
    termcontainer:{
        flexDirection: 'row',
        alignSelf:'center',
    },

});

export default Login;