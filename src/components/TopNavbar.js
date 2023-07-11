import { AppBar, Toolbar, Typography } from "@mui/material"

const TopNavbar = () => {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6">Bill Splitter</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopNavbar