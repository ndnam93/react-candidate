import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  dept: string
  ip_address: string
}

// Define a type for the slice state
interface UsersState {
  data: User[]
}

// Define the initial state using that type
const initialState: UsersState = {
  data: [],
}

export const usersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload;
    },
  },
})

export const { setUsers } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.data

export default usersSlice.reducer


