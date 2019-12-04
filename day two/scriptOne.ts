const intcode: number[] = [1,9,10,3,2,3,11,0,99,30,40,50]

export function intComputer(intcode) {
    for (let i:number = 0; i < Math.floor((intcode.length / 4)); i++) {
        let intcodeIndex: number = +i;
        let opcodeIndex: number = 0 + (4 * intcodeIndex);
        let valueOneIndex: number = 1 + (4 * intcodeIndex);
        let valueTwoIndex: number = 2 + (4 * intcodeIndex);
        let outputIndex: number = 3 + (4 * intcodeIndex);
        
        let curIntcode: number[] = [intcode[opcodeIndex],intcode[valueOneIndex],intcode[valueTwoIndex],intcode[outputIndex]];
        
        let opcode = curIntcode[0];
        let valueOnePos = curIntcode[1];
        let valueTwoPos = curIntcode[2];
        let outputPos = curIntcode[3];

        let valueOne = intcode[valueOnePos];
        let valueTwo = intcode[valueTwoPos];
        let output = intcode[outputPos];

        if (opcode == 1) {
            //add
            let sum: number = valueOne + valueTwo;
            output = sum
        } else if (opcode == 2) {
            //multiply
            let product: number = valueOne * valueTwo;
            output = product
            
        } else if (opcode == 99) {break}
    
        intcode[outputPos] = output;
    }
    return intcode

}    

