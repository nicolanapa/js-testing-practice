import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index";

test("capitalize(): europa", () => {
	expect(capitalize("europa")).toBe("Europa");
});

test("capitalize(): Mangiare", () => {
	expect(capitalize("Mangiare")).toBe("Mangiare");
});

test("capitalize(): 007", () => {
	expect(capitalize("007")).toBe("007");
});

test("reverseString(): alfonso sa Mangiare", () => {
	expect(reverseString("alfonso sa Mangiare")).toBe("eraignaM as osnofla");
});

test("reverseString(): eraignaM as osnofla", () => {
	expect(reverseString("eraignaM as osnofla")).toBe("alfonso sa Mangiare");
});
