import { readFileSync } from 'fs';

// TEST
const examples = [112233, 123444, 111122];
const results = [true, false, true];
examples.forEach((example, ix) => {
	console.log('Test ' + ix + ' results in: ');
	console.log(meetsCriteria(example, [-100000000, 100000000]));
	console.log('expected: ');
	console.log(results[ix]);
});
// TEST END

const filePath: string = __dirname.concat('\\input.txt');
const rawInput = readFileSync(filePath)
	.toString()
	.split(/\-/)
	.sort()
	.map(Number);

const matchingPasswords = [];

for (let password = rawInput[0]; password <= rawInput[1]; password++) {
	if (meetsCriteria(password, rawInput)) {
		matchingPasswords.push(password);
	}
}

console.log('the number of matching passwords is: ', matchingPasswords.length);
function meetsCriteria(pw: number, range: number[]): boolean {
	if (!hasValidLength(pw)) {
		return false;
	}
	if (!isInRange(pw, range)) {
		return false;
	}
	if (!isNeverDecreasing(pw)) {
		return false;
	}
	if (!hasAdjacent(pw)) {
		return false;
	}
	if (!adjacentHasNoLargerGroup(pw)) {
		return false;
	}
	return true;
}

function hasValidLength(pw: number): boolean {
	return pw.toString().length === 6;
}
function isInRange(pw: number, range: number[]): boolean {
	return pw >= range[0] && pw <= range[1];
}
function isNeverDecreasing(pw: number): boolean {
	const str = pw.toString();
	for (let i = 0; i < str.length; i++) {
		if (str[i] > str[Number(i) + 1]) {
			return false;
		}
	}
	return true;
}

function hasAdjacent(pw: number): boolean {
	const str = pw.toString();
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[Number(i) + 1]) {
			return true;
		}
	}
	return false;
}

function adjacentHasNoLargerGroup(pw: number): boolean {
	if (!hasAdjacent(pw)) {
		return false;
	}

	const arrOfDigits = pw.toString().split('');
	for (const i in arrOfDigits) {
		if (arrOfDigits.length > 0) {
			const digit = arrOfDigits[i];
			if (
				digit === arrOfDigits[Number(i) + 1] &&
				digit !== arrOfDigits[Number(i) + 2] &&
				digit !== arrOfDigits[Number(i) - 1]
			) {
				return true;
			}
			return false;
		}
	}
}
