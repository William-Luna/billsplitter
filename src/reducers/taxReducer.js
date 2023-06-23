import { createSlice } from "@reduxjs/toolkit"

const taxSlice = createSlice({
  name: 'tax',
  initialState: 0,
  reducers: {
    setTax(state, action) {
      return action.payload
    }
  }
})

export const { setTax } = taxSlice.actions

export default taxSlice.reducer