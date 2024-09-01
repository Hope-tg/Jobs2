import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import ProfileScreen from "../ProfileScrren/ProfileScreen";
import BookingScreen from "../BookingScreen/BookingScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8E3FFF",
    
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 16, color: color }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 16, color: color }}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark-o" size={20} color={color} />
          ),
        }}
        name="Booking"
        component={BookingScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 16, color: color }}>Profil</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={20} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
