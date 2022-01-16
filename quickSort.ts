const quickSort = <T>(arr: T[]): T[] => {
	if (arr.length <= 1) {
		return arr;
	}

	const middleIndex: number = Math.floor(arr.length / 2);
	const pivot: T = arr[middleIndex];
	const less: T[] = [];
	const greater: T[] = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === middleIndex) continue;
		const value: T = arr[i];
		if (value < pivot) {
			less.push(value);
		} else {
			greater.push(value);
		}
	}

	return [...quickSort(less), pivot, ...quickSort(greater)];
};
