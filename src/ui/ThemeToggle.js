import { Box, useColorMode } from "theme-ui"
import Button from "./Button"

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Box sx={{ p: 3, position: "absolute", top: 0, right: 0 }}>
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
