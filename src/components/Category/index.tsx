import React from "react";
import { Text, View } from "react-native";
import { styles } from "../Avatar/styles";
import { RectButton } from "react-native-gesture-handler";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({ title, icon, checked = false }) {
  return (
    <RectButton>
      <linearGradient style={styles.container}>
        <View style={checked ? styles.checked : styles.check}>
          <Icon width={48} height={48} />
        </View>
        <Text style={styles.title}>{text}</Text>
      </linearGradient>
    </RectButton>
  );
}
