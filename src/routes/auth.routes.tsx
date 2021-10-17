import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator;

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn}></Screen>
    </Navigator>
  );
}
