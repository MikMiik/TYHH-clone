import { useColorScheme } from '@mui/material/styles'
import { useEffect } from 'react'

function Test() {
  const { mode, setMode } = useColorScheme()

  useEffect(() => {
    console.log(mode) // logged 'light' at first render, and 'dark' after the button click
  }, [mode])

  return <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>Toggle dark mode</button>
}

export default Test
