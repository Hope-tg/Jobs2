import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
// import GlobalApi from '../../Utilis/GlobalApi';

export default function Slider() {



  
  return (
    <View className=" px-4 mt-5">
      <Text className=" font-semibold text-lg">Offers for you</Text>
      <ScrollView horizontal= {true} className="mt-2 flex-row gap-x-5 ">
        <View className="flex items-center justify-center h-[140px] w-[300px] object-fill  rounded-2xl ">
          <Image
            className=" h-full w-full rounded-2xl"
            source={require("../../../assets/Images/Slider1.png")}
          />
        </View>
        <View className="flex items-center justify-center h-[140px] w-[300px] object-fill  rounded-2xl ">
          <Image
            className=" h-full w-full rounded-2xl"
            source={require("../../../assets/Images/Slider2.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
}