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
          <Text style={{styles.username}}>Thomas</Text>
        </View>
          <Text style={{styles.message}}>Hoje é dia de vitoria</Text>
      </View>
    </View>
  );
}


