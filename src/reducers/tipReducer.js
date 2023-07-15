import { createSlice } from '@reduxjs/toolkit'

const tipSlice = createSlice({
  name: 'tip',
  initialState: 0,
  reducers: {
    setTip(state, action) {
      return action.payload
    }
  }
})

export const { setTip } = tipSlice.actions

export default tipSlice.reducer