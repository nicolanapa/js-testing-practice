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

function calculator() {}

function caesarCipher() {}

function analyzeArray() {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
