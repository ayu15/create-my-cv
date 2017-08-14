import React from 'react';
import SkewColumn from './skewColumn';
import Skills from './skills';
import MyStyles from '../styles/materialUIStyles';
import IconBuild from 'material-ui/svg-icons/action/build';

export default class Page3 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.isActive = this.isActive.bind(this);
	}

	isActive() {
		return ((3 === this.props.active) ? 'active' : 'inactive');
	}

	render() {
		const leftContent = <div><div className="skw-page__heading"><IconBuild style={MyStyles.icon}/>Tech Stack</div><Skills/></div>;

		const rightContent = <Skills/>;

		return (
			<div className={`skw-page skw-page-3 ${this.isActive()}`}>
				<SkewColumn side='left' content={leftContent}/>
				<SkewColumn side='right' content={rightContent}/>
			</div>
		)
	}
}