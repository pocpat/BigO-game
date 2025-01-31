const quizData = [
  {
    code: `function myFunction(n) {
            for (let i = 0; i < n; i++) {
              console.log(i);
            }
          }`,
    language: "javascript",
    answers: ["O(1)", "O(n)", "O(n^2)"],
    correct: 1,
  },
  {
    code: `function anotherFunction(n) {
            for (let i = 0; i < n; i++) {
                for(let j = 0; j < n; j++){
                    console.log(i + j);
                }
            }
          }`,
    language: "javascript",
    answers: ["O(1)", "O(n)", "O(n^2)"],
    correct: 2,
  },
  {
    code: `int sum = 0;
for (int i = 0; i < n; i++) {
    sum += i;
} `,
    language: "javascript",
    answers: ["O(1)", "O(n)", "O(n^2)"],
    correct: 2,
  },
  {
    code: `for (int i = 0; i < 2 * n; i++) {
    // some operation
}`,
    language: "javascript",
    answers: ["O(2N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: `function identifyComplexity(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    console.log("Sum: " + sum);}
identifyComplexity(10);`,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2 )"],
    correct: 1,
  },
  {
    code: `function dropConstants(n) {
    for (let i = 0; i < 2 * n; i++) {
        // some operation
    }
}
dropConstants(10);`,
    language: "javascript",
    answers: ["O(2N)", "O(N)", "O(N^2)"],
    correct: 1,
  },

  {
    code: `function identifyComplexityAdvanced(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 10; j++) {
            sum += i * j;
        }
    }
    console.log("Sum: " + sum);
}

identifyComplexityAdvanced(10);`,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: `function dropConstantsAdvanced(n) {
    for (let i = 0; i < 3 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 2 * n; j++) {
        // some operation
    }
}

dropConstantsAdvanced(10);`,
    language: "javascript",
    answers: ["O(5N)", "O(N)", "O(N^2)"],
    correct: 1,
  },

  {
    code: `function identifyComplexityIntermediate(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    for (let j = 0; j < n; j++) {
        sum += j;
    }
    console.log("Sum: " + sum);
}

identifyComplexityIntermediate(10);`,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: `function dropConstantsIntermediate(n) {
    for (let i = 0; i < 4 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 3 * n; j++) {
        // some operation
    }
}

dropConstantsIntermediate(10);`,
    language: "javascript",
    answers: ["O(7N)", "O(N)", "O(N^2)"],
    correct: 1,
  },

  {
    code: `function identifyComplexityAdvanced2(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += i * j;
        }
    }
    for (let k = 0; k < n; k++) {
        sum += k;
    }
    console.log("Sum: " + sum);
}

identifyComplexityAdvanced2(10); `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: `function dropConstantsAdvanced2(n) {
    for (let i = 0; i < 5 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 4 * n; j++) {
        // some operation
    }
}

dropConstantsAdvanced2(10); `,
    language: "javascript",
    answers: ["O(9N)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: `function identifyComplexityIntermediate2(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    for (let j = 0; j < n * n; j++) {
        sum += j;
    }
    console.log("Sum: " + sum);
}

identifyComplexityIntermediate2(10); `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: `function dropConstantsIntermediate2(n) {
    for (let i = 0; i < 6 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 4 * n; j++) {
        // some operation
    }
}

dropConstantsIntermediate2(10); `,
    language: "javascript",
    answers: ["O(10N)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: `function identifyComplexityAdvanced3(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += i * j;
        }
    }
    for (let k = 0; k < n; k++) {
        sum += k;
    }
    console.log("Sum: " + sum);
}

