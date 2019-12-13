<<<<<<< HEAD
export function getDistanceToClosestIntersection(pathObj: {}, unit: 'time' | 'distance') {
	console.log(unit);
	console.log('time' === 'time');
	const objKey = unit === 'time' ? 'stepsNeeded' : 'wiresPassed';
	const obj = {};
	const paths = Object.keys(pathObj);
	for (const path of paths) {
		if (pathObj[path]['wiresPassed'] > 1) {
			if (unit === 'distance') {
				const posArr = path.split(',');
				if (!obj[path][unit]) {
					obj[path][unit] = posArr
						.map(pos => Number(pos))
						.reduce((total, increment) => Math.abs(total) + Math.abs(increment));
				}
			} else if (unit === 'time') {
				if (!obj[path][unit]) {
					obj[path][unit] = pathObj[path][objKey].reduce(
						(total: number, increment: number) => total + increment
					);
				}
			}
		}
	}
	const closestIntersection = Object.keys(obj).reduce((prevDist, curDist) =>
		obj[prevDist][unit] < obj[curDist][unit] ? prevDist : curDist
	);
	return obj[closestIntersection][unit];
}
=======
>>>>>>> day3-solution2
