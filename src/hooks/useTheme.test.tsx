import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./useTheme";
import { ThemeOptions, ThemeProvider } from "../context/theme";

describe("useTheme hook", () => {
  test("should have intial value for them", () => {
    const wrapper = ({ children }: any) => {
      return <ThemeProvider>{children}</ThemeProvider>;
    };

    const { result } = renderHook(() => {
      return useTheme();
    }, { wrapper });

    expect(result.current.theme).toBe(ThemeOptions.dark);
    act(()=>{
        result.current.change(ThemeOptions.light);
    })
    expect(result.current.theme).toBe(ThemeOptions.light);
  });
});
