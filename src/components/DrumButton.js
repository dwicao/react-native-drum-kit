import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Alert,
} from 'react-native';
import Button from 'react-native-button';

export default class DrumButton extends Component {
	constructor() {
		super();

		this.onButtonPress = this.onButtonPress.bind(this);
	}

	onButtonPress() {
		Alert.alert('oh kucing :)');
	}

	render() {
		return (
			<Button onPress={this.onButtonPress}>
		  	<View style={this.props.style}>
		  		<Text style={this.props.styleText}>
		  			{this.props.text}
		  		</Text>
		  	</View>
			</Button>
		);
	}
}