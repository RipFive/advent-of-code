import { intComputer } from './script-one';

export function getInputs(intcode: number[], target: number): number {
	for (let i = 0; i < 100; i++) {
		for (let j = 0; j < 100; j++) {
			const x = intComputer(intcode, i, j)[0];
			console.log('logging x...');
			console.log(x);
			if (x === target) {
				return 100 * i + j;
			}
		}
	}
	return 0;
}
