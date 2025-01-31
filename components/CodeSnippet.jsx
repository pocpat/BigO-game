
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { javascript, cpp } from 'react-syntax-highlighter/dist/esm/languages/prism';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('cpp', cpp);

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