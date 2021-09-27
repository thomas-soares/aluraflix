import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

import { styles } from "./styles";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text>Hello World, NLW Together</Text>
      <TextInput style={styles.input} onChangeText={setText} />
      <Text>Você digitou: {text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
