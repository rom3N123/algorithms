type BinarySearchFunction = <T>(array: T[], item: T) => number;

const recursiveSearch: BinarySearchFunction = <T>(array: T[], item: T): number => {
	const middleIndex: number = Math.floor(array.length / 2);
	const middleItem: T = array[middleIndex];

	if (middleItem === item) return middleIndex;

	if (item > middleItem) {
		return recursiveSearch(array.slice(middleIndex), item);
	} else {
		return recursiveSearch(array.slice(0, middleIndex), item);
	}
};

const loop: BinarySearchFunction = <T>(array: T[], item: T): number => {
	let restArr: T[] = array.slice();
	let middleIndex: number;
	let middleItem: T;
	let isEnd: boolean = false;

	while (!isEnd) {
		middleIndex = Math.floor(restArr.length / 2);
		middleItem = array[middleIndex];

		if (middleItem === item) {
			isEnd = true;
		} else {
			if (item > middleItem) {
				restArr.splice(middleIndex);
			} else {
				restArr.splice(0, middleIndex);
			}
		}
	}

	return middleIndex;
};
