export function intComputer(intcode: number[], noun?: number, verb?: number): number[] {
	const copiedIntcode: number[] = [...intcode];

	copiedIntcode[1] = noun || copiedIntcode[1];
	copiedIntcode[2] = verb || copiedIntcode[2];

	for (let i = 0; i < copiedIntcode.length; i += 4) {
		if (copiedIntcode[i] === 99) {
			break;
		}

		const opcodeIndex: number = i;
		const valueOneIndex: number = i + 1;
		const valueTwoIndex: number = i + 2;
		const outputIndex: number = i + 3;

		const opcode = copiedIntcode[opcodeIndex];
		const valueOnePos = copiedIntcode[valueOneIndex];
		const valueTwoPos = copiedIntcode[valueTwoIndex];
		const outputPos = copiedIntcode[outputIndex];

		const valueOne = copiedIntcode[valueOnePos];
		const valueTwo = copiedIntcode[valueTwoPos];
		let output = copiedIntcode[outputPos];

		if (opcode === 1) {
			// add
			output = valueOne + valueTwo;
		} else if (opcode === 2) {
			// multiply
			output = valueOne * valueTwo;
		}
		copiedIntcode[outputPos] = output;
	}
	return copiedIntcode;
}
