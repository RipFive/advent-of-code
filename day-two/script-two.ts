import { intComputer } from './script-one';

export function getInputs(intcode: number[], target: number) {
	console.log('Why is this intcode not the original rawInput?');
	console.log(intcode);
	for (let i: number = 0; i < 100; i++) {
		for (let j: number = 0; j < 100; j++) {
			console.log('hello from nested loop');
			const x = intComputer(intcode, i, j)[0];
			console.log('logging x...');
			console.log(x);
			console.log('logging condition');
			console.log(x == target);
			if (x == target) {
				return 100 * i * j;
			}
		}
	}
}
