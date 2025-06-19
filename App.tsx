import React from 'react';
import Router from './src/navigation/Router';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
