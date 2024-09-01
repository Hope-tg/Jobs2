import { StatusBar, View, Text, Image, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className=" flex-1 flex-col gap-y-7 px-4 bg-[#8E3FFF] h-[180px] rounded-b-2xl w-full py-5 ">
      <StatusBar />
      <View className=" h-max-[40%]  flex flex-row items-center">
        <View className=" flex-1 flex-row items-start  gap-x-2">
          <FontAwesome name="user-circle-o" size={38} color="#0018" />
          <View className="flex items-start justify-start p-0">
            <Text className="text-white text-[14px]">Welcome ,</Text>
            <Text className="text-white text-[16px]">Jason DEV</Text>
          </View>
        </View>
        <View>
          <FontAwesome name="bookmark-o" size={28} color="white" />
        </View>
      </View>
      <View className=" flex flex-row justify-between gap-x-2 h-[40px] ">
        <View className=" h-full w-[85%]  flex-row items-center">
          <TextInput
            className="border-2 border-white rounded-lg bg-white h-full w-full px-2 font-semibold text-[#29114b]"
            placeholder="Search"
          />
        </View>
        <View className="p-2 h-full w-[11%] rounded-lg bg-white">
          <FontAwesome name="search" size={24} color="#8E3FFF" />
        </View>
      </View>
    </View>
  );
}
