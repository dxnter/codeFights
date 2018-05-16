// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const adjacentElementsProduct = inputArray => {
  let maxProduct = Number.NEGATIVE_INFINITY;
  inputArray.forEach((num, index) => {
    const product = num * inputArray[index + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  });
  return maxProduct;
};
