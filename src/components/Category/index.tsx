import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({ title, icon, checked = false, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <linearGradient style={styles.container}>
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
        </View>
        <Image source={{ uri: UrlImage }} style={styles.avatar} />
        <Text style={styles.title}>{text}</Text>
      </linearGradient>
    </RectButton>
  );
}
