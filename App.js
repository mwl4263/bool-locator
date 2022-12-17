/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { createAppContainer, NavigationActions, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { useState } from 'react';
import type { Node } from 'react';
import { Switch, Button } from 'react-native';
import { Dimensions } from 'react-native'
import Bool from './screens/Bool';
import MapsScreen from './components/MapScreen';

const MainNavigator = createStackNavigator({
	Bool: { screen: Bool },
    Map: {screen: MapsScreen}
});
const App = createAppContainer(MainNavigator);
export default App;