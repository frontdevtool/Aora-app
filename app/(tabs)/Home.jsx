import { View, Text, FlatList, Image, RefreshControl, Alert } from "react-native";

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";

const Home = () => {false

const [refreshing, setRefreshing] = useState(true)
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
  
setIsLoading(true)

const fetchData= async()=>{

    
    try {
        const response = await getAllPosts()
        setData(response)
    } catch (error) {
        Alert.alert('error' , error.message)
    }finally{
        setIsLoading(false)
    }

}
fetchData()
}, [])

const onRefresh=()=>{
setRefreshing(true)
// re call vedios
setRefreshing(false)
}
return (
<SafeAreaView className={"bg-primary h-full border-red-500 border-2"}>
    <FlatList // data={[{ id: 1 }, { id: 2 }]} keyExtractor={(item)=> item.id}
        renderItem={({ item, index }) => (
        <>
            <Text> {item.id} </Text>
        </>
        )}
        ListHeaderComponent={() => (
        <View className="my-7 space-y-7 px-7  border">
            <View className='flex-row justify-between items-center my-5'>
                <View className=''>
                    <Text className="text-1xl text-gray-400"> Welcome back </Text>
                    <Text className="text-2xl text-white"> Jsmastry </Text>
                </View>
                <View className=''>
                    <Image source={images.logoSmall} className="w-10 h-10" resizeMode="contain" />
                </View>
            </View>
            <SearchInput placeholder={'search for videos topic'} />
            <View className='mt-5  w-full'>
                <Text className="text-white">Latest vedios</Text>
                <Trending posts={[{id:1},{id:2}] ??[]} />
            </View>
        </View>
        )}
        ListEmptyComponent={()=>
        <EmptyState title='no Videos ' subtitle='Be first one upload videos' />}
        refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
        />
</SafeAreaView>
);
};

export default Home;
