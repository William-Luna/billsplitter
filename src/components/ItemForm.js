import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemsOfPerson } from '../reducers/peopleReducer'

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
      name: itemName,
      price
    }

    const personWithNewItem = { ...targetPerson, items: [...targetPerson.items, newItem] }

    dispatch(updateItemsOfPerson(personWithNewItem))


  }


  return (
    <div>
      <form onSubmit={addItem}>
        <select name='name' onChange={({ target }) => setName(target.value)}>
          <option value=''>Select A Person</option>
          {people.map(person =>
            <option key={person.name} value={person.name}>{person.name}</option>
          )}
        </select>
        <input type='text' name='itemName' value={itemName} onChange={({ target }) => setItemName(target.value)} placeholder='Item Name' required /><br />
        <input type='number' name='price' value={price} onChange={({ target }) => setPrice(target.value)} placeholder='Item Price' min='0' step='0.01' required /><br />
        <button type='submit'>Add Item</button>
      </form>
    </div>
  )
}

export default ItemForm