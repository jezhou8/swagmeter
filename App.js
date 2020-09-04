import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants } from "expo";
import * as Location from "expo-location";
import MapView from "react-native-maps";

export default class App extends Component {
	state = {
		mapRegion: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.005,
			longitudeDelta: 0.005,
		},
		hasLocationPermissions: false,
		locationResult: null,
	};

	componentDidMount() {
		this._getLocationAsync();
	}

	_handleMapRegionChange = (mapRegion) => {
		console.log(mapRegion);
	};

	_getLocationAsync = async () => {
		let { status } = await Location.requestPermissionsAsync();
		if (status !== "granted") {
			setErrorMsg("Permission to access location was denied");
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({
			mapRegion: {
				...this.state.mapRegion,
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			},
		});
		console.log(this.state.mapRegion);
	};

	render() {
		return (
			<MapView
				style={styles.map}
				region={this.state.mapRegion}
				onRegionChange={this._handleMapRegionChange}
			></MapView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		color: "#34495e",
	},
	map: {
		flex: 1,
	},
});
