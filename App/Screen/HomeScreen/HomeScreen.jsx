import { ScrollView,StatusBar, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import Latest from "./Latest";

export default function HomeScreen() {
  return (
    <ScrollView >
        <View className ='bg-gray-100'>
          <Header/> 
           {/*slider component  */}
           <Slider/>
           {/* categories coponent */}
           <Categories/>
           {/* latest Business */}
           <Latest/>
        </View>
      
    </ScrollView>
  );
}
