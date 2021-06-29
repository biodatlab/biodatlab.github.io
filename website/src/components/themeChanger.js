import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { useThemeContext } from '../contexts/theme-context'

export default () => {
  const { setTheme } = useThemeContext()

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            className="theme-changer"
            onChange={e => {
              toggleTheme(e.target.checked ? 'dark' : 'light')
              // also keep theme in our context
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
            checked={theme === 'dark'}
          />{' '}
          <div className="mode-container">
            <i className="gg-sun"></i>
            <i className="gg-moon"></i>
          </div>
        </label>
      )}
    </ThemeToggler>
)}