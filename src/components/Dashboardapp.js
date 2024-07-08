import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const Dashboard1 = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.main}>
                <View style={styles.Container1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.Brand}>Intellect Dive</Text>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name="menu" size={35} color='#009177' style={{marginLeft:232}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Container2}>
                    <Text style={styles.Balance}>Balance Check</Text>
                </View>
                <View style={styles.Container3}>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: '400' }}>User Identity:</Text>
                        <Text style={{ marginLeft: 200, fontSize: 12, fontWeight: '400' }}>User ID Number:</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#009177' }}>User000</Text>
                        <Text style={{ marginLeft: 200, fontSize: 16, fontWeight: '700' }}>112233445566</Text>
                    </View>
                </View>
                <View style={styles.Container4}>
                    <Text style={{ fontSize: 19, fontWeight: '300', color: '#3D3D3D' }}>Balance</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, fontWeight: '700', color: '#151515' }}>Rs 100000.00</Text>
                        <Image source={require('../../assets/eye.png')} style={styles.eye} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    Container1: {
        height: 74,
        width: '100%',
        marginTop: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#404040',
        paddingLeft: 10,
    },
    Container2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009177',
        height: 64,
        width: '100%',
    },
    Container3: {
        backgroundColor: 'white',
        height: 64,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    Container4: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 20,
        justifyContent: 'center',
        height: 190,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#A5A5A5',
        width: 366,
    },
    Balance: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
    },
    Brand: {
        fontSize: 16,
        fontWeight: '700',
        color: '#282828',
    },
    eye: {
        marginTop: 18,
        marginLeft: 10,
    },
});

export default Dashboard1;
