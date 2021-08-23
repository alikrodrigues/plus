import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import EventsAvailable from "./src/pages/EventsAvailable";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f8f8" }}>
      <EventsAvailable />
    </SafeAreaView>
  );
}
