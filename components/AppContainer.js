import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Home';
import Explore from './Explore';
import MediaUpload from './MediaUpload';
import Notifications from './Notifications';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';


const HomeStack = createStackNavigator({
  HomeStack: {
    screen: Home
  }
});

const styles = StyleSheet.create({
  homeTabBarIcon: {
    fontSize: 20
  }
});


const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={[ styles.homeTabBarIcon, { color: tintColor}]}/>,
    }
  },
  ExploreTab: {
      screen: Explore
  },
  MediaUploadTab: {
      screen: MediaUpload
  },
  NotificationsTab: {
      screen: Notifications
  },
  ProfileTab: {
      screen: Profile
  }
},
{
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: '#000000',
    inactiveTintColor: '#4a4b4c'
  }
});



const AppContainer = createAppContainer(AppTabNavigator);

export default AppContainer;