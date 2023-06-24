import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPerson } from "../reducers/peopleReducer"
import { v4 } from "uuid"

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

    dispatch(addPerson(newPerson))
  }

  return (
    <div>
      <form onSubmit={addNewPerson}>
        <input name='name' value={name} onChange={({ target }) => setName(target.value)} required />
        <button type='submit'>Add Person</button>
      </form>
    </div>
  )
}

export default PersonForm