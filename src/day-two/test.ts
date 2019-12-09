import { strict as assert } from 'assert';
import { intComputer } from './script-one';

export function testIntComputer() {
	const tests = [
		{ test: [1, 0, 0, 0, 99], answer: [2, 0, 0, 0, 99] },
		{ test: [2, 3, 0, 3, 99], answer: [2, 3, 0, 6, 99] },
		{ test: [2, 4, 4, 5, 99, 0], answer: [2, 4, 4, 5, 99, 9801] },
		{ test: [1, 1, 1, 4, 99, 5, 6, 0, 99], answer: [30, 1, 1, 4, 2, 5, 6, 0, 99] }
	];
	for (const i in tests) {
		if (tests.length > 0) {
			const toTest = tests[i]['test'];
			const answer = tests[i]['answer'];
			assert.deepEqual(intComputer(toTest), answer);
		}
	}
}

export const testSecondResult = (noun: number, verb: number) => assert.deepEqual(100 * noun + verb, 1202);
