import React from 'react';
import {useSelector} from 'react-redux';
import {userSliceInitialStateType} from '../interface/userslice.interface';
import HomeStack from './stack/HomeStack';
import AuthStack from './stack/AuthStack';

const Router = () => {
  const authLogin = useSelector(
    (state: {userSlice: userSliceInitialStateType}) =>
      state.userSlice.authLogin,
  );

  return <>{authLogin ? <HomeStack /> : <AuthStack />}</>;
};

export default Router;
