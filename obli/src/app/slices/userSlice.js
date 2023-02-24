import { createSlice } from '@reduxjs/toolkit';

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from '../../utils/storage';

const initialState = {
  loggedUser: getFromLocalStorage('toDoAppUser'),
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      const { payload } = action;
      state.loggedUser = payload;
      setInLocalStorage('toDoAppUser', JSON.stringify(payload));
    },
    setLogoutUser: (state) => {
      state.loggedUser = null;
      removeFromLocalStorage('toDoAppUser');
    },
    setRegisterUser: (state, action) => {
      const { payload } = action;
      state.data = payload;
  }
  },
});

export const { setLoginUser, setLogoutUser , setRegisterUser} = userSlice.actions;
export default userSlice.reducer;