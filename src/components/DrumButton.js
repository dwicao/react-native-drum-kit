import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Alert,
} from 'react-native';
import Button from 'react-native-button';
import Sound from 'react-native-sound';
import Style from '../utils/Style';

export default class DrumButton extends Component {
	constructor() {
		super();

		this.onButtonPress = this.onButtonPress.bind(this);
	}

	onButtonPress() {
		const audio = new Sound(this.props.source, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        return;
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


DrumButton.defaultProps = {
	style: {
		alignItems: 'center',
   	justifyContent: 'center',
  	height: Style.CARD_HEIGHT * 0.65,
   	margin: Style.UNIT * 0.2,
    borderWidth: Style.UNIT * 0.4,
    borderRadius: 5,
    borderColor: '#333333',
   	backgroundColor: 'gray',
	},

	styleText: {
  	fontSize: Style.UNIT * 1.3,
  	color: 'white',
  	textShadowRadius: 20,
  	textShadowColor: 'yellow',
  	textShadowOffset: {width: 1, height: 1},
	},
}


DrumButton.propTypes = {
	style: PropTypes.object,
	styleText: PropTypes.object,
	text: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
}