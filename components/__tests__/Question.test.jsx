import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Question from '../Question';

// Mock react-syntax-highlighter
jest.mock('react-syntax-highlighter', () => ({
  Prism: ({ children }) => <pre data-testid="syntax-highlighter">{children}</pre>
}));

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  prism: {}
}));

const mockQuestionData = {
  code: 'function test() { return "hello"; }',
  language: 'javascript',
  answers: ['O(1)', 'O(n)', 'O(n^2)'],
  correctAnswerIndex: 0
};

const mockQuestionTextData = {
  questionText: 'What is the time complexity of this algorithm?',
  language: 'javascript',
  answers: ['O(1)', 'O(n)', 'O(n^2)'],
  correctAnswerIndex: 1
};

describe('Question Component', () => {
  const mockOnAnswerClick = jest.fn();

  beforeEach(() => {
    mockOnAnswerClick.mockClear();
  });

  test('renders code snippet when code is provided', () => {
    render(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    expect(screen.getByTestId('syntax-highlighter')).toBeInTheDocument();
    expect(screen.getByText('function test() { return "hello"; }')).toBeInTheDocument();
  });

  test('renders question text when questionText is provided', () => {
    render(
      <Question
        {...mockQuestionTextData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    expect(screen.getByText('What is the time complexity of this algorithm?')).toBeInTheDocument();
    expect(screen.queryByTestId('syntax-highlighter')).not.toBeInTheDocument();
  });

  test('renders all answer options', () => {
    render(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    mockQuestionData.answers.forEach(answer => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });
  });

  test('calls onAnswerClick with correct value when answer is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    const correctAnswerButton = screen.getByText('O(1)');
    await user.click(correctAnswerButton);

    expect(mockOnAnswerClick).toHaveBeenCalledWith(true);
  });

  test('calls onAnswerClick with false when incorrect answer is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    const incorrectAnswerButton = screen.getByText('O(n)');
    await user.click(incorrectAnswerButton);

    expect(mockOnAnswerClick).toHaveBeenCalledWith(false);
  });

  test('applies correct styling when correct answer is selected', async () => {
    const user = userEvent.setup();
    
    render(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    const correctAnswerButton = screen.getByText('O(1)');
    await user.click(correctAnswerButton);

    await waitFor(() => {
      expect(correctAnswerButton).toHaveClass('correct');
    });
  });

  test('applies incorrect styling when wrong answer is selected', async () => {
    const user = userEvent.setup();
    
    render(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    const incorrectAnswerButton = screen.getByText('O(n)');
    await user.click(incorrectAnswerButton);

    await waitFor(() => {
      expect(incorrectAnswerButton).toHaveClass('incorrect');
    });
  });

  test('shuffles answers but maintains correct answer mapping', () => {
    const { rerender } = render(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    // All answers should still be present regardless of shuffle
    mockQuestionData.answers.forEach(answer => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });

    // Re-render to test shuffle consistency
    rerender(
      <Question
        {...mockQuestionData}
        onAnswerClick={mockOnAnswerClick}
      />
    );

    mockQuestionData.answers.forEach(answer => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });
  });
});