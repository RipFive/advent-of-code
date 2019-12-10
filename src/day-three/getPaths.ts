export function getPaths(wires: string[][]): { [key: string]: number } {
	const paths = {};
	const gridPos: [[number, number], [number, number]] = [
		[0, 0],
		[0, 0]
	];
	wires.forEach((wire, wireIx) => {
		let stepCounter = 0;
		const wireStepContainer: [number, number] = [0, 0];
		wire.forEach(movement => {
			const distance: number = parseInt(movement.substr(1, movement.length - 1), 10);
			stepCounter = stepCounter + distance;
			wireStepContainer[wireIx] = [stepCounter];
			switch (movement.substr(0, 1)) {
				case 'R':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(0, 1, gridPos[wireIx][0] + 1);

						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
					}
					break;
				case 'L':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(0, 1, gridPos[wireIx][0] - 1);

						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
					}
					break;
				case 'U':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx].splice(1, 1, gridPos[wireIx][1] + 1);

						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
					}
					break;
				case 'D':
					for (let i = 0; i < distance; i++) {
						gridPos[wireIx][1] = gridPos[wireIx][1] - 1;

						paths[gridPos[wireIx].toString()] = {};
						if (!'stepsNeeded' in paths[gridPos[wireIx].toString()]) {
							paths[gridPos[wireIx].toString()] = { stepsNeeded: wireStepContainer[wireIx] };
						}
						paths[gridPos[wireIx].toString()] = {
							wiresPassed: wireIx !== 0 ? paths[gridPos[wireIx].toString()] + 1 : 1 || 1
						};
					}
					break;
			}

			console.log('logging position', JSON.stringify(gridPos[wireIx]));
		});
	});
	return paths;
}
