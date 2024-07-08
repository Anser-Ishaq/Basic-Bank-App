import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/login';
import Logout from './src/components/LogOut';
import Register from './src/components/Register';
import Dashboard from './src/components/Dashboardapp';
import Drawerhelper from './src/components/Drawerhelper';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
          
        />
        <Stack.Screen 
        name="Register" 
        component={Register} 
        />
        <Stack.Screen 
        name="MainDashboard" 
        component={Drawerhelper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack