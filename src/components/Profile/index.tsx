import React from "react";
import { View, Text } from "react-native";

import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  return (
    <View>
      <Avatar />
      <View>
        <View>
          <Text style={{styles.greeting}}>Olá</Text>
          <Text>Thomas</Text>
        </View>
      </View>
    </View>
  );
}


