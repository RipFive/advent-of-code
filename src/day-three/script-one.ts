import { readFileSync } from 'fs';

const inputFilePath = __dirname.concat('\\input.txt');
const wires = readFileSync(inputFilePath)
	.toString()
	.split(/\n/)
	.map(wire => wire.split(','));

const example = [
	['R8', 'U5', 'L5', 'D3'],
	['U7', 'R6', 'D4', 'L4']
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
						paths[gridPos[wireIx].toString()] = paths[gridPos[wireIx].toString()] + 1 || 1;
					}
					break;
				case 'L':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(0, 1, gridPos[wireIx][0] - 1);
						paths[gridPos[wireIx].toString()] = paths[gridPos[wireIx].toString()] + 1 || 1;
					}
					break;
				case 'U':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(1, 1, gridPos[wireIx][1] + 1);
						paths[gridPos[wireIx].toString()] = paths[gridPos[wireIx].toString()] + 1 || 1;
					}
					break;
				case 'D':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx][1] = gridPos[wireIx][1] - 1;
						paths[gridPos[wireIx].toString()] = paths[gridPos[wireIx].toString()] + 1 || 1;
					}
					break;
			}
		});
	});
	return paths;
};

const paths = getPaths(example);

const closestCrossing = (pathObj: {}) => {
	const obj = {};
	const paths = Object.keys(pathObj);
	for (const path of paths) {
		if (pathObj[path] > 1) {
			const posArr = path.split(',');
			const dist = posArr.map(pos => Number(pos)).reduce((total, increment) => total + increment);
			if (!obj[path]) {
				obj[path] = dist;
			}
		}
	}
	return Object.keys(obj).reduce((prevValue, curValue) => (obj[prevValue] < obj[curValue] ? prevValue : curValue));
};

console.log(closestCrossing(paths));
