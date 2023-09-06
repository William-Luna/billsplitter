import { createSlice } from '@reduxjs/toolkit'

const tipSlice = createSlice({
  name: 'tip',
  initialState: { value: 0, isPercent: false },
  reducers: {
    setTip(state, action) {
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

export const { setTip, setIsPercent, setAll } = tipSlice.actions

export default tipSlice.reducer