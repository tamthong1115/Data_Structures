/* RULE
Rule 1: Worst Case
Rule 2: Remove Constants
Rule 3:
*/

// LINEAR TIME - O(n)

// const nemo = ["nemo"];
// const large = new Array(100).fill("nemo");

// function findNemo(arr) {
//   let t0 = performance.now();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") {
//       console.log("Found NEMO!");
//       break;
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
// }

// findNemo(large); // O(n) -> Linear Time
// Linear Time depend on the number of value input

// CONSTANT TIME - O(1)

const boxes = [];
for (let i = 0; i <= 10; i++) {
  boxes.push(i);
}
const loginFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

loginFirstTwoBoxes(boxes); // O(2)

// Log all pairs of array
const boxesOfPairs = [1, 2, 3, 4, 5];
function logAllPairsOfArr(boxes) {
  for (let i = 1; i <= boxes.length; i++) {
    for (let j = 1; j <= boxes.length; j++) {
      console.log(`Pair (${i},${j})`);
    }
  }
}
