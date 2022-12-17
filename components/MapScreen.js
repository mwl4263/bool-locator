/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class MapsScreen extends Component {
	render() {
		return (<View style={[{ flex: 1, justifyContent: 'center' },
		{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }]}>
			<MapView
				style={{flex:1}}
				initialRegion={{
					latitude: 43.089410,
					longitude: -77.684900,
					latitudeDelta: 0.00522,
					longitudeDelta: 0.00221,
				}}
			/>
		</View>);
	}
}