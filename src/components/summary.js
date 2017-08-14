import React from 'react';
import SummaryList from "./summaryList";
import data from '../data/data.json';
const summary = data;

export default class Summary extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}



	render() {
		return (
			<div className="wSummary">
					<SummaryList list={summary.ayush123.summary}/>
			</div>);
	}
}