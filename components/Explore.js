import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIcon: {
    fontSize: 22
  }
});

export default class Explore extends React.Component {
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-search" style={[ styles.tabBarIcon, { color: tintColor}]}/>,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Explore Page</Text>
      </View>
    );
  }
}

