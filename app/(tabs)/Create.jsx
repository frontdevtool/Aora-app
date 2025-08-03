import { View, Text, FlatList, Image ,Button } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useServer from '@/lib/useServer'
import { deletePost, getAllPosts, getLatestPosts } from '@/lib/server'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import { ActivityIndicator } from 'react-native-paper'

const Create = () => {

  const {data : posts , isLoading} = useServer(getAllPosts)
  console.log('isLoading: ', isLoading);

  const handleDelete= async(item)=>{
    console.log('item: ', item);
   
    const responce =   await deletePost(item)
    // console.log('responce: ', responce);
  }

  // console.log('posts: from create ', posts);
  return (
    <SafeAreaView>
      <Text>Create</Text>

      {/* {isLoading ? <ActivityIndicator /> :  <Text className='bg-blue-400 my-1 p-5'>  {item.title} </Text>} */}
      {isLoading ? (
  <View className="flex-1 justify-center items-center">
    <ActivityIndicator size={50} color='red' />
  </View>
) : (

        <FlatList
        data={posts}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>
     isLoading ? (
      <View className="p-5 items-center">
        <ActivityIndicator size={50} color="red" />
      </View>
    ) : (
      <View className="w-full flex-row justify-between items-center bg-blue-400 m-1">
        <Text className="my-1 p-5 w-full">{item.id}</Text>
        <Button title="delete" onPress={() => handleDelete(item)} />
      </View>
    )
    
    }
      ListHeaderComponent={()=>(
        <View className="my-7 space-y-7 px-7  border">
            <View className="flex-row justify-between items-center my-5">
              <View className="">
                <Text className="text-1xl text-gray-400"> Welcome back </Text>
                <Text className="text-2xl text-white"> Jsmastry </Text>
              </View>
              <View className="">
                <Image
                  source={images.logoSmall}
                  className="w-10 h-10"
                  resizeMode="contain"
                  />
              </View>
            </View>
            <SearchInput placeholder={"search for videos topic"} />
            <View className="mt-5 flex-1 border-green-400 border-2  w-full">
              <Text className="text-white">Latest vedios</Text>
              <Trending latestPosts={getLatestPosts ?? []} />
            </View>
          </View>
      )}
      
      />

    )}
    </SafeAreaView>
  )
}

export default Create