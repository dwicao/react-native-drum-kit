import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
  Platform,
  StatusBar,
} from 'react-native';
import DrumButton from './DrumButton';
import Style from '../utils/Style';

export default class DrumKit extends Component {
  render() {
    return (
    	<View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'#3a313e'} />
    		<View style={styles.title}>
    			<Text style={styles.titleText}>
    				DrumKit
    			</Text>
    		</View>

	    	<View style={styles.content}>
		    	<View style={styles.col}>
						<DrumButton text='SNARE' source='snare.wav' />
						<DrumButton text='OPENHAT' source='openhat.wav' />
						<DrumButton text='HIHAT'source='hihat.wav' />
					 </View>

					 <View style={styles.col}>
				    <DrumButton text='KICK' source='kick.wav' />
						<DrumButton text='TOM' source='tom.wav' />
						<DrumButton text='RIDE' source='ride.wav' />
					 </View>

					 <View style={styles.col}>
				    <DrumButton text='CLAP' source='clap.wav' />
						<DrumButton text='TINK'source='tink.wav' />
						<DrumButton text='BOOM'source='boom.wav' />
					 </View>
				</View>

			 </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    marginTop: 20,
  	alignItems: 'center',
  	flexDirection: 'column',
    backgroundColor: '#3a313e',
  },

  title: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleText: {
    flex: 1,
    textAlign: 'center',
  	fontSize: Style.UNIT * 2,
  	color: '#feff91',
  	textShadowRadius: 5,
  	textShadowColor: '#feff91',
  	textShadowOffset: {width: 1, height: 1},
  },

  col: {
  	flex: 1,
  	flexDirection: 'column',
  },

  content: {
    flex: 6,
    paddingHorizontal: Style.UNIT * 0.2,
    alignItems: 'center',
  	flexDirection: 'row',
    backgroundColor: '#feffc0',
  },
   
});