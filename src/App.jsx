import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'

import AppRoutes from './components/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import GlobalStyles from './components/GlobalStyles'
import UserProvider from './components/UserProvider'
import store, { persistor } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles>
              <Router>
                <AppRoutes />
                <UserProvider />
                <ScrollToTop />
              </Router>
            </GlobalStyles>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
