// [0,3,5]  [1,3,4,5,20,22]
// [0,1,3,3,4,5,5,20,22]

// compare first index of two array
// push the element smaller
// indexSmaller++
//
const mergeSortedArrays = (arr1, arr2) => {
  if (!arr1 || !arr2 || (arr1.length < 1 && arr2.length < 1)) {
    return "Invalid";
  }

  const merge = [];
  const lengthMerge = arr1.length + arr2.length;
  let indexArr1 = 0;
  let indexArr2 = 0;
  for (let i = 0; i < lengthMerge; i++) {
    if (
      (arr1[indexArr1] <= arr2[indexArr2] && arr1[indexArr1]) ||
      !arr2[indexArr2]
    ) {
      merge.push(arr1[indexArr1]);
      indexArr1++;
    } else {
      merge.push(arr2[indexArr2]);
      indexArr2++;
    }
  }
  return merge;
};

console.log(
  mergeSortedArrays(
    [1, 3, 16, 18, 20, 110, 220, 332, 420, 421, 422, 456, 466],
    [1, 2, 4, 6, 9, 90, 99, 110, 232, 333, 334, 456]
  )
);

const solutionMerge = (arr1, arr2) => {
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
};

console.log(
  solutionMerge(
    [1, 3, 16, 18, 20, 110, 220, 332, 420, 421, 422, 456, 466],
    [1, 2, 4, 6, 9, 90, 99, 110, 232, 333, 334, 456]
  )
);
