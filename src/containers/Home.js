import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { app } from '../redux/modules/';

const Home = props => (
  <View>
    <Text>Home</Text>
    <Text>{props.message}</Text>
    <Button title="say hi" onPress={() => props.sayHi('John')} />
    <Button title="say hello" onPress={() => props.sayHello()} />
  </View>
);

Home.propTypes = {
  message: PropTypes.string.isRequired,
  sayHi: PropTypes.func.isRequired,
  sayHello: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    message: state.app.message,
  }),
  dispatch => ({
    sayHi: name => dispatch(app.actions.sayHi(name)),
    sayHello: () => dispatch(app.actions.sayHello()),
  }),
)(Home);
