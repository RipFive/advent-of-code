import { CONNREFUSED } from 'dns';
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
	if (password === 233333) {
	}
	if (meetsCriteria(password, rawInput)) {
		matchingPasswords.push(password);
	}
}

console.log('the number of matching passwords is: ', matchingPasswords.length);

function meetsCriteria(pw: number, range: number[]): boolean {
	const sorted = pw
		.toString()
		.split('')
		.map(Number);
	const len: boolean = pw.toString().length === 6 ? true : false;
	const inRange: boolean = pw >= range[0] && pw <= range[1] ? true : false;
	let adjacent = false;
	let neverDecreases = true;
	let adjacentNoLargerGroup = false;
	const indexesOfAdjacentDigits = {};
	for (const i in sorted) {
		if (sorted.length > 0) {
			const indeces: number[] = [];
			if (sorted[i] === sorted[Number(i) + 1]) {
				adjacent = true;
				if (indeces.indexOf(i) === -1) {
					indeces.push(Number(i), Number(i) + 1);
				}
				indexesOfAdjacentDigits[sorted[i]] =
					indexesOfAdjacentDigits[sorted[i]] === undefined
						? [...indeces]
						: [...indexesOfAdjacentDigits[sorted[i]], indeces[1]];
			}
			if (sorted[i] > sorted[Number(i) + 1]) {
				neverDecreases = false;
			}
		}
	}
	const adjacentDigits = Object.keys(indexesOfAdjacentDigits);
	const newObj = adjacentDigits.filter(digit => {
		return indexesOfAdjacentDigits[digit].length === 2;
	});
	if (newObj.length > 0) {
		adjacentNoLargerGroup = true;
	}

	if (len && inRange && adjacent && neverDecreases && adjacentNoLargerGroup) {
		return true;
	} else {
		return false;
	}
}
