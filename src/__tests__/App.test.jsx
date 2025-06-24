import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Mock loadable components
jest.mock('@loadable/component', () => {
  return (importFunc) => {
    const Component = React.lazy(importFunc);
    Component.displayName = 'LoadableComponent';
    return Component;
  };
});

// Mock the quiz data
jest.mock('../quizData.json', () => [
  {
    code: 'function test() { return "hello"; }',
    language: 'javascript',
    answers: ['O(1)', 'O(n)', 'O(n^2)'],
    correct: 0
  },
  {
    questionText: 'What is the time complexity?',
    language: 'javascript',
    answers: ['O(1)', 'O(n)', 'O(n^2)'],
    correct: 1
  }
]);

describe('App Component', () => {
  test('renders welcome screen initially', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Big O')).toBeInTheDocument();
      expect(screen.getByText('Brain Bender')).toBeInTheDocument();
    });
  });

  test('starts quiz when mode is selected', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      const normalModeButton = screen.getByText('Perfect Run');
      expect(normalModeButton).toBeInTheDocument();
    });

    const normalModeButton = screen.getByText('Perfect Run');
    await user.click(normalModeButton);

    await waitFor(() => {
      expect(screen.getByText('Big O Notation')).toBeInTheDocument();
    });
  });

  test('toggles dark mode', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      const toggleButton = screen.getByRole('checkbox');
      expect(toggleButton).toBeInTheDocument();
    });

    const toggleButton = screen.getByRole('checkbox');
    await user.click(toggleButton);

    expect(document.body).toHaveClass('dark-mode');
  });

  test('returns to welcome screen when home button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Start quiz
    await waitFor(() => {
      const normalModeButton = screen.getByText('Perfect Run');
      expect(normalModeButton).toBeInTheDocument();
    });

    const normalModeButton = screen.getByText('Perfect Run');
    await user.click(normalModeButton);

    await waitFor(() => {
      expect(screen.getByText('Big O Notation')).toBeInTheDocument();
    });

    // Click home button
    const homeButton = screen.getByTitle('home');
    await user.click(homeButton);

    await waitFor(() => {
      expect(screen.getByText('Brain Bender')).toBeInTheDocument();
    });
  });
});