import { intComputer } from "./scriptOne"


export function getInputs(intcode: number[],target: number) {
    for (let i:number = 0; i < 100; i++ ) {
        for (let j:number = 0; j < 100; j++) {
            const x = intComputer(intcode, i, j)[0]
            if (x == target)  {
                return 100 * i * j
            }
        }
    }

}