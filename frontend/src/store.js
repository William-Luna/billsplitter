import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './reducers/peopleReducer'
import taxReducer from './reducers/taxReducer'
import tipReducer from './reducers/tipReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
  reducer: {
    people: peopleReducer,
    tax: taxReducer,
    tip: tipReducer,
    notification: notificationReducer,
    user: userReducer
  }
})

export default store