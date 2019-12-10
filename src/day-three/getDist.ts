export function getDistanceToClosestIntersection(pathObj: {}) {
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
	const closestIntersection = Object.keys(obj).reduce((prevDist, curDist) =>
		obj[prevDist] < obj[curDist] ? prevDist : curDist
	);
	return obj[closestIntersection];
}
