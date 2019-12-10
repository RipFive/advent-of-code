import { readFileSync } from 'fs';

const inputFilePath = __dirname.concat('\\input.txt');
const wires = readFileSync(inputFilePath)
	.toString()
	.split(/\n/)
	.map(wire => wire.split(','));

const example1 = [
	['R8', 'U5', 'L5', 'D3'],
	['U7', 'R6', 'D4', 'L4']
];

const example2: string[][] = [
	['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'], // At D49 it intersects pos 146, 11
	['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
];
const example3: string[][] = [
	['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
	['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7']
];
const gridPos: [[number, number], [number, number]] = [
	[0, 0],
	[0, 0]
];

const getPaths = wires => {
	const paths = {};
	wires.forEach((wire, wireIx) => {
		wire.forEach(movement => {
			const distance: number = parseInt(movement.substr(1, movement.length - 1), 10);
			switch (movement.substr(0, 1)) {
				case 'R':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(0, 1, gridPos[wireIx][0] + 1);
						paths[gridPos[wireIx].toString()] =
							wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1;
					}
					break;
				case 'L':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(0, 1, gridPos[wireIx][0] - 1);
						paths[gridPos[wireIx].toString()] =
							wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1;
					}
					break;
				case 'U':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(1, 1, gridPos[wireIx][1] + 1);
						paths[gridPos[wireIx].toString()] =
							wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1;
					}
					break;
				case 'D':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx][1] = gridPos[wireIx][1] - 1;
						paths[gridPos[wireIx].toString()] =
							wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1;
					}
					break;
			}

			console.log(JSON.stringify(gridPos[wireIx]));
		});
	});
	return paths;
};

const paths = getPaths(wires);

const getDistanceToClosestIntersection = (pathObj: {}) => {
	const obj = {};
	const paths = Object.keys(pathObj);
	for (const path of paths) {
		if (pathObj[path] > 1) {
			const posArr = path.split(',');
			if (!obj[path]) {
				obj[path] = posArr
					.map(pos => Number(pos))
					.reduce((total, increment) => Math.abs(total) + Math.abs(increment));
			}
		}
	}
	const closesIntersection = Object.keys(obj).reduce((prevDist, curDist) =>
		obj[prevDist] < obj[curDist] ? prevDist : curDist
	);
	return obj[closesIntersection];
};

console.log(getDistanceToClosestIntersection(paths));
