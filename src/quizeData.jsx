

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
}

          `,
    language: "javascript",
    answers: ["O(1)", "O(n)", "O(n^2)"],
    correct: 2,
  },
  {
    code: `for (int i = 0; i < 2 * n; i++) {
    // some operation
}
 `,
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
identifyComplexity(10);

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2 )"],
    correct: 1,
  },
  {
    code: ` function dropConstants(n) {
    for (let i = 0; i < 2 * n; i++) {
        // some operation
    }
}

dropConstants(10);

 `,
    language: "javascript",
    answers: ["O(2N)", "O(N)", "O(N^2)"],
    correct: 1,
  },
 
];

export default quizData;
