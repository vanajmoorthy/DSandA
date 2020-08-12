const input = [1, 2, 3, 4, 5];
const target = 5;

const search = (arr, target) => {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			return console.log(`The target was found at index number ${mid}.`);
		} else if (target > arr[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	console.log("The target doesn't exist in the array.");
};

console.log(search(input, target));