identifyComplexityAdvanced3(10);

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: ` 
    function dropConstantsAdvanced3(n) {
    for (let i = 0; i < 7 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 5 * n; j++) {
        // some operation
    }
}

dropConstantsAdvanced3(10);

 `,
    language: "javascript",
    answers: ["O(12N)", "O(N)", "O(N^2)"],
    correct: 1,
  },

  {
    code: ` 
    function printUnorderedPairs(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    console.error("Inputs must be arrays.");
    return;
  }
  
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      for (let k = 0; k < 160800; k++) {
        console.log(arrayA[i] + "," + arrayB[j]);
      }
    }
  }
}
 `,
    language: "javascript",
    answers: ["O(AB)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function reverse(array) {
  if (!Array.isArray(array)) {
    console.error("Input must be an array.");
    return;
  }

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let other = array.length - i - 1;
    let temp = array[i];
    array[i] = array[other];
    array[other] = temp;
  }
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
    function sum(node) {
  if (node === null || node === undefined) { // Check for both null and undefined
    return 0;
  }
  return sum(node.left) + node.value + sum(node.right);
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
    function isPrime(n) {
  if (n <= 1) return false;
  for (let x = 2; x <= Math.sqrt(n); x++) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(sqrt(n))"],
    correct: 1,
  },
  {
    code: ` 
    function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
    function fib(n) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(2^N)"],
    correct: 1,
  },
  {
    code: ` 
    function allFib(n) {
for (let i = 0; i < n; i++) {
console.log(i + ": " + fib(i));
}
}

 `,
    language: "javascript",
    answers: ["O(N*2^N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function fib(n) {
if (n <= 0) return 0;
else if (n === 1) return 1;
return fib(n - 1) + fib(n - 2);
}
 `,
    language: "javascript",
    answers: ["O(2^N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function allFib(n) {
  const memo = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    console.log(i + ": " + fib(i, memo));
  }
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
    function fib(n, memo) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  else if (memo[n] > 0) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
    function powersOf2(n) {
  if (n < 1) {
    return 0;
  } else if (n === 1) {
    console.log(1);
    return 1;
  } else {
    let prev = powersOf2(Math.floor(n / 2));
    let curr = prev * 2;
    console.log(curr);
    return curr;
  }
}
 `,
    language: "javascript",
    answers: ["O(logN)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function product(a, b) {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}
 `,
    language: "javascript",
    answers: ["O(b)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function power(a, b) {
  if (b < 0) {
    return 0;
  } else if (b === 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}
 `,
    language: "javascript",
    answers: ["O(b)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function mod(a, b) {
  if (b <= 0) {
    return -1;
  }
  const div = Math.floor(a / b);
  return a - div * b;
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function div(a, b) {
  let count = 0;
  let sum = b;
  while (sum <= a) {
    sum += b;
    count++;
  }
  return count;
}
 `,
    language: "javascript",
    answers: ["O(a/b)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` function sqrtHelper(n, min, max) {
  if (max < min) return -1; // no square root
  const guess = Math.floor((min + max) / 2);
  if (guess * guess === n) { // found it!
    return guess;
  } else if (guess * guess < n) { // too low
    return sqrtHelper(n, guess + 1, max); // try higher
  } else {
    return sqrtHelper(n, min, guess - 1); // try lower
  }
} `,
    language: "javascript",
    answers: ["O(log N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function sqrt(n) {
  for (let guess = 1; guess * guess <= n; guess++) {
    if (guess * guess === n) {
      return guess;
    }
  }
  return -1;
}
 `,
    language: "javascript",
    answers: ["O(sqrt(N))", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function sumDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
 `,
    language: "javascript",
    answers: ["O(log N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
    function copyArray(array) {
let copy = [];
for (let value of array) {
copy = appendToNew(copy, value);
}
return copy;
}
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: ` 
   function appendToNew(array, value) {
  const bigger = new Array(array.length + 1);
  for (let i = 0; i < array.length; i++) {
    bigger[i] = array[i];
  }
  bigger[bigger.length - 1] = value;
  return bigger;
}

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
   function printSortedStrings(remaining) {
printSortedStringsHelper(remaining, "");
}

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
   function printSortedStringsHelper(remaining, prefix) {
if (remaining === 0) {
if (isInOrder(prefix)) {
console.log(prefix);
}
} else {
for (let i = 0; i < numChars; i++) {
const c = ithLetter(i);
printSortedStringsHelper(remaining - 1, prefix + c);
}
}
}

 `,
    language: "javascript",
    answers: ["O(26^N *N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
   function isInOrder(s) {
for (let i = 1; i < s.length; i++) {
const prev = ithLetterValue(s.charAt(i - 1));
const curr = ithLetterValue(s.charAt(i));
if (prev > curr) {
return false;
}
}
return true;
}

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
   function ithLetter(i) {
return String.fromCharCode('a'.charCodeAt(0) + i);
}
function ithLetterValue(c){
return c.charCodeAt(0) - 'a'.charCodeAt(0);
}

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
   function realWorldScenarioAdvanced1(array) {
let sum = 0;
for (let x of array) {
sum += x;
}
let average = sum / array.length;
console.log("Average: " + average);
}

realWorldScenarioAdvanced1([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
   function realWorldScenarioAdvanced2(array) {
let sum = 0;
for (let x of array) {
sum += x;
}
let average = sum / array.length;
for (let x of array) {
if (x > average) {
console.log(x + " is above average");
}
}
}

 `,
    language: "javascript",
    answers: ["O(2N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
   function realWorldScenarioIntermediate1(array) {
let sum = 0;
for (let x of array) {
sum += x;
}
console.log("Sum: " + sum);
}

realWorldScenarioIntermediate1([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
   function realWorldScenarioIntermediate2(array) {
let sum = 0;
for (let x of array) {
sum += x;
}
let product = 1;
for (let x of array) {
product *= x;
}
console.log("Sum: " + sum + ", Product: " + product);
}

realWorldScenarioIntermediate2([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

 `,
    language: "javascript",
    answers: ["O(2N)", "O(N)", "O(N^2)"],
    correct: 0,
  },
  {
    code: ` 
function realWorldScenarioIntermediate3(array) {
let sum = 0;
for (let x of array) {
sum += x;
}
console.log("Sum: " + sum);
}

realWorldScenarioIntermediate3([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
function realWorldScenarioIntermediate4(array) {
let sum = 0;
for (let x of array) {
sum += x;
}
let product = 1;
for (let x of array) {
product *= x;
}
console.log("Sum: " + sum + ", Product: " + product);
}

realWorldScenarioIntermediate4([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
function compareAlgorithmsAdvanced5(n) {
for (let i = 0; i < n; i++) {
for (let j = 0; j < n; j++) {
for (let k = 0; k < 10; k++) {
// some operation
}
}
}
}

compareAlgorithmsAdvanced5(10);
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: ` 
function compareAlgorithmsAdvanced6(n) {
for (let i = 0; i < n; i++) {
for (let j = 0; j < n; j++) {
// some operation
}
}
}

compareAlgorithmsAdvanced6(10);
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: ` 
// If a binary search tree is not balanced, 
// how long might it take (worst case) 
// to find an element in it?
 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: `{/*
You are looking for a specific 
value in a binary tree, 
but the tree is not 
a binary search tree.
What is the time complexity 
of this?
*/}`,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: `{/*
The appendToNew method appends 
a value to an array by creating 
a new, longer array and
returning this longer array. 
You've used the appendToNew 
method to create a copyArray
function that repeatedly 
calls appendToNew. 
How long does copying 
an array take?
*/}`,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
];

export default quizData;
