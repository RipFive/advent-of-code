import { getModules } from './input';

const splittedMasses: number[] = getModules();

const fuel: number[] = splittedMasses.map(mass => {
	return requiredFuel(mass);
});

const totalFuel: number = fuel.reduce((total, value) => total + value);

console.log('total fuel required: ' + totalFuel);

export function requiredFuel(module: number): number {
	const calc = Math.floor(module / 3) - 2 || 0;
	return calc;
}
