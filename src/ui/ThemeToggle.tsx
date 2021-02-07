import { useEffect, useState } from "react"
import { Box, useColorMode, Button } from "theme-ui"

const ThemeToggle: React.FC = () => {
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
        sx={{ bg: "gray", py: 1, px: 2, fontSize: 3, minWidth: 75 }}
        onClick={(_e) => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        {colorMode === "default" ? "Light" : "Dark"}
      </Button>
    </Box>
  )
}

export default ThemeToggle
