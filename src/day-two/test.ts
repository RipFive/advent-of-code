import { strict as assert } from 'assert';
import { intComputer } from './script-one';

export function test() {
	const tests = [
		{ test: [1, 0, 0, 0, 99], answer: [2, 0, 0, 0, 99] },
		{ test: [2, 3, 0, 3, 99], answer: [2, 3, 0, 6, 99] },
		{ test: [2, 4, 4, 5, 99, 0], answer: [2, 4, 4, 5, 99, 9801] },
		{ test: [1, 1, 1, 4, 99, 5, 6, 0, 99], answer: [30, 1, 1, 4, 2, 5, 6, 0, 99] }
	];
	for (let i in tests) {
		let test = tests[i]['test'];
		let answer = tests[i]['answer'];
		assert.deepEqual(intComputer(test), answer);
	}
}
