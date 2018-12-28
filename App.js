import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'
import ListChat from './screens/ListChat'
import ChatScreen from './screens/ChatScreen'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Post from './screens/Post'
import Intro from './screens/Intro'
import Profile from './screens/Profile'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    SignUp: SignUp,
    Post: Post,
    Intro: Intro,
    ChatScreen: ChatScreen,
    ListChat: ListChat,
    Profile: Profile,
  },
  {
    initialRouteName: 'Intro',
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
