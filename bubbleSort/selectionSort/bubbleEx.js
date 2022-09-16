arr = [
  { name: "Ram", salary: 100000 },
  { name: "Ramesh", salary: 10000 },
  { name: "Rakesh", salary: 500000 },
  { name: "Riya", salary: 400000 },
  { name: "Ritik", salary: 45000 },
];
function bubbleSort(inputArray, k) {
  for (var i = 0; i < k; i++) {
    var isSwapped = false;

    //LAst i elements are already sorted

    for (var j = 0; j < inputArray.length - 1 - i; j++) {
      //check if the current element is greater than the next element
      if (inputArray[j]["salary"] > inputArray[j + 1]["salary"]) {
        //if the condition is true then swap the elements

        var temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return inputArray;
}

k = 2;
arr = bubbleSort(arr, k);

console.log(arr[arr.length - k]["name"]);
