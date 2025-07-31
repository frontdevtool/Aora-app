import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function Trending({posts}) {
  return (
   <FlatList
   horizontal
   data={posts}
   keyExtractor={(item)=>item.id}
   renderItem={({item})=><Text className='text-white'> {item.id} </Text>}
   />
  )
}