import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import Constants from "expo-constants";

export default class App extends Component {
	state = {
		mapRegion: {
			latitude: 40.103841,
			longitude: -88.227274,
			latitudeDelta: 0.005,
			longitudeDelta: 0.005,
		},
		hasLocationPermissions: false,
		locationResult: null,
		deviceID: Constants.installationId,
	};

	componentDidMount() {
		this._getLocationAsync();
	}

	_handleMapRegionChange = (mapRegion) => {};

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
