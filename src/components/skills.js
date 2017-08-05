import React from 'react';
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';
import SkillsList from "./skillsList";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconBuild from 'material-ui/svg-icons/action/build';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';

const skillsStyles = {
	"backgroundColor": "#94c5e9",
	"color": "black"
};
const iconStyles = {
	"height": "32px",
	"width": "32px"
};
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
				        style={skillsStyles} titleStyle={skillsStyles} iconElementLeft={<IconBuild style={iconStyles}/>}
				        iconElementRight={<IconExpandMore onClick={this.toggleCard} style={iconStyles} />}/>
				{!this.state.isHidden && <Card style={skillsStyles}>
					<SkillsList list={data.ayush123.skills}/>
				</Card>}
			</div>);
	}
}