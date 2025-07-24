import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function ProfileScreen() {
   const navigation = useNavigation();
const route =  useRoute()
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-4xl'> Profile Screen</Text>
      {/* <Text> name : {route.params.name}</Text>
       <Button mode="contained" onPress={() => navigation.navigate("settings")} >
        Go to settings
      </Button> */}
    </View>
  );
}
