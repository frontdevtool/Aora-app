import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React from "react";
import "./global.css";
import { Button } from "react-native-paper";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
export default function index() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-start items-center min-h-[85vh] w-full px-4 ">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] "
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full "
            resizeMode="contain"
          />
          <View className="mt-5 relative">
            <Text className="text-white text-3xl font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
              <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain"/>
          </View>
              <Text className="text-sm mt-7 text-gray-100 font-pregular text-center">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
       <Button mode="contained" buttonColor="#FF8E01" textColor="black"  className=" w-80 mt-8"> go with email</Button>
        </View>
      </ScrollView>
      <StatusBar barStyle={''} backgroundColor={'#161622'}/>
    </SafeAreaView>
  );
}
