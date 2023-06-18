import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPerson } from "../reducers/peopleReducer"

const PersonForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const addNewPerson = event => {
    event.preventDefault()

    const newPerson = {
      name,
      items: []
    }

    dispatch(addPerson(newPerson))
  }

  return (
    <form onSubmit={addNewPerson}>
      <input name='name' value={name} onChange={({ target }) => setName(target.value)} />
      <button type='submit'>Add Person</button>
    </form>
  )
}

export default PersonForm