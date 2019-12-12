import { strict as assert } from 'assert';
import { getDistanceToClosestIntersection } from './getDist';
import { getPaths } from './getPaths';

export const example1: string[][] = [
	['R8', 'U5', 'L5', 'D3'],
	['U7', 'R6', 'D4', 'L4']
];
export const example2: string[][] = [
	['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'], // At D49 it intersects pos 146, 11
	['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
];
export const example3: string[][] = [
	['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
	['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7']
];
export const answer1 = [6, 30];
export const answer2 = [159, 610];
export const answer3 = [135, 410];

export function test() {
	// assert.deepStrictEqual(getDistanceToClosestIntersection(getPaths(example1)), answer1);
	// assert.deepStrictEqual(getDistanceToClosestIntersection(getPaths(example2)), answer2);
	// assert.deepStrictEqual(getDistanceToClosestIntersection(getPaths(example3)), answer3);
}
