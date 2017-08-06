import React from 'react';
import { Card } from 'material-ui/Card';
import IconPeople from 'material-ui/svg-icons/social/people';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import data from '../data/data.json';
import AppBar from 'material-ui/AppBar';
import MaterialUIStyles from '../styles/materialUIStyles';
import IconExpandLess from 'material-ui/svg-icons/navigation/expand-less';

const experience = data.ayush123.experience;

export default class Experience extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isHidden: false
		};
		this.toggleCard = this.toggleCard.bind(this);
	}

	toggleCard() {
		this.setState({isHidden: !this.state.isHidden});
	}

	render() {
		return (
			<div className="wExperience">
				<AppBar title="Experience" onClick={this.toggleCard}
				        iconElementRight={this.state.isHidden ? <IconExpandMore onClick={this.toggleCard} style={MaterialUIStyles.icon}/> : <IconExpandLess onClick={this.toggleCard} style={MaterialUIStyles.icon}/>}
				        style={MaterialUIStyles.appBar} titleStyle={MaterialUIStyles.appBar}
				        iconElementLeft={<IconPeople style={MaterialUIStyles.icon}/>}/>
				{!this.state.isHidden && <Card style={MaterialUIStyles.card}>
					<div className="listContent">
						<p>{experience[0].name}, {experience[0].location}</p>
						<p>{experience[0].position}</p>
						<p>{experience[0].year}</p>
					</div>
				</Card>}
			</div>);
	}
}