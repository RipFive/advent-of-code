import { getModules } from './input';

const splittedMasses: string[] = getModules();

let fuel: number[] = splittedMasses.map(mass => {
	return requiredFuel(mass);
});

let totalFuel: number = fuel.reduce((total, value) => total + value);

console.log('total fuel required: ' + totalFuel);

export function requiredFuel(mass): number {
	let mass = mass || 12;

	let firstCalc = Number(mass) / 3;
	let secondCalc = Math.floor(firstCalc);
	let thirdCalc = secondCalc - 2;

	return thirdCalc;
}

function test() {
	const results = {};

	results['firstTest'] = requiredFuel(12) == 2 ? 'passed' : 'failed';
	results['secondTest'] = requiredFuel(14) == 2 ? 'passed' : 'failed';
	results['thirdTest'] = requiredFuel(1969) == 654 ? 'passed' : 'failed';
	results['fourthTest'] = requiredFuel(100756) == 33583 ? 'passed' : 'failed';
	return results;
}
