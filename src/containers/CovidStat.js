import React from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {GetCovidStat} from "../actions/covidActions";
import ../

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
			return covidStat.data.states.map(el => {
				return( 
					<div className="container">
						<h3>State-{el.state}</h3>
						<p>Confirmed cases-{el.confirmedCases}</p>
						<p>Cases on admission-{el.casesOnAdmission}</p>
						<p>Discharged-{el.discharged}</p>
						<p>Death-{el.death}</p>
					</div>
				)	   
			})
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