
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Button, StatusBar } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { permission, pickimage } from './imagepicker';



const Editprofile = ({ navigation }) => {

    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        permission();
    }, []);

    const handlePickImage = async () => {
        const pic = await pickimage();
        if (pic) {console.log(pic.assets[0].uri);
            setProfileImage(pic.assets[0].uri);
        }
    };

    return (
        <>
            {/* <StaatusBar barStyle="dark-content" /> */}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={styles.ContainerA}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.Brand}>
                            Intellect Dive
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('MainDashboard')} style={{ marginLeft: 180 }}>
                            <Image source={require('../../assets/home.png')} />
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name="menu" size={35} color='#009177' style={{ marginLeft: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ContainerB}>
                    <Text style={styles.Balance}>
                        Edit Profile
                    </Text>
                </View>
                <View style={styles.ContainerC}>
                    <Text style={styles.Profile}>
                        Profile Information
                    </Text>
                    <Text style={styles.update}>
                        Update your account’s profile information
                    </Text>

                    <TouchableOpacity onPress={handlePickImage}>
                        <View style={styles.imageContainer}>
                    
                                <Image source={profileImage ? {uri : profileImage} :  require('../../assets/logo.jpg')} style={styles.image} />

                        </View>
                    </TouchableOpacity>
                    {/* <Button title="Select Image from Gallery" onPress={handlePickImage} /> */}
                    <Text style={styles.text}>Username </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='  User000'
                    />
                    <Text style={styles.text1}>Email </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='  abc@gmail.com'
                    /><Text style={styles.text1}>Phone No </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='  03001122333'
                    /><Text style={styles.text1}>Password </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='  Enter Your Password'
                        secureTextEntry={true}
                    />
                    <View style={{ position: 'relative' }}>
                        <TouchableOpacity style={styles.Button}>
                            <Image source={require('../../assets/ButtonPic.png')} style={styles.icon} />
                            <Text style={styles.ButtonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

    ContainerA: {
        height: 74,
        width: "100%",
        marginTop: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#404040',
        paddingLeft: 10,
    },
    ContainerB: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009177',
        height: 64,
        width: '100%'
    },
    imageContainer:{
        height: 100,
        marginTop:20,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",


    },
    ContainerC: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 30,

    },

    Balance: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
    },
    input: {
        marginTop: 5,
        borderBlockColor: 'black',
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
    },
    Brand: {
        fontSize: 16,
        fontWeight: '700',
        color: '#282828',

    },
    update: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 10,
    },
    text: {
        fontSize: 10,
        marginTop: 10,
        paddingLeft: 3,
        // marginBottom:5,
        color: '#585858',
        fontWeight: '700',
    },
    text1: {
        fontSize: 10,
        marginTop: 10,
        paddingLeft: 3,
        color: '#585858',
        fontWeight: '700',
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
    },
    Profile: {
        fontWeight: '500',
        fontSize: 16,
        color: '#151515',
        paddingTop: 60,
    },
    Button: {
        backgroundColor: '#24A0ED',
        alignItems: 'center',
        // width: 335,
        height: 40,
        marginVertical: 45,
        borderRadius: 8,
    },
    ButtonText: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: '600',
        marginTop: 7,
    },
    icon: {
        width: 17,
        height: 17,
        position: 'absolute',
        top: 10,
        left: 110,

    },





});

export default Editprofile;