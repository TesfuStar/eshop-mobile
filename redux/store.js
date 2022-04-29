import { createSlice, configureStore } from '@reduxjs/toolkit'
import useReducer  from './userReducer'
import cartReducer  from './cartReducer'



export default configureStore ({
   reducer:{
       cart:cartReducer,
       user:useReducer
   }
})