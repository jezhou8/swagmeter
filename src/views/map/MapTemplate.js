import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';

// This is our ProfileTemplate component definition, has nothing more than the skeleton
const MapTemplate = (props) => (
	<MapView
		style={styles.map}
		region={props.region}
		onRegionChange={() => {}}
		showsUserLocation
	></MapView>
);

const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '100%',
	},
});

export default MapTemplate;
