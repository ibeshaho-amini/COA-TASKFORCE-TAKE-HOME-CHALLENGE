function hasContiguousSubarray(arr, target) {
    let start = 0;
    let end = 0;
    let sum = 0;

    while (end < arr.length) {
        // Expand the window by including the current element
        sum += arr[end];

        // If the sum exceeds the target, move the start pointer to the right
        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        // Check if the current window sums up to the target
        if (sum === target) {
            return true;
        }

        // Move the end pointer to the right
        end++;
    }

    // If no subarray is found, return false
    return false;
}

// Example usage:
const arr = [2,1,1,1,1,1];
const target = 17;
console.log(hasContiguousSubarray(arr, target)); // Output: true
