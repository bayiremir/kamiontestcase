import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {userSliceInitialStateType} from '../interface/userslice.interface';
import HomeStack from './stack/HomeStack';
import AuthStack from './stack/AuthStack';
import SplashScreen from 'react-native-splash-screen';

const Router = () => {
  const authLogin = useSelector(
    (state: {userSlice: userSliceInitialStateType}) =>
      state.userSlice.authLogin,
  );
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return <>{authLogin ? <HomeStack /> : <AuthStack />}</>;
};

export default Router;
