import { readFileSync } from 'fs';
import { getPaths } from './getPaths';
import { answer1, answer2, answer3, example1, example2, example3, test } from './test';

// test();
const test = true; // turn off if you want to run the real input

const inputFilePath = __dirname.concat('\\input.txt');
const answer = test === true ? answer1 : 'unknown';

const rawInput =
	test === true
		? example1
		: readFileSync(inputFilePath)
				.toString()
				.split(/\n/)
				.map(wire => wire.split(','));

const wirePaths = getPaths(rawInput);

const wireIntersections = getIntersectionsFromPaths(wirePaths, rawInput);

console.log('closest dist', getClosestIntersectionByManhattenDist(wireIntersections), 'exp. answer', answer[0]);
console.log('shortest dist', getClosestIntersectionBySteps(wireIntersections), 'exp. answer', answer[1]);

function getClosestIntersectionBySteps(intersections: {}) {
	const intersectionCoords = Object.keys(intersections);
	const shortestIntersec = intersectionCoords.reduce((a, b) =>
		Object.values(intersections[a]).reduce((sum, v) => sum + v) <
		Object.values(intersections[b]).reduce((sum, v) => sum + v)
			? a
			: b
	);
	console.log('shortest Intersec', shortestIntersec);
	console.log(Object.values(intersections[shortestIntersec]));
	const distance =
		Object.values(intersections[shortestIntersec]).reduce((tot, val) => tot + val) -
		// having summed also the distance-irrelevant wiresPassed, I'm subtracting it again
		intersections[shortestIntersec].wiresPassed;
	return distance;
}

export function getClosestIntersectionByManhattenDist(pathObj: { wiresPassed: number; [key: string]: number }) {
	const obj = {};
	const intersections = Object.keys(pathObj);
	for (const intersection of intersections) {
		const coordValues = intersection.split(',');
		if (!obj[intersection]) {
			obj[intersection] = coordValues
				.map(pos => Number(pos))
				.reduce((total, increment) => Math.abs(total) + Math.abs(increment));
		}
	}
	const closestIntersection = Object.keys(obj).reduce((prevDist, curDist) =>
		obj[prevDist] < obj[curDist] ? prevDist : curDist
	);
	return obj[closestIntersection];
}

function getIntersectionsFromPaths(paths: {}, input) {
	const intersections = {};
	const positions = Object.keys(paths);
	for (const position of positions) {
		if (paths[position].wiresPassed > 1) {
			intersections[position] = { ...paths[position] };
		}
	}
	return intersections;
}
