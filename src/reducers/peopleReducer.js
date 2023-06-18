import { createSlice } from "@reduxjs/toolkit"

//person object model
const initItem = {
  name: 'item',
  price: 100
}

const initPerson = {
  name: 'init',
  items: [initItem]
}

const peopleSlice = createSlice({
  name: 'people',
  initialState: [initPerson],
  reducers: {
    addPerson(state, action) {
      state.push(action.payload)
    },
    updateItemsOfPerson(state, action) {
      const updatedPerson = action.payload
      return state.map(person => person.name !== updatedPerson.name ? person : updatedPerson)
    }
  }
})

export const { addPerson, updateItemsOfPerson } = peopleSlice.actions

export default peopleSlice.reducer