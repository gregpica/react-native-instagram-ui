import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIcon: {
    fontSize: 18
  }
});

export default class Profile extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="user-o" style={[ styles.tabBarIcon, { color: tintColor}]}/>,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

