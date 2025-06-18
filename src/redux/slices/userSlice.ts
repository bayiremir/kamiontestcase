import {createSlice} from '@reduxjs/toolkit';
import {
  userSliceInitialStateType,
  User,
} from '../../interface/userslice.interface';
import {storage} from '../../utils/Storage';

const storedUser = storage.getString('user');

const initialState: userSliceInitialStateType = {
  user: storedUser ? JSON.parse(storedUser) : null,
  authLogin: storage.getString('authLogin') === 'true' || false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuthLogin: (state, action) => {
      state.authLogin = action.payload;
      storage.set('authLogin', action.payload.toString());
    },
    setUser: (state, action) => {
      state.user = action.payload;
      storage.set('user', JSON.stringify(action.payload));
    },
    loginSuccess: (state, action) => {
      const userData: User = action.payload;
      state.user = userData;
      state.authLogin = true;
      storage.set('user', JSON.stringify(userData));
      storage.set('authLogin', 'true');
    },
    clearUser: state => {
      state.user = null;
      state.authLogin = false;
      storage.delete('user');
      storage.set('authLogin', 'false');
    },
  },
});

export const {setAuthLogin, setUser, loginSuccess, clearUser} =
  userSlice.actions;
export default userSlice.reducer;
