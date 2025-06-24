import '@testing-library/jest-dom';

// Mock loadable components for testing
jest.mock('@loadable/component', () => {
  return (importFunc) => {
    const Component = React.lazy(importFunc);
    Component.displayName = 'LoadableComponent';
    return Component;
  };
});

// Mock CSS imports
jest.mock('./App.css', () => ({}));
jest.mock('./toggle.css', () => ({}));
jest.mock('./starsky.css', () => ({}));

// Mock image imports
jest.mock('/ekLogo.png', () => 'test-logo.png');

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});