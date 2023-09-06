import Logo from '../Logo.png'
import { AppBar, Button, Toolbar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../reducers/userReducer'
import { setSuccessMessage } from '../reducers/notificationReducer'
import billsService from '../services/bills'

const TopNavbar = ({ isLoggedIn }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = event => {
    event.preventDefault()
    window.localStorage.removeItem('loggedUser')
    billsService.setToken(null)
    dispatch(setUser(null))
    dispatch(setSuccessMessage('Successfully logged out.'))
    navigate('/')
  }

  const loginButton = () => (
    <Button className='loginbutton' component={Link} to='/login' color='inherit'>LOGIN</Button>
  )

  const logoutButton = () => (
    <Button className='logoutbutton' onClick={handleLogout} color='inherit'>LOGOUT</Button>
  )

  return (
    <AppBar position="static" sx={{ mb: 4 }} component='nav'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to='/'><img src={Logo} alt='Logo' height='50' /></Link>
        {isLoggedIn ?
          logoutButton() :
          loginButton()
        }

      </Toolbar>
    </AppBar>
  )
}

export default TopNavbar