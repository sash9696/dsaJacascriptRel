function selectionSort(inputArray) {
  var i, j, minimumIndex;

  for (i = 0; i < inputArray.length - 1; i++) {
    //initialize the current element as minimum index

    minimumIndex = i;

    for (j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j].localeCompare(inputArray[minimumIndex]) == -1) {
        minimumIndex = j;
      }
    }
    if (minimumIndex != i) {
      var temp = inputArray[minimumIndex];
      inputArray[minimumIndex] = inputArray[i];
      inputArray[i] = temp;
    }
  }
  return inputArray;
}

var arr = ["India", "Austrailia", "China", "Russia"];

console.log(selectionSort(arr));
