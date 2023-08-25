import { createSlice } from '@reduxjs/toolkit'

const taxSlice = createSlice({
  name: 'tax',
  initialState: { value: 0, isPercent: false },
  reducers: {
    setTax(state, action) {
      return { ...state, value: action.payload }
    },
    setIsPercent(state, action) {
      return { ...state, isPercent: action.payload }
    },
    setAll(state, action) {
      return { ...action.payload }
    }
  }
})

export const { setTax, setIsPercent, setAll } = taxSlice.actions

export default taxSlice.reducer