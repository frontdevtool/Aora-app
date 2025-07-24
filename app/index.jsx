import { View, Text } from 'react-native'
import React from 'react'
import './global.css'
import { Button } from 'react-native-paper'
export default function index() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl bg-red-400'>index</Text>
      <Button mode='contained'>hi</Button>
    </View>
  )
}