import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export const useTheme = () => {
  const { change, theme } = useContext(ThemeContext);
  return { change, theme };
};
