import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemsOfPerson } from '../reducers/peopleReducer'
import { v4 } from 'uuid'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material'

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
    console.log(`TargetPerson: ${targetPerson.name}`)

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
          <Select name='name' labelId="person-of-item-label" label="Select A Person" onChange={({ target }) => setName(target.value)}>
            {people.map(person =>
              <MenuItem key={person.id} value={person.name}>{person.name}</MenuItem>
            )}
          </Select>
          <input type='text' name='itemName' value={itemName} onChange={({ target }) => setItemName(target.value)} placeholder='Item Name' required /><br />
          <input type='number' name='price' value={price} onChange={({ target }) => setPrice(target.value)} placeholder='Item Price' min='0' step='0.01' required /><br />
          <button type='submit'>Add Item</button>
        </FormControl>
      </form>
    </div>
  )
}

export default ItemForm