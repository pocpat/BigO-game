import React from 'react';
import './Quiz.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {javascript} from 'react-syntax-highlighter/dist/esm/languages/prism'

SyntaxHighlighter.registerLanguage('javascript', javascript)

const quizData = [
    {
        code: `function myFunction(n) {
            for (let i = 0; i < n; i++) {
              console.log(i);
            }
          }`,
          language: "javascript",
          answers: ["O(1)", "O(n)", "O(n^2)"],
          correct: 1
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
          correct: 2
    }
]