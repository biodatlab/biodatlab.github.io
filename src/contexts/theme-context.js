import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";

    if (isBrowser) {
      const systemFallback = Array.from(document.body.classList);
      const savedTheme =
        window.localStorage.getItem("theme") || systemFallback?.[0];

      setTheme(savedTheme || "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  const themeState = React.useContext(ThemeContext)

  if (typeof themeState === 'undefined') {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return themeState
}

export { ThemeProvider, useThemeContext }