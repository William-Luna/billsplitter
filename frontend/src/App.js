import TopNavbar from './components/TopNavbar'
import Footer from './components/Footer'
import Notification from './components/Notification'
import MainApp from './components/MainApp'
import Login from './components/Login'
import MissingFeature from './components/MissingFeature'

import { Box, Container, CssBaseline, Paper } from '@mui/material'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './reducers/userReducer'




const App = () => {

  const user = useSelector(({ user }) => { return user })

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON !== null) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setUser(loggedUser))
    }

  }, [dispatch])


  return (
    <>
      <CssBaseline />
      <Notification />
      <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' }}>
        <Router>
          <TopNavbar isLoggedIn={user !== null} />
          <main>
            <Container maxWidth="lg">
              <Paper elevation={2} sx={{ p: 2 }}>
                <Routes>
                  <Route path='/login' element={user ? <Navigate replace to='/' /> : <Login />} />
                  <Route path='/dashboard' element={<MissingFeature />} />
                  <Route path='/login/recover' element={<MissingFeature />} />
                  <Route path='/' element={<MainApp />} />
                  <Route path='*' element={<MissingFeature />} />
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
