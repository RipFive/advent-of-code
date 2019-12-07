export function intComputer(intcode: number[], noun?: number, verb?: number): number[] {
	const resultIntcode: number[] = intcode;
	if (noun !== null && verb !== null) {
		resultIntcode[1] = noun;
		resultIntcode[2] = verb;
	}
	for (let i = 0; i < resultIntcode.length; i += 4) {
		if (resultIntcode[i] === 99) {
			break;
		}
		const pointer: number = +i;

		const opcodeIndex: number = pointer;
		const valueOneIndex: number = pointer + 1;
		const valueTwoIndex: number = pointer + 2;
		const outputIndex: number = pointer + 3;

		const curIntcode: number[] = [
			resultIntcode[opcodeIndex],
			resultIntcode[valueOneIndex],
			resultIntcode[valueTwoIndex],
			resultIntcode[outputIndex]
		];

		const opcode = curIntcode[0];
		const valueOnePos = curIntcode[1];
		const valueTwoPos = curIntcode[2];
		const outputPos = curIntcode[3];

		const valueOne = resultIntcode[valueOnePos];
		const valueTwo = resultIntcode[valueTwoPos];
		let output = resultIntcode[outputPos];

		if (opcode === 1) {
			// add
			const sum: number = valueOne + valueTwo;
			output = sum;
		} else if (opcode === 2) {
			// multiply
			const product: number = valueOne * valueTwo;
			output = product;
		}
		resultIntcode[outputPos] = output;
	}
	return resultIntcode;
}
