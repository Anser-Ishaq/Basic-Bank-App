import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Logout = () => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.Button}>
            <Text style={{color:'white'}}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
    backgroundColor:'#007bff',
    height:40,
    width:80,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,

  },
});
export default Logout;