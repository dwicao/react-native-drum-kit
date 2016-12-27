import codePush from "react-native-code-push";
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
  componentDidMount() {
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
  }

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
    backgroundColor: '#feffc0',
  }

});

AppRegistry.registerComponent('drumkit', () => codePush(Home) );
