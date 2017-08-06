import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconDescription from 'material-ui/svg-icons/action/description';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import SummaryList from "./summaryList";
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';
import MaterialUIStyles from '../styles/materialUIStyles'
const summary = data;

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
				        iconElementRight={<IconExpandMore onClick={this.toggleCard} style={MaterialUIStyles.icon}/>}
				        style={MaterialUIStyles.appBar} titleStyle={MaterialUIStyles.appBar}
				        iconElementLeft={<IconDescription style={MaterialUIStyles.icon}/>}/>
				{!this.state.isHidden && <Card style={MaterialUIStyles.card}>
					<SummaryList list={summary.ayush123.summary}/>
				</Card>}
			</div>);
	}
}