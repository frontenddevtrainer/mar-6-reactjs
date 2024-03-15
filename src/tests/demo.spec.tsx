import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"
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

  test("Counter update", async ()=>{
    render(<Demo message="React Learning"/>);
    screen.getByText("Counter: 0") 
    const button = screen.getByRole("button")
    await userEvent.click(button);
    screen.getByText("Counter: 1") 

  })


  
})

