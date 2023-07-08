import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPerson } from "../reducers/peopleReducer"
import { v4 } from "uuid"
import { TextField, Button, FormControl, Paper, Typography } from "@mui/material"

const PersonForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const people = useSelector(({ people }) => { return people })

  const addNewPerson = event => {
    event.preventDefault()

    //basic same name validation
    if (people.find(p => p.name === name)) return

    const newPerson = {
      id: v4(),
      name,
      items: [],
      subtotal: parseFloat(0)
    }

    event.target.name.value = ''
    setName('')

    dispatch(addPerson(newPerson))
  }

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Add A Person</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <form onSubmit={addNewPerson}>
          <FormControl>
            <TextField variant="filled" label="Name" size="small" name='name' value={name} onChange={({ target }) => setName(target.value)} required /><br />
            <Button variant="contained" type='submit'>Add Person</Button>
          </FormControl>
        </form>
      </Paper>
    </>
  )
}

export default PersonForm