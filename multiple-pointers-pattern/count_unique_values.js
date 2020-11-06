// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers
// in the array, but it will always be sorted.

function countUniqueValues(arr) {
    let left = arr[0];
    let uniq = 1;
    for (let right = arr[1]; right < arr.length; right++) {
        if (arr[left] === arr[right]){
            left++;
        } else {
            left++ && uniq++;
        }
    }
    return uniq;
}

// real solution:

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
