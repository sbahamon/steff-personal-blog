import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class LightSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label
            style={{
              float: "right"
            }}>
            <input
              type="checkbox"
              aria-label="Switch light and dark mode"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default LightSwitch