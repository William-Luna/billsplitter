import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemsOfPerson } from '../reducers/peopleReducer'
import { v4 } from 'uuid'
import { Select, MenuItem, InputLabel, FormControl, TextField, Button, InputAdornment, Paper, Typography } from '@mui/material'
import { setSuccessMessage } from '../reducers/notificationReducer'

const ItemForm = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [itemName, setItemName] = useState('')
  const [price, setPrice] = useState('')

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
    setItemName('')
    setPrice('')

    dispatch(updateItemsOfPerson(personWithNewItem))
    dispatch(setSuccessMessage(`${newItem.name} has been added under ${targetPerson.name}'s tab.`))


  }


  return (
    <>
      <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>Add Items</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <form onSubmit={addItem}>
          <FormControl variant='filled'>
            <InputLabel id='person-of-item-label'>Select A Person</InputLabel>
            <Select id="itemformselect" size='small' name='name' labelId='person-of-item-label' label='Select A Person' defaultValue='' onChange={({ target }) => setName(target.value)} required align='left'>
              <MenuItem sx={{ display: people.length === 0 ? '' : 'none' }} disabled>No Person Added</MenuItem>
              {people.map(person =>
                <MenuItem key={person.id} value={person.name}>{person.name}</MenuItem>
              )}
            </Select>
            < br />
            <TextField id='itemformname' variant='filled' label='Item Name' size='small' type='text' name='itemName' value={itemName} onChange={({ target }) => setItemName(target.value)} placeholder='e.g. Pasta' required /><br />
            <TextField id='itemformprice' variant='filled' label='Item Price' size='small' type='number' name='price' value={price} onChange={({ target }) => setPrice(target.value)} min='0' step='0.01' required
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
            <br />
            <Button variant='contained' type='submit'>Add Item</Button>
          </FormControl>
        </form>
      </Paper>
    </>

  )
}

export default ItemForm