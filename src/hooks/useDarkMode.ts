import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // Check if user previously set preference
  const savedTheme = localStorage.getItem('darkMode');
  // Check if user prefers dark mode via system preferences
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial state based on saved preference or system preference
  const [darkMode, setDarkMode] = useState<boolean>(
    savedTheme ? JSON.parse(savedTheme) : prefersDark
  );

  useEffect(() => {
    // Save user preference to localStorage whenever it changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};