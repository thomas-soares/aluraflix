import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";

import { Category } from '../Category';

export function CategorySelect() {
  return <ScrollView horizontal style={styles.container}></ScrollView>;
}
