import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const RecentChatsScreen = ({ navigation }) => (
  <View>
    <Text>List of recent chats</Text>
    <Button
      onPress={() => navigation.navigate('Chat', { user: 'Lucy' })}
      title="Chat with Lucy"
    />
  </View>
);
RecentChatsScreen.propTypes = {
  navigation: PropTypes.node.isRequired,
};

const AllContactsScreen = ({ navigation }) => (
  <View>
    <Text>List of all contacts</Text>
    <Button
      onPress={() => navigation.navigate('Chat', { user: 'Lucy' })}
      title="Chat with Lucy"
    />
  </View>
);
AllContactsScreen.propTypes = {
  navigation: PropTypes.node.isRequired,
};

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

const ChatScreen = () => (
  <View>
    <Text>Chat with Lucy</Text>
  </View>
);

export const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: 'Chat with Lucy',
    },
  },
});

const App = () => (
  <SimpleApp />
);

export default App;
