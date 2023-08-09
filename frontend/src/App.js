import TopNavbar from './components/TopNavbar'
import Footer from './components/Footer'
import Notification from './components/Notification'
import MainApp from './components/MainApp'
import Login from './components/Login'

import { Box, Container, CssBaseline, Paper } from '@mui/material'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'



const App = () => {


  return (
    <>
      <CssBaseline />
      <Notification />
      <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
        <Router>
          <TopNavbar />
          <main>
            <Container maxWidth="lg">
              <Paper elevation={2} sx={{ p: 2 }}>
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/' element={<MainApp />} />
                </Routes>
              </Paper>
            </Container>
          </main>
        </Router>
        <Footer />
      </Box>

    </>
  )
}

export default App
