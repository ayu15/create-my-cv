import React from 'react';
import { Step, Stepper, StepLabel, StepButton, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import IconSchool from 'material-ui/svg-icons/social/school';
import IconOne from 'material-ui/svg-icons/image/looks-one';
import IconTwo from 'material-ui/svg-icons/image/looks-two';

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

export default class PastExp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {stepIndex: -1,};
	}

	handleNext = () => {
		const {stepIndex} = this.state;
		if (stepIndex < 2) {
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
			<Step>
				<StepButton onClick={() => this.setState({stepIndex: index})}
				            icon={index === 0 ? <IconSchool/> : index === 1 ? <IconOne/> : index === 2 ? <IconTwo/> : index}>
					{label}
				</StepButton>
				<StepContent>
					<List>
						<ListItem primaryText={expCmp[index]}
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
				{step < 2 && (
					<RaisedButton
						label="Next"
						disableTouchRipple={true}
						disableFocusRipple={true}
						primary={true}
						onClick={this.handleNext}
						style={{marginRight: 12,}}
						labelStyle={{color: '#000'}}
						// buttonStyle = {{'background-color':'#1abc9c'}}
					/>)}
				{step > 0 && (
					<FlatButton
						label="Previous"
						disableTouchRipple={true}
						disableFocusRipple={true}
						onClick={this.handlePrev}
					/>
				)}
			</div>
		);
	}

	render() {
		const {stepIndex} = this.state;

		return (
			<div style={{maxWidth: 420, maxHeight: 512, margin: 'auto'}}>
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