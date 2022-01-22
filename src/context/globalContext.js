import React, { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components";

export const globalContext = createContext()

const Provider = ({ children }) => {
  const [theme, setTheme] = useState(`dark`)

  console.log(window.localStorage)

  useEffect(() => {
    if (window.localStorage.getItem(`theme`)) {
      setTheme(window.localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={{ theme }}>
      <globalContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        {children}
      </globalContext.Provider>
    </ThemeProvider>
  )
}

export { Provider }

Provider.propTypes = {
  children: PropTypes.node,
}

export default ({ element }) => <Provider>{element}</Provider>