import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  user: {
    flexDirection: "row",
  },
  greeting: {
    fontFamily: theme.fonts.title500,
  },
});
