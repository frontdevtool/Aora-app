import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const SettingsScreen = () => {
  
  const route =  useRoute()
      
      const navigation = useNavigation();

  console.log('route: ', route);
  // console.log('name: ', route.name);
  // console.log('params: ', route.params);
  // console.log('path: ', route.path);
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>SettingsScreen</Text>
      <Text> name : {route.name}</Text>
      <Text> name : {route.params?.name}</Text>
          <Button mode="contained" onPress={() => navigation.navigate("home" )} >
        Go to home
      </Button>
    </View>
  )
}

export default SettingsScreen