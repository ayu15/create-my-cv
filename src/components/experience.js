import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconPeople from 'material-ui/svg-icons/social/people';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';

const experience = data.ayush123.experience;
const iconStyles = {
	"height": "32px",
	"width": "32px"
};
const summaryStyles = {
	"backgroundColor": "#94c5e9",
	"color": "black"
};

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
				        iconElementRight={<IconExpandMore onClick={this.toggleCard} style={iconStyles}/>} style={summaryStyles} titleStyle={summaryStyles}
				        iconElementLeft={<IconPeople style={iconStyles}/>}/>
				{!this.state.isHidden && <Card style={summaryStyles}>
					<div className="listContent">
						<p>{experience[0].name}, {experience[0].location}</p>
						<p>{experience[0].position}</p>
						<p>{experience[0].year}</p>
					</div>
				</Card>}
			</div>);
	}
}