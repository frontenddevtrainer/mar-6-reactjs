import { render, screen } from "@testing-library/react";
import Demo from "../components/demo/demo"


test("demo test", () => {
  render(<Demo/>);
  const text = screen.getByText("hello world!!!");
  expect(text).toBeTruthy();
});
