

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






  {
    code: ` function identifyComplexityAdvanced(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 10; j++) {
            sum += i * j;
        }
    }
    console.log("Sum: " + sum);
}

identifyComplexityAdvanced(10);


 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` function dropConstantsAdvanced(n) {
    for (let i = 0; i < 3 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 2 * n; j++) {
        // some operation
    }
}

dropConstantsAdvanced(10);

 `,
    language: "javascript",
    answers: ["O(5N)", "O(N)", "O(N^2)"],
    correct: 1,
  },




  {
    code: ` function identifyComplexityIntermediate(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    for (let j = 0; j < n; j++) {
        sum += j;
    }
    console.log("Sum: " + sum);
}

identifyComplexityIntermediate(10);

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` function dropConstantsIntermediate(n) {
    for (let i = 0; i < 4 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 3 * n; j++) {
        // some operation
    }
}

dropConstantsIntermediate(10);

 `,
    language: "javascript",
    answers: ["O(7N)", "O(N)", "O(N^2)"],
    correct: 1,
  },



  {
    code: ` 
    function identifyComplexityAdvanced2(n) {
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

identifyComplexityAdvanced2(10);

 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: ` 
    function dropConstantsAdvanced2(n) {
    for (let i = 0; i < 5 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 4 * n; j++) {
        // some operation
    }
}

dropConstantsAdvanced2(10);

 `,
    language: "javascript",
    answers: ["O(9N)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
    function identifyComplexityIntermediate2(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    for (let j = 0; j < n * n; j++) {
        sum += j;
    }
    console.log("Sum: " + sum);
}

identifyComplexityIntermediate2(10);


 `,
    language: "javascript",
    answers: ["O(1)", "O(N)", "O(N^2)"],
    correct: 2,
  },
  {
    code: ` 
    function dropConstantsIntermediate2(n) {
    for (let i = 0; i < 6 * n; i++) {
        // some operation
    }
    for (let j = 0; j < 4 * n; j++) {
        // some operation
    }
}

dropConstantsIntermediate2(10);


 `,
    language: "javascript",
    answers: ["O(10N)", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
    function identifyComplexityAdvanced3(n) {
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
 `,
    language: "javascript",
    answers: ["O()", "O(N)", "O(N^2)"],
    correct: 1,
  },
  {
    code: ` 
 `,
    language: "javascript",
    answers: ["O()", "O(N)", "O(N^2)"],
    correct: 1,
  },
 
];

export default quizData;
