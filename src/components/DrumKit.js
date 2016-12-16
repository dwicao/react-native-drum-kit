import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Alert,
} from 'react-native';
import Button from 'react-native-button';
import DrumButton from './DrumButton';

export default class DrumKit extends Component {
	constructor() {
		super();

		this.onButtonPress = this.onButtonPress.bind(this);
	}

	onButtonPress() {
		Alert.alert('oh kucing :)');
	}

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
					 	text='SNARE' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='OPENHAT' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='HIHAT' />
				 </View>

				 <View style={styles.col}>
			    <DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='KICK' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='TOM' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='TICK' />
				 </View>

				 <View style={styles.col}>
			    <DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='CLAP' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='DRUM' />
					<DrumButton style={styles.drumButton}
					 	styleText={styles.text}
					 	text='BOOM' />
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
  	marginVertical: 20,
  },

  titleText: {
  	fontSize: 30,
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
  	color: 'white',
  	fontSize: 18,
  	textShadowRadius: 20,
  	textShadowColor: 'yellow',
  	textShadowOffset: {width: 1, height: 1},
  },

  drumKit: {
  	flex: 1,
  	flexDirection: 'row',
  },

  drumButton: {
  	height: 140,
   	alignItems: 'center',
   	justifyContent: 'center',
   	margin: 5,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#333333',
   	backgroundColor: 'gray',
  },
   
});