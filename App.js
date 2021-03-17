import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStoryScreen';
import ReadStory from './screens/ReadStoryScreen';

export default class App extends React.Component{
  render()
  {
    return (
      <View>
         <AppContainer/>
      </View>
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Read: {screen: ReadStory}
})

const AppContainer = createAppContainer(tabNavigator)