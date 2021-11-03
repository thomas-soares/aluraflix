import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View } from "react-native";

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
};

export function Appointment() {
  return <View style={styles.container}></View>;
}
