import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconDescription from 'material-ui/svg-icons/action/description';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import { white } from 'material-ui/styles/colors';
import SummaryList from "./summaryList";
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';

const summary = data;
const iconStyles = {
	"height": "32px",
	"width": "32px"
};
const summaryStyles = {
	"backgroundColor": "#94c5e9",
	"color": "black"
};

export default class Summary extends React.Component {

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
			<div className="wSummary">
				<AppBar title="Summary" onClick={this.toggleCard}
				        iconElementRight={<IconExpandMore onClick={this.toggleCard} style={iconStyles}/>} style={summaryStyles} titleStyle={summaryStyles}
				        iconElementLeft={<IconDescription style={iconStyles}/>}/>
				{!this.state.isHidden && <Card style={summaryStyles}>
					<SummaryList list={summary.ayush123.summary}/>
				</Card>}
			</div>);
	}
}