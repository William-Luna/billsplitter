import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './reducers/peopleReducer'
import taxReducer from './reducers/taxReducer'
import tipReducer from './reducers/tipReducer'

const store = configureStore({
  reducer: {
    people: peopleReducer,
    tax: taxReducer,
    tip: tipReducer
  }
})

export default store