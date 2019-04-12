import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, StyleSheet,} from 'react-navigation';
import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../../screens/HomeScreenLogged.1';
import GroupSelect from '../../screens/GroupSelect';
import Whattodo from '../../screens/WhaToDo';
import GroupInfo from '../../screens/GroupInfo';
import homepagestyle from '../../screens/homepagestyle';
import Settings from '../../screens/Setting';



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});


HomeStack.navigationOptions = {
  showTabBar: false,
    tabBarHidden: true,
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
    const WhattodoStack = createStackNavigator({
      Links: Whattodo,
    });
    WhattodoStack.navigationOptions = {
      tabBarLabel: 'Whattodo',
      showTabBar: false,
      tabBarHidden: true,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-log-in' : 'md-contacts'}             
        />  
      ),
      };
      const homepagestyleStack = createStackNavigator({
        Links: homepagestyle,
      });
      homepagestyleStack.navigationOptions = {
        tabBarLabel: 'homepagestyle',
        showTabBar: false,
        tabBarHidden: true,
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-log-in' : 'md-contacts'}             
          />  
        ),
        };
    const GroupInfoStack = createStackNavigator({
      Links: GroupInfo,
    });
    GroupInfoStack.navigationOptions = {
      tabBarLabel: 'GroepInformatie',
      showTabBar: false,
      tabBarHidden: true,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}    
        />  
      ),
      };
        const SettingsStack = createStackNavigator({
          Links: Settings,
        });
        SettingsStack.navigationOptions = {
          tabBarLabel: 'Settings',
          showTabBar: true,
          tabBarHidden: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-cog' : 'md-settings'}
            />  
          ),
          };

export default createBottomTabNavigator({
  HomeStack,
  /*GroupSelectStack,*/
  WhattodoStack,
  GroupInfoStack,
  /*MakegroupStack,*/
  SettingsStack,
});
