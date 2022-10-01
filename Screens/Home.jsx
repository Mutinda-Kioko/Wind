import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './Dashboard';
import Functions from './Functions';
import Profile from './Profile';
import Analytics from './Analytics';


const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'black' }} 
    activeColor="white" >
          <Tab.Screen name="Dashboard" component={Dashboard}            //Home Screen
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26}/>
            ),
          headerShown: false
        }}/>
          <Tab.Screen name="Functions" component={Functions}      // Search Screen
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={26}/>
            ),
            headerShown: false
        }}/>
          <Tab.Screen name="Analytics" component={Analytics} 
     // Notification Screen
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26}/>
            ),
            headerShown: false
        }}/>
          <Tab.Screen name="Profile" component={Profile}   // Profile Screen
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-circle" color={color} 
    size={26}/>
            ),
            headerShown: false
        }}/>
        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})