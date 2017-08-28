// import React from 'react';
// import SkewColumn from './skewColumn';
// import Summary from './summary';
// import IconDescription from 'material-ui/svg-icons/action/description';
// import MyStyles from '../styles/materialUIStyles';
// import IconBuild from 'material-ui/svg-icons/action/build';
// import Skills from './skills';
// import Divider from 'material-ui/Divider';
//
// export default class Page2 extends React.Component {
//
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 		this.isActive = this.isActive.bind(this);
// 	}
//
// 	isActive() {
// 		return ((2 === this.props.active) ? 'active' : 'inactive');
// 	}
//
// 	render() {
// 		const leftContent = <div className='cnt'>
// 			<div className="skw-page__heading"><IconDescription style={MyStyles.icon.section}/>Summary</div>
// 			<Divider style={MyStyles.divider}/>
// 			<Summary/></div>;
// 		const rightContent = <div className='cnt'>
// 			<div className="skw-page__heading"><IconBuild style={MyStyles.icon.section}/>Tech stack</div>
// 			<Divider style={MyStyles.divider}/>
// 			<Skills/></div>;
// 		return (
// 			<div className={`skw-page skw-page-2 ${this.isActive()}`}>
// 				<SkewColumn side='left' content={leftContent}/>
// 				<SkewColumn side='right' content={rightContent}/>
// 			</div>
// 		)
// 	}
// }