import { createSlice } from "@reduxjs/toolkit"

//person object model
const initPerson = {
  name: 'init',
  amountSpent: 0,
  isPayer: false,
}

const peopleSlice = createSlice({
  name: 'people',
  initialState: [initPerson],
  reducers: {
    addPerson(state, action) { return },
    editPerson(state, action) { return }
  }
})

export const { addPerson, editPerson } = peopleSlice.actions

export default peopleSlice.reducer