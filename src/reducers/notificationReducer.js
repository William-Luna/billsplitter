import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {},
  reducers: {
    setSuccessMessage(state, action) {
      return { ...state, open: true, severity: 'success', message: action.payload }
    },
    closeMessage(state, action) {
      return { ...state, open: false }
    }
  }
})

export const { setSuccessMessage, closeMessage } = notificationSlice.actions
export default notificationSlice.reducer