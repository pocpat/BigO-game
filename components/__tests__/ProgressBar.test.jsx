import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '../ProgressBar';

describe('ProgressBar Component', () => {
  test('renders progress bar with correct percentage', () => {
    render(<ProgressBar progress={50} />);
    
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('displays progress bar with correct width', () => {
    render(<ProgressBar progress={75} />);
    
    const progressValue = document.querySelector('.progress-value');
    expect(progressValue).toHaveStyle('width: 75%');
  });

  test('handles zero progress', () => {
    render(<ProgressBar progress={0} />);
    
    expect(screen.getByText('0%')).toBeInTheDocument();
    const progressValue = document.querySelector('.progress-value');
    expect(progressValue).toHaveStyle('width: 0%');
  });

  test('handles full progress', () => {
    render(<ProgressBar progress={100} />);
    
    expect(screen.getByText('100%')).toBeInTheDocument();
    const progressValue = document.querySelector('.progress-value');
    expect(progressValue).toHaveStyle('width: 100%');
  });

  test('rounds decimal progress values', () => {
    render(<ProgressBar progress={33.333} />);
    
    expect(screen.getByText('33%')).toBeInTheDocument();
  });
});