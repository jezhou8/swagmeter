import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import Constants from "expo-constants";
import { firestore, firestoreRef, fireRealTime } from "./firebase/app";

export default class App extends Component {
	state = {
		mapRegion: {
			latitude: 40.103841,
			longitude: -88.227274,
			latitudeDelta: 0.0005,
			longitudeDelta: 0.0005,
		},
		deviceID: Constants.installationId,
		swag: 0,
	};

	constructor(props) {
		super(props);
		this.writeUserData();
	}

	componentDidMount() {
		this._getLocationAsync();
		this._getData();
	}

	_getData = () => {
		let ref = fireRealTime.ref("/");
		ref.on("value", (snapshot) => {
			const state = snapshot.val();
			this.setState(state);
		});
	};
	writeUserData = () => {
		fireRealTime.ref("/").set(this.state);
		console.log("DATA SAVED");
	};

	_writeData = () => {
		firestore
			.collection("users")
			.doc(this.state.deviceID)
			.set(
				{
					...this.state,
				},
				{ merge: true }
			);
	};

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
				showsUserLocation
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
