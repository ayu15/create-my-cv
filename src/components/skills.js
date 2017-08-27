import React from 'react';
import data from '../data/data.json'
import SkillsList from "./skillsList";
import MenuItem from 'material-ui/MenuItem';
import MyStyles from '../styles/materialUIStyles';
import SelectField from 'material-ui/SelectField';
const filters = [
	{value: 0, name: 'Recent'}
	];
const sorters = [
	{value: null, name: ''},
	{value: 0, name: 'Strength first'},
	{value: 1, name: 'Weakness first'}
];
export default class Skills extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortedTS: false,
			originalTS: data.ayush123.techStack,
			filteredTS: false,
			defaultSort: null,
			defaultFilter: [],
			filterApplied: false
		};
		this.handleSort = this.handleSort.bind(this);
		this.handleFilter = this.handleFilter.bind(this);

	}

	sortMenuItems(filters) {
		return filters.map((filter) => (
			<MenuItem
				key={filter.value}
				value={filter.value}
				primaryText={filter.name}
			/>
		));
	}

	filterMenuItems(filters) {
		return filters.map((filter) => (
			<MenuItem
				key={filter.value}
				insetChildren={true}
				checked={this.state.defaultFilter.indexOf(filter.value) > -1}
				value={filter.value}
				primaryText={filter.name}
			/>
		));
	}

	selectionRenderer = (values) => {
		switch (values.length) {
			case 0:
				return '';
			case 1:
				return filters[values[0]].name;
			default:
				return `${values.length} filters applied`;
		}
	}

	handleSort(event, index, value) {
		const techStack = this.state.filterApplied ? this.state.filteredTS : this.state.originalTS;
		let temp, sortedList;
		if (value === null || value.length === 0) {
			this.setState({
				sortedTS: techStack,
				defaultSort: value
			});
			return;
		}
		if (value === 1) {
			temp = Object.entries(techStack).sort((a, b) => {
				return a[1].rating - b[1].rating
			})
		} else if (value === 0) {
			temp = Object.entries(techStack).sort((a, b) => {
				return b[1].rating - a[1].rating
			})
		}
		sortedList = temp.reduce((prev, curr) => {
			prev[curr[0]] = curr !== undefined ? curr[1] : null;
			return prev;
		}, {})
		this.setState({
			sortedTS: sortedList,
			defaultSort: value
		});
	}

	handleFilter(event, index, value) {
		const techStack = this.state.originalTS;
		let temp, filteredList;
		if (value === null || value.length === 0) {
			this.setState({
				sortedTS: false,
				filteredTS: techStack,
				defaultFilter: value,
				filterApplied: false
			});
			return;
		}
		if (value.includes(1) === true) {
			temp = Object.entries(techStack);
		}
		if (value.includes(0) === true) {
			temp = Object.entries(techStack).filter((a) => {
				return a[1].new === true
			});
		}
		filteredList = temp.reduce((prev, curr) => {
			prev[curr[0]] = curr !== undefined ? curr[1] : null;
			return prev;
		}, {})
		this.setState({
			sortedTS: filteredList,
			filteredTS: filteredList,
			defaultFilter: value,
			filterApplied: true
		});
	}

	render() {
		return (
			<div className="wSkl">
				<div className="srt-box">
					<SelectField floatingLabelText="SORT BY:" floatingLabelFixed={true} floatingLabelStyle={MyStyles.srtBox.floatTextStyle} hintText="None"
					             value={this.state.defaultSort} onChange={this.handleSort} style={MyStyles.srtBox.customWidth} listStyle={MyStyles.srtBox.menuStyle}
					             autoWidth={true}>
						{this.sortMenuItems(sorters)}
					</SelectField>
					<SelectField floatingLabelText="FILTER:" floatingLabelFixed={true} floatingLabelStyle={MyStyles.srtBox.floatTextStyle} autoWidth={true}
					             hintText="None" multiple={true}
					             value={this.state.defaultFilter} onChange={this.handleFilter} style={MyStyles.srtBox.customWidth} listStyle={MyStyles.srtBox.menuStyle}
					             selectionRenderer={this.selectionRenderer}>
						{this.filterMenuItems(filters)}
					</SelectField>
				</div>
				<SkillsList list={this.state.sortedTS || this.state.originalTS}/>
			</div>);
	}
}