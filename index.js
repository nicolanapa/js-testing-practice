function capitalize(phrase) {
	if (phrase[0].charCodeAt() >= 97 && phrase[0].charCodeAt() <= 122) {
		let temp = phrase.slice(0, 1);
		temp = String.fromCharCode(phrase[0].charCodeAt() - 32);
		phrase = temp + phrase.slice(1);
	}

	return phrase;
}

function reverseString(phrase) {
	let reversedPhrase = "";

	for (let i = phrase.length - 1; i >= 0; i--) {
		reversedPhrase += phrase[i];
	}

	return reversedPhrase;
}

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

function caesarCipher() {}

function analyzeArray(array) {
	
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
