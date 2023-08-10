import { createSlice } from '@reduxjs/toolkit'

const peopleSlice = createSlice({
  name: 'people',
  initialState: [],
  reducers: {
    addPerson(state, action) {
      state.push(action.payload)
    },
    updateItemsOfPerson(state, action) {
      const updatedPerson = action.payload
      return state.map(person => person.id !== updatedPerson.id ? person : updatedPerson)
    }
  }
})

export const { addPerson, updateItemsOfPerson } = peopleSlice.actions

export default peopleSlice.reducer