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
console.log(reverseSolution('H'))
array[i] = array[LAST_ELEMENT - i];
    array[LAST_ELEMENT - i] = temp;
  }
  return array;
};

let arr = [1, 2, 3, 4, "asd", 5, 6, 7, 8];

reverseArrayByMe(arr);

const reverseArray = (array) => {
  let right = array.length - 1;
  let left = 0;
  while (left < right) {
    const temp = array[right];
    array[right] = array[left];
    array[left] = temp;
    right--;
    left++;
  }
  return array;
};

const reverseString = (string) => {
  if (!string || string.length < 2 || typeof string !== "string") {
    return "Invalid str";
  }
  const arrStr = string.split("");
  reverseArray(arrStr);
  string = "";
  for (let i = 0; i < arrStr.length; i++) {
    string += arrStr[i];
  }
  return string;
};
let s = "Hi My Name is Thong";
console.log(reverseString(s));

// Solution

const reverseSolution = (str) => {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid string";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; (i = 0); i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
};

const reverseBuildIn = (str) => [...str].reverse().join("");

console.log(reverseSolution("My name is Thong"));
console.log(reverseBuildIn("My name is Thong"));
