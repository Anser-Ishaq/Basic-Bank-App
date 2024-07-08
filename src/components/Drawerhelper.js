import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from './EditProfile';
import Logout from './LogOut';
import Dashboard1 from './Dashboardapp';  // Import Dashboard component
import Login from './login';

const Drawer = createDrawerNavigator();

export default function Drawerhelper() {
  return (
    
      <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="MainDashboard" component={Dashboard1} />
        <Drawer.Screen name="Edit Profile" component={EditProfile} />
        <Drawer.Screen name="Logout" component={Login} />
      </Drawer.Navigator>
    
  );
}
