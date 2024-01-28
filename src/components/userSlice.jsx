import { createSlice } from '@reduxjs/toolkit'
import { userList } from './Server'

const userSlice = createSlice({
  name: 'counter',
  initialState: userList,
  reducers: {
    addUser: (state,action) => {
      state.push(action.payload)
    },
    updateUser: (state,action) => {
      const {name,email,id} = action.payload
      const result = state.find(user => user.id == id)
      if(result){
        result.name = name
        result.email = email
      }
    },
    deleteUser: (state,action) => {
      const {id} = action.payload
      const result = state.find(user => user.id == id)
      if(result){
        return state.filter(user => user.id !== id)
      }
    }
  }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer