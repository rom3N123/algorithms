const selectionSort = <T>(arr: T[]): T[] => {
	const result: T[] = [];
	const length: number = arr.length;

	for (let i = 0; i < length; i++) {
		let smallestIndex: number = 0;
		let smallestValue: T = arr[0];

		for (let k = i; k < arr.length; k++) {
			let currentValue: T = arr[k];

			if (currentValue < smallestValue) {
				smallestValue = currentValue;
				smallestIndex = k;
			}
		}

		const [smallest] = arr.splice(smallestIndex, 1);
		result.push(smallest);
	}

	return result;
};

const arr: number[] = [5, 3, 6, 2, 2, 10];

const sortedZ: number[] = selectionSort(arr);
