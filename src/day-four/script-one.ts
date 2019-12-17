import { readFileSync } from 'fs';

// TEST
const examples = [111111, 223450, 123789];
const results = [true, false, false];
examples.forEach((example, ix) => {
	console.log(
		'Test ' + ix + ' results in: ',
		meetsCriteria(example, [-100000000, 100000000]),
		' expected: ',
		results[ix]
	);
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
	let double = false;
	let neverDecreases = true;
	for (const i in sorted) {
		if (sorted.length > 0) {
			if (sorted[i] === sorted[Number(i) + 1]) {
				double = true;
			}
			if (sorted[i] > sorted[Number(i) + 1]) {
				neverDecreases = false;
			}
		}
	}
	if (len && inRange && double && neverDecreases) {
		return true;
	} else {
		return false;
	}
}
