import { BrowserRouter as Router } from "react-router-dom"

import AppRoutes from "./components/AppRoutes"
import ScrollToTop from "./components/ScrollToTop"
import GlobalStyles from "./components/GlobalStyles"

function App() {
    return (
        <>
            <GlobalStyles>
                <Router>
                    <AppRoutes />
                    <ScrollToTop />
                </Router>
            </GlobalStyles>
        </>
    )
}

export default App
