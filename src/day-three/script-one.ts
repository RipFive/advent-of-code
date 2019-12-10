import { readFileSync } from 'fs';
import { getDistanceToClosestIntersection } from './getDist';
import { getPaths } from './getPaths';
import { test } from './test';

test();

const inputFilePath = __dirname.concat('\\input.txt');
const rawInput = readFileSync(inputFilePath)
	.toString()
	.split(/\n/)
	.map(wire => wire.split(','));

console.log(getDistanceToClosestIntersection(getPaths(rawInput)));
