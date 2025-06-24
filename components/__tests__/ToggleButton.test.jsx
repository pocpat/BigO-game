import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleButton from '../ToggleButton';

describe('ToggleButton Component', () => {
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    mockToggleTheme.mockClear();
  });

  test('renders toggle button', () => {
    render(<ToggleButton isDarkMode={false} toggleTheme={mockToggleTheme} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('reflects dark mode state correctly', () => {
    render(<ToggleButton isDarkMode={true} toggleTheme={mockToggleTheme} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('reflects light mode state correctly', () => {
    render(<ToggleButton isDarkMode={false} toggleTheme={mockToggleTheme} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('calls toggleTheme when clicked', async () => {
    const user = userEvent.setup();
    
    render(<ToggleButton isDarkMode={false} toggleTheme={mockToggleTheme} />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test('renders sun and moon icons', () => {
    render(<ToggleButton isDarkMode={false} toggleTheme={mockToggleTheme} />);
    
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });
});