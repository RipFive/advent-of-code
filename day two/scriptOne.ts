
export function intComputer(intcode: number[], noun?:number, verb?:number) {
    let resultIntcode: number [] = intcode;
    console.log('logging condition of noun & verb: ')
    console.log((noun != null && verb != null))
    if (noun != null && verb != null) {
        resultIntcode.splice(1, 2, noun, verb)
        console.log('logging resultIntcode: ' + resultIntcode)
    };
    for (let i:number = 0; resultIntcode[i] != 99; i+=4 ) {
        let pointer: number = +i;

        let opcodeIndex: number = pointer;
        let valueOneIndex: number = pointer + 1;
        let valueTwoIndex: number = pointer + 2;
        let outputIndex: number = pointer + 3;
        
        let curIntcode: number[] = [resultIntcode[opcodeIndex],resultIntcode[valueOneIndex],resultIntcode[valueTwoIndex],resultIntcode[outputIndex]];

        let opcode = curIntcode[0];
        let valueOnePos = curIntcode[1];
        let valueTwoPos = curIntcode[2];
        let outputPos = curIntcode[3];

        let valueOne = resultIntcode[valueOnePos];
        let valueTwo = resultIntcode[valueTwoPos];
        let output = resultIntcode[outputPos];

        if (opcode == 1) {
            //add
            let sum: number = valueOne + valueTwo;
            output = sum
        } else if (opcode == 2) {
            //multiply
            let product: number = valueOne * valueTwo;
            output = product
            
        }
        resultIntcode[outputPos] = output;
        
    }
    return resultIntcode

}    

