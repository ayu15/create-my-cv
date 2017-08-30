import React from 'react';
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper';
import { List, ListItem } from 'material-ui/List';
import data from '../data/data.json';

const detail = data.ayush123.skillSet;
const detailHeaders = Object.keys(detail);
const detailSubheaders = Object.values(detail).map((item) => item.subHeading);
const detailContent = Object.values(detail).map((item) => item.detail);

const cardDetails = (details) => {
	return details.map((detail, index) => (
		<li key={index}>
			{detail}
		</li>
	));
}

export default class SkillDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {stepIndex: -1,};
		this.cards = this.cards.bind(this)
	}

	cards = (cards) => {
		return cards.map((card, index) => (
			<Step key={index}>
				<StepButton onClick={() => this.setState({stepIndex: index})}>
					<div style={{color: '#000'}}>
						{detailHeaders[index]}
					</div>
				</StepButton>
				<StepContent>
					<List>
						<ListItem primaryText={detailSubheaders[index]}
						          secondaryText={cardDetails(detailContent[index])}
						/>
					</List>
				</StepContent>
			</Step>
		));
	}

	render() {
		const {stepIndex} = this.state;

		return <div style={{margin: 'auto'}}>
			<Stepper
				activeStep={stepIndex}
				linear={false}
				orientation="vertical"
			>{this.cards(detailHeaders)}
			</Stepper>
		</div>
	}
}
