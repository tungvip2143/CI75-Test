function adjacentElementsProduct(inputArray) {
  return Math.max(
    ...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1])
  );
}

console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));
