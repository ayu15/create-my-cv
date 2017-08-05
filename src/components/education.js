import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconSchool from 'material-ui/svg-icons/social/school';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';

const education = data.ayush123.education;
const iconStyles = {
	"height": "32px",
	"width": "32px"
};
const summaryStyles = {
	"backgroundColor": "#94c5e9",
	"color": "black"
};

export default class Education extends React.Component {

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
			<div className="wEducation">
				<AppBar title="Education" onClick={this.toggleCard}
				        iconElementRight={<IconExpandMore onClick={this.toggleCard} style={iconStyles}/>} style={summaryStyles} titleStyle={summaryStyles}
				        iconElementLeft={<IconSchool style={iconStyles}/>}/>
				{!this.state.isHidden && <Card style={summaryStyles}>
					<div className="listContent">
					<p>graduated from {education.graduation.college}</p>
					<p>during {education.graduation.year} </p>
					<p>with {education.graduation.GPA} GPA</p>
					</div>
				</Card>}
			</div>);
	}
}