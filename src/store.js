import { configureStore } from '@reduxjs/toolkit'
import artistReducer from "./pages/Slice"

export const store = configureStore({
  reducer: {
    artists:artistReducer
  },
})

