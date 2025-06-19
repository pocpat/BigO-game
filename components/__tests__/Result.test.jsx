import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Result from '../Result';

describe('Result Component', () => {
  const mockResetQuiz = jest.fn();
  const mockUserAnswers = [true, false, true, true, false];
  const totalQuestions = 5;

  beforeEach(() => {
    mockResetQuiz.mockClear();
  });

  test('renders quiz completion message', () => {
    render(
      <Result
        userAnswers={mockUserAnswers}
        resetQuiz={mockResetQuiz}
        totalQuestions={totalQuestions}
      />
    );

    expect(screen.getByText('Quiz Finished!')).toBeInTheDocument();
  });

  test('displays correct score', () => {
    render(
      <Result
        userAnswers={mockUserAnswers}
        resetQuiz={mockResetQuiz}
        totalQuestions={totalQuestions}
      />
    );

    expect(screen.getByText('You scored 3 out of 5.')).toBeInTheDocument();
  });

  test('renders individual question results', () => {
    render(
      <Result
        userAnswers={mockUserAnswers}
        resetQuiz={mockResetQuiz}
        totalQuestions={totalQuestions}
      />
    );

    expect(screen.getByText('Question 1: Correct')).toBeInTheDocument();
    expect(screen.getByText('Question 2: Incorrect')).toBeInTheDocument();
    expect(screen.getByText('Question 3: Correct')).toBeInTheDocument();
    expect(screen.getByText('Question 4: Correct')).toBeInTheDocument();
    expect(screen.getByText('Question 5: Incorrect')).toBeInTheDocument();
  });

  test('applies correct CSS classes to question results', () => {
    render(
      <Result
        userAnswers={mockUserAnswers}
        resetQuiz={mockResetQuiz}
        totalQuestions={totalQuestions}
      />
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveClass('correct');
    expect(listItems[1]).toHaveClass('incorrect');
    expect(listItems[2]).toHaveClass('correct');
    expect(listItems[3]).toHaveClass('correct');
    expect(listItems[4]).toHaveClass('incorrect');
  });

  test('calls resetQuiz when restart button is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <Result
        userAnswers={mockUserAnswers}
        resetQuiz={mockResetQuiz}
        totalQuestions={totalQuestions}
      />
    );

    const restartButton = screen.getByText('Restart Quiz');
    await user.click(restartButton);

    expect(mockResetQuiz).toHaveBeenCalledTimes(1);
  });

  test('handles perfect score', () => {
    const perfectAnswers = [true, true, true];
    
    render(
      <Result
        userAnswers={perfectAnswers}
        resetQuiz={mockResetQuiz}
        totalQuestions={3}
      />
    );

    expect(screen.getByText('You scored 3 out of 3.')).toBeInTheDocument();
  });

  test('handles zero score', () => {
    const zeroAnswers = [false, false, false];
    
    render(
      <Result
        userAnswers={zeroAnswers}
        resetQuiz={mockResetQuiz}
        totalQuestions={3}
      />
    );

    expect(screen.getByText('You scored 0 out of 3.')).toBeInTheDocument();
  });
});