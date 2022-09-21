//WE have two parts in merge sort
//a recursive part that splits up the elements into single units
//iterative path that merges the single units into a sorted or right order

const arr = [24, 5, 68, 30, 1, 7, 58, 5, 90];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middle),
    right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log(mergeSort(arr));
