import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { getAllPosts, getLatestPosts } from "../../lib/server";
import  useServer  from "../../lib/useServer";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import VideoCard from "@/components/VedeoCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
//   console.log("data: ", data);

const {data : posts , refetch }= useServer(getAllPosts)
const {data : latestPosts  }= useServer(getLatestPosts)
// console.log('posts: ', posts);

  const onRefresh = async() => {
    setRefreshing(true);
    // re call vedios
   await refetch()
    setRefreshing(false);
  };
  return (
    <SafeAreaView className={"bg-primary  border-2 border-red-400"}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
            <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            // video={item.video}
            creator={item.userName}
            avatar={item.avatar}
          />
        )
    }
        ListHeaderComponent={() => (
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
            <View className="mt-5 flex-1 bg-sky-300  w-full">
              <Text className="text-white">Latest vedios</Text>
              <Trending latestPosts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="no Videos "
            subtitle="Be first one upload videos"
          />
        )}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
