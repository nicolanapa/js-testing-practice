import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index";

// Capitalize

test("capitalize(): europa", () => {
	expect(capitalize("europa")).toBe("Europa");
});

test("capitalize(): Mangiare", () => {
	expect(capitalize("Mangiare")).toBe("Mangiare");
});

test("capitalize(): 007", () => {
	expect(capitalize("007")).toBe("007");
});

// ReverseString

test("reverseString(): alfonso sa Mangiare", () => {
	expect(reverseString("alfonso sa Mangiare")).toBe("eraignaM as osnofla");
});

test("reverseString(): eraignaM as osnofla", () => {
	expect(reverseString("eraignaM as osnofla")).toBe("alfonso sa Mangiare");
});

// Calculator

test("1 add 2 returns 3", () => {
	expect(calculator.add(1, 2)).toBe(3);
});
