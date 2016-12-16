import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	Alert,
} from 'react-native';
import Button from 'react-native-button';
import Sound from 'react-native-sound';

export default class DrumButton extends Component {
	constructor() {
		super();

		this.onButtonPress = this.onButtonPress.bind(this);
	}

	onButtonPress() {
		const audio = new Sound(this.props.source, Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        audio.play(() => audio.release());
      }
    });
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