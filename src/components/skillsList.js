import React from 'react';
import data from '../data/data.json'
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import { black } from 'material-ui/styles/colors';

const iconStyles = {
	"height": "15px",
	"width": "15px"
};

export default class SkillsList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const skillText = Object.keys(this.props.list);
		const skillStar = Object.values(this.props.list);

		const ratingComp = [];
		skillStar.forEach((item, index) => {
			const starComp = [];
			while (item > 0) {
				item--;
				starComp.push(<Star color={black} style={iconStyles} className="skillStar" key={item}/>)
			}
			ratingComp.push(<li key={skillText[index]}>{skillText[index]} {starComp} </li>)
		})

		return (
				<ul className="listContent">
					{ratingComp}
				</ul>);
	}
}