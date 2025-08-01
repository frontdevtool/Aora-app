import { useState } from "react";
// import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
  // console.log("thumbnail: ", thumbnail);
  const [play, setPlay] = useState(false);

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      <TouchableOpacity>
        <Image
          // source={{ uri: 'https://picsum.photos/seed/R5hqA/1930/157?grayscale&blur=3' }}
          source={{ uri: thumbnail }}
          width={320}
          height={250}
           className=" rounded-xl mt-3 bg-red-300"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoCard;
