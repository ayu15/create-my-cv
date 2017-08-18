import React from 'react';
import data from '../data/data.json'
import SkillsList from "./skillsList";

export default class Skills extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="wSkl">
					<SkillsList list={data.ayush123.techStack}/>
			</div>);
	}
}