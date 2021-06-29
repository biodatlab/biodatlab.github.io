import React, { createContext, useState } from 'react';

const savedTheme = window?.localStorage.getItem('theme')

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(savedTheme || 'light')

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