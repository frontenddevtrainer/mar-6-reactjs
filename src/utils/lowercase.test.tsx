import { lowercase } from "./lowercase"

test("Test lowercase function", ()=>{
    const result = lowercase("ABC");
    expect(result).toBe("abc");
})