import GlobalStyles from '@mui/material/GlobalStyles'

const inputGlobalStyles = <GlobalStyles styles={{ h1: { color: 'grey' } }} />

export default function GlobalCssOverride() {
  return <>{inputGlobalStyles}</>
}
