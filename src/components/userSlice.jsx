import { createSlice } from '@reduxjs/toolkit'
import { userList } from './Server'

const userSlice = createSlice({
  name: 'counter',
  initialState: userList,
  reducers: {
    
  }
})

export default userSlice.reducer