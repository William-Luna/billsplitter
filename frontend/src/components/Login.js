import { Button, FormControl, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = event => {
    event.preventDefault()

  }

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }} align="center"><strong>Sign In</strong></Typography>
      <form onSubmit={loginUser} align='center'>
        <FormControl >
          <TextField variant='filled' label='Username' size='small' type='text' name='username' value={username} onChange={({ target }) => setUsername(target.value)} required />
          <br />
          <TextField variant='filled' label='Password' size='small' type='text' name='password' value={password} onChange={({ target }) => setPassword(target.value)} required />
          <br />
          <Button variant='contained' type='submit'>Sign In</Button>
        </FormControl>
      </form>
      <div>
        <Typography sx={{ m: 2 }} variant='body1' align='center'>Forgot Password? <Link to='/login/recover'>Click here</Link></Typography>
        <Typography sx={{ m: 2 }} variant='body1' align='center'>Don't have an account? <Link to='/signup'>Sign Up</Link></Typography>
      </div>
    </>
  )
}

export default Login