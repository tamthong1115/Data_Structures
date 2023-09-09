//! Array Time Complexity
//_ O(1) - lookup, push
//_ O(n) - insert, delete

const strings = ["a", "b", "c", "d"];

//push
strings.push("e"); //* O(1)

//pop
strings.pop(); //* O(1)

//unshift
strings.unshift("x"); //* O(n)

//splice
strings.splice(2,1,'alien'); // O(n/2)

// console.log(strings);


//! Dynamic Array Time Complexity
//_ O(1) - lookup, append
//_ O(n) - insert, delete
//! append can be O(n)


