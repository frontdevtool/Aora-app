import { View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function Trending({ latestPosts }) {
  // console.log('latestPosts: ', latestPosts);
  return (
    <FlatList
      horizontal
      data={latestPosts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        // <Image
        //   // source={{ uri: item.thumbnail }}
        //   width={250}
        //   height={300}
        //   className=" rounded-xl mt-3 bg-red-300"
        //   resizeMode="contain"
        // />
        // <Text className=" text-white"> {item.title} </Text>
        <View className=" text-white w-52 h-72 bg-red-400 rounded-lg mx-1"> {item.title} </View>
      )}
    />
  );
}
