import { example3 } from './test';

export function getPaths(wires: string[][] = example3): { [key: string]: number } {
	const paths: { [key: string]: { [key: string]: number } } = { '[0,0]': {} };
	const gridPos: [[number, number], [number, number]] = [
		[0, 0],
		[0, 0]
	];
	const stepsCounterWires = {};
	wires.forEach((wire, wireIx) => {
<<<<<<< HEAD
		let stepCounter = 0;
		const wireStepContainer: [number, number] = [0, 0];
=======
		stepsCounterWires['wire' + wireIx] = 0;
>>>>>>> day3-solution2
		wire.forEach(movement => {
			const distance: number = parseInt(movement.substr(1, movement.length - 1), 10);
			stepCounter = stepCounter + distance;
			wireStepContainer[wireIx] = [stepCounter];
			switch (movement.substr(0, 1)) {
				case 'R':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(0, 1, gridPos[wireIx][0] + 1);
						stepsCounterWires['wire' + wireIx]++;
						if (!paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = {
								// wiresPassed: 0,
								// stepsNeededWire0: 0,
								// stepsNeededWire1: 0
							};
						}

						paths[gridPos[wireIx].toString()]['stepsNeededWire' + wireIx] =
							stepsCounterWires['wire' + wireIx];

<<<<<<< HEAD
						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
=======
						paths[gridPos[wireIx].toString()].wiresPassed =
							Object.values(paths[gridPos[wireIx].toString()]).length - 1;

						if (
							paths[gridPos[wireIx].toString()].wiresPassed >= 2 &&
							Object.values(paths[gridPos[wireIx].toString()]).length < 3
						) {
							console.log(gridPos[wireIx].toString(), paths[gridPos[wireIx].toString()]);
							const a = 0;
						}
>>>>>>> day3-solution2
					}

					break;
				case 'L':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(0, 1, gridPos[wireIx][0] - 1);
<<<<<<< HEAD

						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
=======
						if (gridPos[wireIx].toString() === '-998,611') {
							console.log(gridPos[wireIx].toString(), paths[gridPos[wireIx].toString()]);
							const a = 0;
						}
						stepsCounterWires['wire' + wireIx]++;
						if (!paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = {
								// wiresPassed: 0,
								// stepsNeededWire0: 0,
								// stepsNeededWire1: 0
							};
						}

						paths[gridPos[wireIx].toString()]['stepsNeededWire' + wireIx] =
							stepsCounterWires['wire' + wireIx];

						paths[gridPos[wireIx].toString()].wiresPassed =
							Object.values(paths[gridPos[wireIx].toString()]).length - 1;

						if (
							paths[gridPos[wireIx].toString()].wiresPassed >= 2 &&
							Object.values(paths[gridPos[wireIx].toString()]).length < 3
						) {
							console.log(gridPos[wireIx].toString(), paths[gridPos[wireIx].toString()]);
							const a = 0;
						}
>>>>>>> day3-solution2
					}
					break;
				case 'U':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(1, 1, gridPos[wireIx][1] + 1);
<<<<<<< HEAD

						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
=======
						stepsCounterWires['wire' + wireIx]++;
						if (!paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = {
								// wiresPassed: 0,
								// stepsNeededWire0: 0,
								// stepsNeededWire1: 0
							};
						}

						paths[gridPos[wireIx].toString()]['stepsNeededWire' + wireIx] =
							stepsCounterWires['wire' + wireIx];

						paths[gridPos[wireIx].toString()].wiresPassed =
							Object.values(paths[gridPos[wireIx].toString()]).length - 1;

						if (
							paths[gridPos[wireIx].toString()].wiresPassed >= 2 &&
							Object.values(paths[gridPos[wireIx].toString()]).length < 3
						) {
							console.log(gridPos[wireIx].toString(), paths[gridPos[wireIx].toString()]);
							const a = 0;
						}
>>>>>>> day3-solution2
					}
					break;
				case 'D':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx][1] = gridPos[wireIx][1] - 1;
<<<<<<< HEAD

						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
=======
						stepsCounterWires['wire' + wireIx]++;
						if (!paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = {
								// wiresPassed: 0,
								// stepsNeededWire0: 0,
								// stepsNeededWire1: 0
							};
						}

						paths[gridPos[wireIx].toString()]['stepsNeededWire' + wireIx] =
							stepsCounterWires['wire' + wireIx];

						paths[gridPos[wireIx].toString()].wiresPassed =
							Object.values(paths[gridPos[wireIx].toString()]).length - 1;

						if (
							paths[gridPos[wireIx].toString()].wiresPassed >= 2 &&
							Object.values(paths[gridPos[wireIx].toString()]).length < 3
						) {
							console.log(gridPos[wireIx].toString(), paths[gridPos[wireIx].toString()]);
							const a = 0;
						}
>>>>>>> day3-solution2
					}
					break;
			}
		});
	});
	return paths;
}

if (require.main === module) {
	console.log(getPaths());
	console.log('Note: This time getPaths() ran as main.');
}
