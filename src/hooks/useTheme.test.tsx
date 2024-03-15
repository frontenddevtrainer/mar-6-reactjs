import { renderHook, act, render, screen, waitFor, fireEvent } from "@testing-library/react";
import { useTheme } from "./useTheme";
import { ThemeOptions, ThemeProvider } from "../context/theme";

describe("useTheme hook", () => {
  test("should have intial value for them", () => {
    const wrapper = ({ children }: any) => {
      return <ThemeProvider>{children}</ThemeProvider>;
    };

    const { result } = renderHook(
      () => {
        return useTheme();
      },
      { wrapper }
    );

    expect(result.current.theme).toBe(ThemeOptions.dark);
    act(() => {
      result.current.change(ThemeOptions.light);
    });
    expect(result.current.theme).toBe(ThemeOptions.light);
  });

  test("Test theme in component", async () => {
    const TestComponent = () => {
      const { change, theme } = useTheme();

      return (
        <ThemeProvider>
          <div>
            {/* Component 1 */}
            <p>Theme: {theme}</p>
            {/* Component 2 */}
            <button
              onClick={() => {
                change(ThemeOptions.light);
              }}
            >
              Click
            </button>
          </div>
        </ThemeProvider>
      );
    };

    render(<TestComponent />);

    expect(screen.getByText(`Theme: ${ThemeOptions.dark}`));
    fireEvent.click(screen.getByRole("button"));

    await waitFor(()=>{
        expect(screen.getByText(`Theme: ${ThemeOptions.light}`));
    })

    

  });
});
