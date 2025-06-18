import {configureStore} from '@reduxjs/toolkit';
import {mobileApi} from './services/mobileApi';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    [mobileApi.reducerPath]: mobileApi.reducer,
    userSlice: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mobileApi.middleware),
});
