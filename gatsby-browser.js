import React from "react"
import { ThemeProvider } from "./src/contexts/theme-context"
import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
)