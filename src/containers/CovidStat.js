import React from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {GetCovidStat} from "../actions/covidActions";

const CovidStat = () => {
	const dispatch = useDispatch();
	const covidStat = useSelector(state => state.CovidStat); 

	React.useEffect( () => {
		FetchData(1)
	}, []);

	const FetchData = (page = 1) => {
		dispatch(GetCovidStat(page))
	}
	// const ShowData = () =>{
	// 	if(!_.isEmpty(covidStat.data)) {
	// 		return(
	// 			<>
	// 			 {Object.keys(covidStat.data).map((el, i) =>(
	// 				//console.log({el.totalSamplesTested);
	// 				<div key={i}>
	// 					<p>{el[}</p>
	// 				</div>	
	// 			 ))}
	// 			</> 
	// 		)	 
	// 	}
	
	const ShowData = () =>{
		if(!_.isEmpty(covidStat.data)) {
			// return(
			// 	<div>
			// 		<h2>{covidStat.data.death}</h2>
			// 	</div>
			// 	)
			return(
				<div className="container">
					<p>Total samples tested:{covidStat.data.totalSamplesTested}</p>
					<p>Total confirmed cases{covidStat.data.totalConfirmedCases}</p>
					<p>Total active cases:{covidStat.data.totalActiveCases}</p>
					<p>Total number of discharged{covidStat.data.dischaged}</p>
					<p>Total number of deaths-{covidStat.data.death}</p>
					<h2> Statistics based on each state</h2>
					{covidStat.data.states.map(el => {
					return( 
						<div>
							<h4>{el.state} State</h4>
							<p>Confirmed cases-{el.confirmedCases}</p>
							<p>Cases on admission-{el.casesOnAdmission}</p>
							<p>Discharged-{el.discharged}</p>
							<p>Death-{el.death}</p>
						</div>
					)	   
				})}
			</div> 
			)
		}
		
		if(covidStat.loading) {
			return <p>Loading...</p>
		}

		if(covidStat.errorMsg !== "") {
			return <p>{covidStat.errorMsg}</p>
		}
		return <p>Unable to get data</p>

	}
	return(
		<div>
			{ShowData()}
		</div>
	)
};

export default CovidStat;