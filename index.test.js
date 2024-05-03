import { capitalize } from "./index";

test("First capitalize() test", () => {
	expect(capitalize("europa")).toBe("Europa");
});

test("Second capitalize() test", () => {
	expect(capitalize("Mangiare")).toBe("Mangiare");
});
