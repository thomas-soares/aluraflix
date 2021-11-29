import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View } from "react-native";

export type AppointmentProps = {
  id: string;
  guild: GuildProps;

};

type Props = RectButton & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  return (
    <RectButton {...rest}>
    </RectButton>
  );
}
