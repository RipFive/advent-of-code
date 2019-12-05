import { intComputer } from "./scriptOne"


export function getInputs(intcode: number[],target: number) {
    for (let i:number = 0; i < 100; i++ ) {
        console.log('logging i: ' + i)
        for (let j:number = 0; j < 100; j++) {
            console.log('logging j: ' + j)
            const x = intComputer(intcode, i, j)[0]
            console.log('logging x: ' + x)
            console.log('logging target condition: ')
            console.log((x == target))
            if (x == target)  {
                console.log('i equals: ' + i)
                console.log('j equals: ' + j)
                return 100 * i * j
            }
        }
    }

}