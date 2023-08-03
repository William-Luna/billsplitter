import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material'

const TopNavbar = () => {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Bill Splitter</Typography>
        <Button color='inherit'><Link href='#' underline='none' color='inherit'>Login</Link></Button>
      </Toolbar>
    </AppBar>
  )
}

export default TopNavbar