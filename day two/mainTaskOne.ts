import {intComputer} from './scriptOne';
import {getInputs} from './scriptTwo'
import {test} from './test';
import * as getCallerFile from "get-caller-file"
import { readFileSync } from "fs"


const readInput = () => {
    const file = getCallerFile()
    .split(/\\/)
    .slice(0,-1)
    .concat("input.txt")
    .join("\\")
    return readFileSync(file)
        .toString()
        .split(/\,/)
        .map(Number)
}
const rawInput = readInput()

test()

const noun: number = 12;
const verb: number = 2;

const result = intComputer(rawInput, noun, verb);
console.log('the result is: ');
console.log(result)

const outputToDetermine: number = 19690720;
const inputTwo = readInput();
console.log('logging rawInput before getInputs():')
console.log(inputTwo)
const resultTwo = getInputs(inputTwo, outputToDetermine)
console.log('the result is: ' + resultTwo)