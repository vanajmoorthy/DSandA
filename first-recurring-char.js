// Vanaj Moorthy. 21st August 2020, ~ 5:40 am
// First Recurring Character

const firstRecurringChar = (inputString) => {
	inputString = inputString.toLowerCase();
	let storedChars = {};

	for (let i = 0; i < inputString.length; i++) {
		if (storedChars[inputString[i]]) {
			return inputString[i];
		}
		storedChars[inputString[i]] = 1;
	}

	return null;
};

const inputString = "e?lo, hw are you??";

console.log(firstRecurringChar(inputString));
