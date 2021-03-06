import React from 'react';
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import IconSchool from 'material-ui/svg-icons/social/school';

import data from '../data/data.json';
const exp = data.ayush123.experience;

const expLabels = exp.map((item) => {
	return item.year
});
const expDgn = exp.map((item) => {
	return item.position
});
const expCmp = exp.map((item) => {
	return item.name
});

const expLoc = exp.map((item) => {
	return item.location
});

export default class PastExp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {stepIndex: -1,};
	}

	handleNext = () => {
		const {stepIndex} = this.state;
		if (stepIndex < exp.length - 1) {
			this.setState({stepIndex: stepIndex + 1});
		}
	};

	handlePrev = () => {
		const {stepIndex} = this.state;
		if (stepIndex > 0) {
			this.setState({stepIndex: stepIndex - 1});
		}
	};

	steps(labels) {
		return labels.map((label, index) => (
			<Step key={index}>
				<StepButton onClick={() => this.setState({stepIndex: index})}
				            icon={index === 0 ? <IconSchool/> : index}>
					<div style={{color: '#000'}}>{label}</div>
				</StepButton>
				<StepContent>
					<List>
						<ListItem primaryText={`${expCmp[index]}	(${expLoc[index]})`}
						          secondaryText={expDgn[index]}
						/>
					</List>
					{this.renderStepActions(index)}
				</StepContent>
			</Step>
		));
	}

	renderStepActions(step) {
		return (
			<div style={{margin: '12px 0'}}>
				{step < exp.length -1 && (
					<RaisedButton
						label="Next"
						disableTouchRipple={true}
						disableFocusRipple={true}
						primary={true}
						onClick={this.handleNext}
						style={{marginRight: 12,}}
						labelStyle={{color: '#000', "font-weight":'bolder'}}
						// buttonStyle = {{'background-color':'#1abc9c'}}
					/>)}
				{step > 0 && (
					<FlatButton
						label="Previous"
						disableTouchRipple={true}
						disableFocusRipple={true}
						onClick={this.handlePrev}
						labelStyle={{color: '#000', "font-weight":'bolder'}}
					/>
				)}
			</div>
		);
	}

	render() {
		const {stepIndex} = this.state;

		return (
			<div style={{margin: 'auto'}}>
				<Stepper
					activeStep={stepIndex}
					linear={false}
					orientation="vertical"
				>
					{this.steps(expLabels)}
				</Stepper>
			</div>
		);
	}
}