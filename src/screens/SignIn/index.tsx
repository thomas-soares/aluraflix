import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

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
