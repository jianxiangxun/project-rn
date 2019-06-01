import homeScreen from '@/views/home/home.js'
import cityScreen from '@/views/home/city.js'
import favorScreen from '@/views/favor/favor.js'
import messageScreen from '@/views/message/message.js'
import exploreScreen from '@/views/explore/explore.js'
import myScreen from '@/views/my/my.js'
import config from '@/config'

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Alert, KeyboardAvoidingView, BackHandler, Animated, Easing } from 'react-native'
import { createStackNavigator ,createBottomTabNavigator ,createSwitchNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/iconfont'

const StackNavigatorConfig = {
  mode: 'modal',
  navigationOptions: {
    headerStyle: {
      backgroundColor: config.color.theme,
    },
    headerTintColor: config.color.GhostWhite,
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene

      const height = layout.initHeight
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      })

      return { opacity, transform: [{ translateY }] }
    },
  })
}

//tab项
const home = createStackNavigator({
  home:{ screen:homeScreen,navigationOptions:{headerTitle:'首页'} },
  city:{screen:cityScreen,navigationOptions:{headerTitle:'城市'} }
}, StackNavigatorConfig)

const message = createStackNavigator({
  message:{ screen:messageScreen,navigationOptions:{headerTitle:'消息'} }
}, StackNavigatorConfig)

const explore = createStackNavigator({
  explore:{ screen:exploreScreen,navigationOptions:{headerTitle:'发现'} }
}, StackNavigatorConfig)

const favor = createStackNavigator({
  favor:{ screen:favorScreen,navigationOptions:{headerTitle:'棒!'} }
}, StackNavigatorConfig)

const my = createStackNavigator({
  my:{ screen:myScreen,navigationOptions:{headerTitle:'我的'} }
}, StackNavigatorConfig)

const Router = createBottomTabNavigator({ home, explore, favor, message, my }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        return <Icon color={tintColor} size={26} name={focused?(routeName+'fill'):routeName}></Icon>;
      },
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let tabBarLabel
        switch(routeName){
          case 'home':
            tabBarLabel = '首页';
            break;
          case 'explore':
            tabBarLabel = '发现';
            break;
          case 'message':
            tabBarLabel = '消息';
            break;
          case 'favor':
            tabBarLabel = '棒!';
            break;
          case 'my':
            tabBarLabel = '我的';
            break;
        }
        return <Text style={{color: tintColor,fontSize: 16,textAlign: 'center',}}>{tabBarLabel}</Text>
      }
    }),
    tabBarOptions: {
      showIcon: true,
      swipeEnabled: true,
      activeTintColor: config.color.theme,
      inactiveTintColor: config.color.Gray,
      activeBackgroundColor: config.color.Azure,
      tabStyle: {
        paddingTop: 4,
        paddingBottom: 6
      },
      labelStyle: {
      },
      style: {
        height: 60,
        backgroundColor:config.color.GhostWhite,
      },
    }
});

export default Router


