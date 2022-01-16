const bubbleSort = <T>(arr: T[]): T[] => {
	for (let i = 0; i < arr.length; i++) {
		for (let k = 0; k < arr.length; k++) {
			if (arr[k + 1] < arr[k]) {
				const value: T = arr[k];
				arr[k] = arr[k + 1];
				arr[k + 1] = value;
			}
		}
	}

	return arr;
};

const aaa: number[] = [5, 3, 4, 1, 2];
