import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Ínicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Animals"
        options={{
          title: "Animal",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="paw" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="biomas"
        options={{
          title: "biomas",
          tabBarIcon: ({ color }) => (
            <Ionicons name="earth" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Clima"
        options={{
          title: "Clima",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cloud-moon" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="aboutme"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
