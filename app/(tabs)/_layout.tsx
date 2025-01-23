import { Tabs } from 'expo-router';
import React from 'react';
import { Iconify } from 'react-native-iconify';
import Colors from '@/constants/Colors';
import CustomTabBar from '@/components/CustomTabBar';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { ButtonBottomTab } from '@/components/ButtonBottomTab';

export default function TabLayout() {

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: "red",
        headerShown: false,
      
        tabBarIconStyle: {
          width: 30,
          height: 30,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 0,
          // backgroundColor: Colors.BackgroundPrimaryRgba,
        },

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
        
          tabBarIcon: ({ color, focused }) => <ButtonBottomTab focused={focused} ><Iconify size={28} icon='material-symbols-light:home-rounded' color={color} /></ButtonBottomTab>,
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: '',
        
          tabBarIcon: ({ color, focused }) => <ButtonBottomTab focused={focused} ><Iconify size={28} icon='solar:cart-large-linear' color={color} /></ButtonBottomTab>,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: '',
        
          tabBarIcon: ({ color, focused }) => <ButtonBottomTab focused={focused} ><Iconify size={28} icon='mynaui:heart' color={color} /></ButtonBottomTab>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
        
          tabBarIcon: ({ color, focused }) => <ButtonBottomTab focused={focused} ><Iconify size={28} icon='solar:settings-linear' color={color} /></ButtonBottomTab>,
        }}
      />


    </Tabs>
  );
}
