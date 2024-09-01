import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function Latest() {
  return (
    <View className=" px-4   mt-5">
      <View className=" flex flex-row justify-between items-center ">
        <Text className=" font-semibold text-lg">Latest Business</Text>
        <Text style={{ color: Colors.PRIMARY }} className=" font-semibold ">
          View all
        </Text>
      </View>

      <View className="  h-[240px] w-full mt-3  flex-row justify-between  ">
        <View className="bg-white w-[45%] p-2 h-[85%] rounded-lg">
          <View className=" h-[95px] w-full  ">
            <Image
              className="h-full w-full object-cover rounded-lg"
              source={require("../../../assets/Images/young.jpg")}
            />
          </View>
          <View>
            <Text className="text-base mt-1">House Cleaning</Text>
            <Text className="text-xs text-gray-500">Jenny Wilson</Text>
            <Text className=" w-[65px] text-center  rounded-tl-xl rounded-br-xl text-xs text-gray-800 p-1 mt-3 bg-violet-400 ">
              Cleaning
            </Text>
          </View>
        </View>
        <View className="bg-white w-[45%] p-2 h-[85%] rounded-lg">
          <View className=" h-[95px] w-full  ">
            <Image
              className="h-full w-full object-cover rounded-lg"
              source={require("../../../assets/Images/young2.jpg")}
            />
          </View>
          <View>
            <Text className="text-base mt-1">House Cleaning</Text>
            <Text className="text-xs text-gray-500">Emma Potter</Text>
            <Text className=" w-[65px] text-center rounded-tl-xl rounded-br-xl text-xs text-gray-800 p-1 mt-3 bg-violet-400 ">
              Cleaning
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
