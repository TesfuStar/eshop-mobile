/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { cartTotal } from './redux/cartReducer'
store.dispatch(cartTotal())
AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <App />
  </Provider>
));
