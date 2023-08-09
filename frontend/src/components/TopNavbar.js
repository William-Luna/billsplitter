import Logo from '../Logo.png'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to='/'><img src={Logo} alt='Logo' height='50' /></Link>
        <Button component={Link} to='/login' color='inherit'>LOGIN</Button>
      </Toolbar>
    </AppBar>
  )
}

export default TopNavbar