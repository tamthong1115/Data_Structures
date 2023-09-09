const reverseArrayByMe = (array) => {
  let middleElement = 0;
  if (array.length % 2 == 0) {
    middleElement = array.length / 2;
  } else {
    middleElement = Math.floor(array.length / 2);
  }
  const LAST_ELEMENT = array.length - 1;
  for (let i = 0; i < middleElement; i++) {
    const temp = array[i];
    array[i] = array[LAST_ELEMENT - i];
    array[LAST_ELEMENT - i] = temp;
  }
  return array;
};

let arr = [1, 2, 3, 4, "asd", 5, 6, 7, 8];

reverseArrayByMe(arr);

Z
const reverseArray2 = (array) => {
  let right = array.length - 1;
  let left = 0;
  while (right < left) {
    const temp = array[right];
    array[right] = array[left];
    array[left] = temp;
    right--;
    left++;
  }
  return array;
};

const reverseString = (string) => {
  if (string.length <= 1) {
    return string;
  }
  const arrStr = string.split("");
  reverseArrayByMe(arrStr);
  string = "";
  for (let i = 0; i < arrStr.length; i++) {
    string += arrStr[i];
  }
  return string;
};
let s = "1234";
console.log(reverseString(s))