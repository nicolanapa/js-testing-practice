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
	expect(calculator.add(1, 2)).toBe(1 + 2);
});

test("1 subtract 2 returns -1", () => {
	expect(calculator.subtract(1, 2)).toBe(1 - 2);
});

test("1.5 / 2 returns " + 1.5 / 2, () => {
	expect(calculator.divide(1.5, 2)).toBe(1.5 / 2);
});

test("1.2 * 2.56 returns " + 1.2 * 2.56, () => {
	expect(calculator.multiply(1.2, 2.56)).toBe(1.2 * 2.56);
});

// CaesarCipher

// AnalyzeArray

test("Analyzing [1, 8, 3, 4, 2, 6]", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test("Analyzing []", () => {
	expect(analyzeArray([])).toStrictEqual({
		average: 0,
		min: 0,
		max: 0,
		length: 0,
	});
});
