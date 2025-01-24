//import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={prism} wrapLongLines={true}>
      {code}
    </SyntaxHighlighter>
  );
};

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeSnippet;