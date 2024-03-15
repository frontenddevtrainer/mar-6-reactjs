import { render, screen } from "@testing-library/react";
import Demo from "../components/demo/demo"

describe("Demo Component", ()=>{
  
  test("demo test", () => {
    render(<Demo/>);
    const text = screen.getByText("hello world!!!");
    expect(text).toBeTruthy();
  });

  test("demo test with message prop", () => {
    render(<Demo message="React Learning"/>);
    const text = screen.getByText("React Learning");
    expect(text).toBeTruthy();
  });

  test("demo test has a button with Click text", () => {
    render(<Demo message="React Learning"/>);
    const text = screen.getByText("React Learning");
    const button = screen.getByRole("button")
    expect(button).toBeTruthy();
    expect(button.textContent).toBe("Click")
    expect(text).toBeTruthy();
  });


  
})

