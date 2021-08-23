import React from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export interface EventAvailableViewProps {
  events?: string[] | null;
}

const EventItemView = ({ item }) => {
  return (
    <View style={{ marginVertical: RFValue(8) }}>
      <Text>{item}</Text>
    </View>
  );
};

const EventsAvailableView = ({ events }: EventAvailableViewProps) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: RFValue(16),
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: RFValue(18) }}> Eventos disponiveis </Text>
      </View>
      <FlatList
        contentContainerStyle={{ marginVertical: RFValue(15) }}
        data={events}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <EventItemView item={item} />}
      />
    </View>
  );
};

export default EventsAvailableView;
