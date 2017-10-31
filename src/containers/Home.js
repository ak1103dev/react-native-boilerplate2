import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { app, home } from '../redux/modules/';

class Home extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    console.log(this.props.data);
    console.log(this.props);
    return (
      <View>
        <Text>Home</Text>
        <Text>{this.props.message}</Text>
        <Button title="say hi" onPress={() => this.props.sayHi('John')} />
        <Button title="say hello" onPress={() => this.props.sayHello()} />
      </View>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  sayHi: PropTypes.func.isRequired,
  sayHello: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    message: state.app.message,
    data: state.home.data,
  }),
  dispatch => ({
    sayHi: name => dispatch(app.actions.sayHi(name)),
    sayHello: () => dispatch(app.actions.sayHello()),
    loadData: () => dispatch(home.actions.loadData()),
  }),
)(Home);
