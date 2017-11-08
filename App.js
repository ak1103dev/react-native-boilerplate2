import React from 'react';
// import { StackNavigator, TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Register from './src/containers/Register';
import Login from './src/containers/Login';

export const Root = StackNavigator({
  Index: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
});

const App = () => (
  <Root />
);

export default App;
