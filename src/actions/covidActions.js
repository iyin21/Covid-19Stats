import axios from "axios";

export const GetCovidStat = (page) => async dispatch => {
	try {
		dispatch({
			type: "COVID_STAT_LOADING"
		});
		const perPage = 15;
		const offset = (page* perPage) - perPage;
		const res = await axios.get("https://covidnigeria.herokuapp.com/api?limit=${perPage}&offset=${offset}")

		dispatch({
			type: "COVID_STAT_SUCCESS",
			payload: res.data
		})
	}catch (e) {
		dispatch({
			type: "COVID_STAT_FAIL",
		})
	}
};