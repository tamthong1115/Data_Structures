const twoSum = (arr, target) => {
  const hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (hash.has(complement)) {
      return [hash.get(complement), i];
    } else {
      hash.set(arr[i], i);
    }
  }
  return [];
};

const a = [1, 2, 3, 4, 4, 5, 6, 7, 12, 14, 15, 15, 16, 25];

console.log(twoSum(a, 9));
