import { useEffect, useState } from "react"
import { Box, useColorMode } from "theme-ui"
import Button from "./Button"

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // fade in animation
    setOpacity(1)
  }, [])

  return (
    <Box
      sx={{
        p: 3,
        position: "absolute",
        top: 0,
        right: 0,
        opacity,
        transition: "opacity .25s ease-in-out",
      }}
    >
      <Button
        sx={{ bg: "gray", py: 1, px: 2, fontSize: 0 }}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        switch to {colorMode === "default" ? "dark" : "light"} mode
      </Button>
    </Box>
  )
}

export default ThemeToggle
