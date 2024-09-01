import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Screen/Navigations/TabNavigation";
import Login from "./App/Screen/LoginScreen/Login";

import HomeScreen from "./App/Screen/HomeScreen/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
