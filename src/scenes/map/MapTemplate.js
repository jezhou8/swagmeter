import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

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
		flex: 1,
	},
});

export default MapTemplate;
