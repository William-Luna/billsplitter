import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemsOfPerson } from '../reducers/peopleReducer'
import { v4 } from 'uuid'
import { Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material'

const ItemForm = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [itemName, setItemName] = useState('')
  const [price, setPrice] = useState(0.00)

  const people = useSelector(({ people }) => {
    return people
  })

  const addItem = event => {
    event.preventDefault()
    if (name === '') return
    const targetPerson = people.find(person => person.name === name)

    const newItem = {
      id: v4(),
      name: itemName,
      price: parseFloat(price)
    }

    const personWithNewItem = { ...targetPerson, items: [...targetPerson.items, newItem], subtotal: parseFloat(targetPerson.subtotal + newItem.price) }

    dispatch(updateItemsOfPerson(personWithNewItem))


  }


  return (
    <div>
      <form onSubmit={addItem}>
        <FormControl variant="filled">
          <InputLabel id="person-of-item-label">Select A Person</InputLabel>
          <Select name='name' labelId="person-of-item-label" label="Select A Person" defaultValue="" onChange={({ target }) => setName(target.value)} required>
            <MenuItem disabled>Pick A Person</MenuItem>
            {people.map(person =>
              <MenuItem key={person.id} value={person.name}>{person.name}</MenuItem>
            )}
          </Select>< br />
          <TextField variant="filled" label="Item Name" size="small" name='itemName' value={itemName} onChange={({ target }) => setItemName(target.value)} placeholder='e.g. Pasta' required /><br />
          <TextField variant="filled" label="Item Price" type='number' name='price' value={price} onChange={({ target }) => setPrice(target.value)} min='0' step='0.01' required /><br />
          <Button variant="contained" type='submit'>Add Item</Button>
        </FormControl>
      </form>
    </div>

  )
}

export default ItemForm