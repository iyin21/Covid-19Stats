const DefaultState = {
	loading: false,
	data: [],
	errorMsg: ""
};

const CovidStatReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case "COVID_STAT_LOADING":
			return {
				...state,
				loading: true,
				errorMsg: ""
			};
		case "COVID_STAT_FAIL":
			return {
				...state,
				loading: true,
				errorMsg: "unable to get covidstats"
			};
		case "COVID_STAT_SUCCESS":
			return {
				...state,
				loading: true,
				data: action.payload.data,
				errorMsg: ""
			}		
		default:
			return state
	}
};

export default CovidStatReducer;