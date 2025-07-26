import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const TabLayout = () => {
  return (
   <Tabs screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          // tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 4,
            borderTopColor: "#232533",
            height: 100,
          },
        }}>
    <Tabs.Screen name='Home' options={{
      headerShown : false,
      title : 'Home',
      tabBarIcon :({color})=><Entypo name="home" size={24} color={color} />
      }}/>
    <Tabs.Screen name='Profile' options={{
      headerShown : false,
      title : 'Profile',
      tabBarIcon :({color})=><MaterialIcons name="account-circle" size={24} color={color} />
      }}/>
    <Tabs.Screen name='Create' options={{
      headerShown : false,
      title : 'Crete',
      tabBarIcon :({color})=><Ionicons name="add-circle" size={24} color={color}/>
      }}/>
    <Tabs.Screen name='Bookmark' options={{
      headerShown : false,
      title : 'Saved',
      tabBarIcon :({color})=><FontAwesome name="bookmark" size={24} color={color} />
      }}/>
   </Tabs>
  )
}

export default TabLayout