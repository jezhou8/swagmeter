import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";
import MapTemplate from "./MapTemplate";
import { connect } from "react-redux";

const MapScreen = (props) => <MapTemplate {...props}></MapTemplate>;

const mapStateToProps = (state) => ({
	region: state.mapReducer.region,
});

const mapDispatchToProps = {
	// our dispatch to props implementation
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
