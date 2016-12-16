import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import Button from 'react-native-button';
import Style from '../utils/Style';
import DrumButton from './DrumButton';

export default class DrumKit extends Component {
  render() {
    return (
    	<View style={styles.container}>
	    	
    		<View style={styles.title}>
    			<Text style={styles.titleText}>
    				DrumKit
    			</Text>
    		</View>

    	<View style={styles.drumKit}>
	    	<View style={styles.col}>
					 <DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='SNARE'
					 	source='snare.wav' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='OPENHAT'
					 	source='openhat.wav' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='HIHAT'
					 	source='hihat.wav' />
				 </View>

				 <View style={styles.col}>
			    <DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='KICK'
					 	source='kick.wav' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='TOM'
					 	source='tom.wav' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='RIDE'
					 	source='ride.wav' />
				 </View>

				 <View style={styles.col}>
			    <DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='CLAP'
					 	source='clap.wav' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='TINK'
					 	source='tink.wav' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='BOOM'
					 	source='boom.wav' />
				 </View>
				</View>

			 </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	alignItems: 'center',
  	flexDirection: 'column',
  },

  title: {
  	marginTop: Style.UNIT,
  },

  titleText: {
  	fontSize: Style.UNIT * 2,
  	color: 'white',
  	textShadowRadius: 10,
  	textShadowColor: 'black',
  	textShadowOffset: {width: 1, height: 1},
  },

  col: {
  	flex: 1,
  	flexDirection: 'column',
  },

  text: {
  	fontSize: Style.UNIT * 1.3,
  	color: 'white',
  	textShadowRadius: 20,
  	textShadowColor: 'yellow',
  	textShadowOffset: {width: 1, height: 1},
  },

  drumKit: {
  	flex: 1,
  	alignItems: 'center',
  	flexDirection: 'row',
  },

  drumButton: {
   	alignItems: 'center',
   	justifyContent: 'center',
  	height: Style.CARD_HEIGHT * 0.65,
   	margin: Style.UNIT * 0.2,
    borderWidth: Style.UNIT * 0.4,
    borderRadius: 5,
    borderColor: '#333333',
   	backgroundColor: 'gray',
  },
   
});