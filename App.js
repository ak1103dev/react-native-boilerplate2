/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeRouter, Route, Switch, Link } from 'react-router-native';
import Home from './src/containers/Home';
import About from './src/containers/About';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Text>xxxx</Text>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/about">
        <Text>About</Text>
      </Link>
      <Text>-----------------</Text>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </View>
  </NativeRouter>
);

export default App;
