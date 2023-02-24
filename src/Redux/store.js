import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './mydataSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})