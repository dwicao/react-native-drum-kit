import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
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
			<TouchableOpacity
				activeOpacity={0.4}
				onPress={this.onButtonPress}>
			  	<View style={this.props.style}>
			  		<Text style={this.props.styleText}>
			  			{this.props.text}
			  		</Text>
			  	</View>
			</TouchableOpacity>
		);
	}
}


DrumButton.defaultProps = {
	style: {
		alignItems: 'center',
   	justifyContent: 'center',
  	height: Style.CARD_HEIGHT * 0.65,
   	margin: Style.UNIT * 0.2,
    borderWidth: 5,
    borderColor: '#508356',
   	backgroundColor: '#9bd662',
	},

	styleText: {
  	fontSize: Style.UNIT * 1.3,
  	fontWeight: 'bold',
  	color: '#3a313e',
  	textShadowRadius: 5,
  	textShadowColor: '#508356',
  	textShadowOffset: {width: 1, height: 1},
	},
};


DrumButton.propTypes = {
	style: PropTypes.object,
	styleText: PropTypes.object,
	text: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
};