/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider
} from 'react-native';
import DrumKit from './src/components/DrumKit';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrumKit />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }

});

AppRegistry.registerComponent('Home', () => Home);
