import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconSchool from 'material-ui/svg-icons/social/school';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';
import MaterialUIStyles from '../styles/materialUIStyles'

const education = data.ayush123.education;

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
				        iconElementRight={<IconExpandMore onClick={this.toggleCard} style={MaterialUIStyles.icon}/>}
				        style={MaterialUIStyles.appBar} titleStyle={MaterialUIStyles.appBar}
				        iconElementLeft={<IconSchool style={MaterialUIStyles.icon}/>}/>
				{!this.state.isHidden && <Card style={MaterialUIStyles.card}>
					<div className="listContent">
						<p>graduated from {education.graduation.college}</p>
						<p>during {education.graduation.year} </p>
						<p>with {education.graduation.GPA} GPA</p>
					</div>
				</Card>}
			</div>);
	}
}