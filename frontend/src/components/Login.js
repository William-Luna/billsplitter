import { Button, FormControl, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setUser } from "../reducers/userReducer"
import { setErrorMessage, setSuccessMessage } from "../reducers/notificationReducer"
import loginService from "../services/login"
import billsService from "../services/bills"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const loggedUser = useSelector(({ user }) => { return user })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })
      //user {token, username, name}

      window.localStorage.setItem('loggedUser', JSON.stringify(user)) //set user+token in local storage
      billsService.setToken(user.token) //set token for authorized actions e.g. saving bill
      dispatch(setUser(user)) //set current user in state
      setUsername('')
      setPassword('')
      dispatch(setSuccessMessage(`${user.name} logged in successfully!`))
      navigate('/')
    } catch (exception) {
      dispatch(setErrorMessage('The username or password entered is invalid.'))
      console.log(exception)
    }
  }

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }} align="center"><strong>Sign In</strong></Typography>
      <form onSubmit={handleLogin} align='center'>
        <FormControl >
          <TextField id='username' sx={{ mb: 2 }} variant='filled' label='Username' size='small' type='text' name='username' value={username} onChange={({ target }) => setUsername(target.value)} required />
          <TextField id='password' sx={{ mb: 2 }} variant='filled' label='Password' size='small' type='password' name='password' value={password} onChange={({ target }) => setPassword(target.value)} required />
          <Button id='submitlogin' variant='contained' type='submit'>Sign In</Button>
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