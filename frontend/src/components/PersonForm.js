import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPerson } from '../reducers/peopleReducer'
import { v4 } from 'uuid'
import { TextField, Button, FormControl, Paper, Typography } from '@mui/material'
import { setErrorMessage, setSuccessMessage } from '../reducers/notificationReducer'

const genColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

const PersonForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const people = useSelector(({ people }) => { return people })

  const addNewPerson = event => {
    event.preventDefault()

    //basic same name validation
    if (people.find(p => p.name === name)) {
      dispatch(setErrorMessage(`${name} already exists in bill. Please use differentiating names to avoid confusion.`))
      return
    }

    const newPerson = {
      id: v4(),
      name,
      phone: phone || '0000000000',
      items: [],
      subtotal: parseFloat(0),
      color: genColor()
    }

    event.target.name.value = ''
    event.target.phone.value = ''
    setName('')
    setPhone('')

    dispatch(addPerson(newPerson))
    dispatch(setSuccessMessage(`${newPerson.name} has been added!`))
  }

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Add A Person</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <form onSubmit={addNewPerson}>
          <FormControl>
            <TextField id='personformname' variant="filled" type='text' label="Name" size="small" name='name' value={name} onChange={({ target }) => setName(target.value)} required />
            <br />
            <TextField id='personformtel' variant="filled" type='tel' label="Phone Number (Optional)" size="small" name='phone' value={phone} onChange={({ target }) => setPhone(target.value)} />
            <br />
            <Button id='personformbutton' variant="contained" type='submit'>Add Person</Button>
          </FormControl>
        </form>
      </Paper>
    </>
  )
}

export default PersonForm