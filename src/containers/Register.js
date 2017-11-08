import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
} from 'react-native';

const Register = ({ navigation }) => (
  <View>
    <Text>register</Text>
    <Button
      onPress={() => navigation.navigate('Login')}
      title="Chat with Lucy"
    />
  </View>
);
Register.propTypes = {
  navigation: PropTypes.node.isRequired,
};

export default Register;
