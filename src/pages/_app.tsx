import React from "react"
import NextApp from "next/app"

import { ThemeProvider } from "theme-ui"
import { theme } from "layout/Theme"

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        {/* <Themed.root> */}
        <Component {...pageProps} />
        {/* </Themed.root> */}
      </ThemeProvider>
    )
  }
}
