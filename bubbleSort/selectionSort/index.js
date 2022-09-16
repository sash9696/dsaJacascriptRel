function selectSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n - 1; i++) {
    //Find smallest or min number in the sub array

    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    ///Swap the elements
    if (min != i) {
      let temp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = temp;
    }
  }

  return inputArr;
}
console.log(selectSort([10, 5, 8, 20, 2, 18]));
