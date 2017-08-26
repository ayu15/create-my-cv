import React from 'react';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import { black } from 'material-ui/styles/colors';
import MaterialUIStyles from '../styles/materialUIStyles';

export default class SkillsList extends React.Component {

	render() {
		const skillText = Object.keys(this.props.list);
		const t1 = Object.values(this.props.list);
		const skillStar = [];
		t1.forEach((item) => {
			skillStar.push(item.rating);
		})
		const ratingComp = [];
		skillStar.forEach((item, index) => {
			const starComp = [];
			const skillTextComp = [];
			let borderStarCount = 5 - item;
			while (item > 0) {
				starComp.push(<Star color={black} style={MaterialUIStyles.star} key={item}/>);
				item--;
			}
			while (borderStarCount > 0) {
				starComp.push(<StarBorder color={black} style={MaterialUIStyles.star} key={-borderStarCount}/>);
				borderStarCount--;
			}
			skillTextComp.push(<span className="skl-txt" key={skillText[index]}>{skillText[index]}</span>);
			ratingComp.push(<li key={skillText[index]} className="skl-list-cnt">{skillTextComp}<span
				className="skl-star">{starComp}</span></li>)
		});

		return (
			<ul className="list-cnt">
				{ratingComp}
			</ul>);
	}
}