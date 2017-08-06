import React from 'react';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import { black } from 'material-ui/styles/colors';
import MaterialUIStyles from '../styles/materialUIStyles'

export default class SkillsList extends React.Component {

	render() {
		const skillText = Object.keys(this.props.list);
		const skillStar = Object.values(this.props.list);

		const ratingComp = [];
		skillStar.forEach((item, index) => {
			const starComp = [];
			const skillTextComp = [];
			while (item > 0) {
				item--;
				starComp.push(<Star color={black} style={MaterialUIStyles.star} key={item}/>)
			}
			skillTextComp.push(<span className="skill-text" key={skillText[index]}>{skillText[index]}</span>);
			ratingComp.push(<li key={skillText[index]} className="skills-list-content">{skillTextComp} <span
				className="skill-star">{starComp}</span></li>)
		});

		return (
			<ul className="listContent">
				{ratingComp}
			</ul>);
	}
}