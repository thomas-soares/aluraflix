import React from "react";
import { View } from "react-native";
import { styles } from "../Avatar/styles";

export function Category() {
  return (
    <View style={checked ? styles.checked : styles.check}>
      <Icon width={48} height={48} />
    </View>
  );
}
