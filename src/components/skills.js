import React from 'react';
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';
import SkillsList from "./skillsList";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconBuild from 'material-ui/svg-icons/action/build';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import MaterialUIStyles from '../styles/materialUIStyles'

export default class Skills extends React.Component {

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
			<div className="wSkills">
				<AppBar title="Skills" onClick={this.toggleCard}
				        style={MaterialUIStyles.appBar} titleStyle={MaterialUIStyles.appBar}
				        iconElementLeft={<IconBuild style={MaterialUIStyles.icon}/>}
				        iconElementRight={<IconExpandMore onClick={this.toggleCard} style={MaterialUIStyles.icon}/>}/>
				{!this.state.isHidden && <Card style={MaterialUIStyles.card}>
					<SkillsList list={data.ayush123.skills}/>
				</Card>}
			</div>);
	}
}