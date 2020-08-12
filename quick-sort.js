// Vanaj Moorthy. 12th August 2020, ~ 6:45 am
// Quick Sort

const sort = (arr, left, right) => {
	left = left || 0;
	right = right || arr.length - 1;

	const pivot = chooseHoareParition(arr, left, right);

	if (left < pivot - 1) {
		sort(arr, left, pivot - 1);
	}

	if (right > pivot) {
		sort(arr, pivot, right);
	}

	return arr;
};

const chooseHoareParition = (arr, left, right) => {
	const pivot = Math.floor((left + right) / 2);
	while (left <= right) {
		while (arr[left] < arr[pivot]) {
			left++;
		}
		while (arr[right] > arr[pivot]) {
			right--;
		}
		if (left <= right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		}
	}

	return left;
};

const input = [5, 3, 2, 35, 124, 2, 5, 12423, 12, 13];

console.log(sort(input));
