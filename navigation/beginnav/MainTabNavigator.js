import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, StyleSheet,} from 'react-navigation';
import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../../screens/HomeScreen';
import Login from '../../screens/LoginNav';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const LoginStack = createStackNavigator({
  Links: Login,
});
LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  showTabBar: false,
  tabBarHidden: true,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-log-in' : 'md-log-in'}
      
    />
    
  ),

  };
export default createBottomTabNavigator({
  HomeStack,
  LoginStack
});
