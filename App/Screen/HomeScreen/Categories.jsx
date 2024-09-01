import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Colors from "../../Utilis/Colors";

export default function Categories() {
  return (
    <View className=" px-4 mt-5">
      <View className=" flex flex-row justify-between items-center">
        <Text className=" font-semibold text-lg">Categories</Text>
        <Text style={{ color: Colors.PRIMARY }} className=" font-semibold ">
          View all
        </Text>
      </View>
      <ScrollView horizontal={true} className="mt-2 flex-row gap-x-5 ">
        <View className="flex-1 items-center">
          <View className="flex items-center justify-center h-[65px] w-[65px] object-fill mb-1  rounded-full bg-violet-200 ">
            <Image
              className=" h-1/2 w-1/2  object-cover"
              source={require("../../../assets/Images/mop.png")}
            />
          </View>
          <Text>Cleaning</Text>
        </View>
        <View className="flex-1 items-center">
          <View className="flex items-center justify-center h-[65px] w-[65px] object-fill mb-1  rounded-full bg-yellow-100 ">
            <Image
              className=" h-1/2 w-1/2  object-cover"
              source={require("../../../assets/Images/support.png")}
            />
          </View>
          <Text>Repairing</Text>
        </View>
        <View className="flex-1 items-center">
          <View className="flex items-center justify-center h-[65px] w-[65px] object-fill mb-1  rounded-full bg-green-200 ">
            <Image
              className=" h-1/2 w-1/2  object-cover"
              source={require("../../../assets/Images/paintbrush.png")}
            />
          </View>
          <Text>Painting</Text>
        </View>
        <View className="flex-1 items-center">
          <View className="flex items-center justify-center h-[65px] w-[65px] object-fill mb-1  rounded-full bg-orange-200 ">
            <Image
              className=" h-1/2 w-1/2  object-cover"
              source={require("../../../assets/Images/cargo-truck.png")}
            />
          </View>
          <Text>Shifting</Text>
        </View>
      </ScrollView>
    </View>
  );
}
