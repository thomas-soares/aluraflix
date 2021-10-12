import { Stylesheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = Stylesheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.primary,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
  },
});
