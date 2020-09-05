import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../../constants';

const initialState = {
	region: {
		latitude: 40.104585872069094,
		longitude: -88.23382370182148,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	},
};

export default function MapReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
