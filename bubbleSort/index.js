// function bubbleSort(inputArray, k) {
//   for (var i = 0; i < k; i++) {
//     var isSwapped = false;
//     // Last i elements are already sorted

//     for (var j = 0; j < inputArray.length - i - 1; j++) {
//       //Check if the current element is greater than the next element
//       if (inputArray[j] > inputArray[j + 1]) {
//         //if the condition is true then swap both of them
//         var temp = inputArray[j];
//         inputArray[j] = inputArray[j + 1];
//         inputArray[j + 1] = temp;

//         isSwapped = true;
//       }
//     }
//     if (!isSwapped) break;
//   }
//   return inputArray;
// }

// var k = 4;
// var arr = [5, 4, 3, 2, 1, 6, 2];

// arr = bubbleSort(arr, k);

// console.log(arr[arr.length - 4]);

function bubbleSort(inputArray) {
  for (var i = 0; i < inputArray.length; i++) {
    var isSwapped = false;

    for (var j = 0; j < inputArray.length - 1 - i; j++) {
      if (inputArray[j].localeCompare(inputArray[j + 1]) != -1) {
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

var arr = ["India", "Australia", "China", "Brazil"];

console.log(bubbleSort(arr));
