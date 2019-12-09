import { readFileSync } from 'fs';
import * as getCallerFile from 'get-caller-file';
import { intComputer } from './script-one';
import { getInputs } from './script-two';
import { testIntComputer, testSecondResult } from './test';

const readInput = () => {
	const file = getCallerFile()
		.split(/\\/)
		.slice(0, -1)
		.concat('input.txt')
		.join('\\');
	return readFileSync(file)
		.toString()
		.split(/\,/)
		.map(Number);
};
const rawInput = readInput();

testIntComputer();

const result = intComputer(rawInput, 12, 2);
console.log('the result is: ');
console.log(result);

testSecondResult(12, 2);

const outputToDetermine = 19690720;

const resultTwo = getInputs(rawInput, outputToDetermine);
console.log('the second result is: ', resultTwo);
