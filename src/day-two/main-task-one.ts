import { readFileSync } from 'fs';
import * as getCallerFile from 'get-caller-file';
import { intComputer } from './script-one';
import { getInputs } from './script-two';
import { test } from './test';

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

test();

const noun = 12;
const verb = 2;

const result = intComputer(rawInput, noun, verb);
console.log('the result is: ');
console.log(result);

const outputToDetermine = 19690720;
const inputTwo = readInput();
const resultTwo = getInputs(inputTwo, outputToDetermine);
