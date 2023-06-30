import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPerson } from "../reducers/peopleReducer"
import { v4 } from "uuid"
import { TextField, Button } from "@mui/material"

const PersonForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const addNewPerson = event => {
    event.preventDefault()

    const newPerson = {
      id: v4(),
      name,
      items: [],
      subtotal: parseFloat(0)
    }

    event.target.name.value = ''

    dispatch(addPerson(newPerson))
  }

  return (
    <div>
      <form onSubmit={addNewPerson}>
        <TextField variant="filled" label="Name" size="small" name='name' value={name} onChange={({ target }) => setName(target.value)} required />
        <Button variant="contained" type='submit'>Add Person</Button>
      </form>
    </div>
  )
}

export default PersonForm