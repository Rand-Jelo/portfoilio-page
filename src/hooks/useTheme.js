import { useEffect, useState, useCallback } from 'react';

/**
 * useTheme - Manages dark/light theme with localStorage persistence
 * 
 * @returns {Object} - { theme, toggleTheme, isDark }
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Default to dark
    return 'dark';
  });

  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('light');
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
      body.classList.remove('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}