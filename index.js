// Capitalize

function capitalize(phrase) {
	if (phrase[0].charCodeAt() >= 97 && phrase[0].charCodeAt() <= 122) {
		let temp = phrase.slice(0, 1);
		temp = String.fromCharCode(phrase[0].charCodeAt() - 32);
		phrase = temp + phrase.slice(1);
	}

	return phrase;
}

// ReverseString

function reverseString(phrase) {
	let reversedPhrase = "";

	for (let i = phrase.length - 1; i >= 0; i--) {
		reversedPhrase += phrase[i];
	}

	return reversedPhrase;
}

// Calculator

let calculator = {
	add: (num1, num2) => {
		return num1 + num2;
	},
	subtract: (num1, num2) => {
		return num1 - num2;
	},
	divide: (num1, num2) => {
		return num1 / num2;
	},
	multiply: (num1, num2) => {
		return num1 * num2;
	},
};

// CaesarCipher

function encrypt(plainAlphabet, cipherAlphabet, plaintext) {
	let ciphertext = "";

	for (let i = 0; i < plaintext.length; i++) {
		let temp = plainAlphabet.indexOf(plaintext[i].toLowerCase());

		if (plaintext[i].charCodeAt() >= 97 && plaintext[i].charCodeAt() <= 122) {
			ciphertext += cipherAlphabet[temp].toLowerCase();
		} else if (plaintext[i].charCodeAt() >= 65 && plaintext[i].charCodeAt() <= 90) {
			ciphertext += cipherAlphabet[temp];
		} else {
			ciphertext += cipherAlphabet[temp];
		}
	}

	return ciphertext;
}

function caesarCipher(plaintext) {
	let plainAlphabet = [
		" ",
		".",
		",",
		"?",
		"!",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let cipherAlphabet = [
		"?",
		"!",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		" ",
		".",
		",",
	];

	return encrypt(plainAlphabet, cipherAlphabet, plaintext);
}

// AnalyzeArray

function analyzeArray(array) {
	let average = 0;
	let min = null;
	let max = null;
	let length = array.length;

	if (length === 0) {
		return {
			average: 0,
			min: 0,
			max: 0,
			length: 0,
		};
	}

	min = array[0];
	max = array[0];

	for (let i = 0; i < length; i++) {
		average += array[i];

		if (array[i] > max) {
			max = array[i];
		}
		if (array[i] < min) {
			min = array[i];
		}
	}

	average = average / length;

	return {
		average: average,
		min: min,
		max: max,
		length: length,
	};
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
