import React from 'react';
import  Page1 from './page1';
import  Page2 from './page2';
import  Page3 from './page3';

export default class SkwPages extends React.Component {

	constructor() {
		super();
		this.state = {
			scrolling: false,
			curPage: 1,
			numOfPages: 3,
			animTime: 1000
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.handleArrowScroll = this.handleArrowScroll.bind(this);
		this.pagination = this.pagination.bind(this);
		this.navigateUp = this.navigateUp.bind(this);
		this.navigateDown = this.navigateDown.bind(this);
	}

	pagination() {
		this.setState({scrolling: true});
		setTimeout(() => {
			this.setState({scrolling: false});
		}, this.state.animTime);
	};

	navigateUp() {
		if (this.state.curPage === 1) return;
		this.setState({curPage: this.state.curPage - 1});
		this.pagination();
	};

	navigateDown() {
		if (this.state.curPage === this.state.numOfPages) return;
		this.setState({curPage: this.state.curPage + 1});
		this.pagination();
	};

	componentDidMount() {
		window.addEventListener('keydown', this.handleArrowScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleArrowScroll);
	}

	handleArrowScroll(e) {
		if (this.state.scrolling) return;
		if (e.keyCode  === 38) {
			this.navigateUp();
		} else if (e.keyCode  === 40) {
			this.navigateDown();
		}
	}

	handleScroll(e) {
		if (this.state.scrolling) return;
		if (e.deltaY < 0) {
			this.navigateUp();
		} else if (e.deltaY > 0) {
			this.navigateDown();
		}
	}

	render() {
		return (
			<div className="skw-pages" onWheel={this.handleScroll}>
				<Page1 active={this.state.curPage}/>
				<Page2 active={this.state.curPage}/>
				<Page3 active={this.state.curPage}/>
			</div>
		)
	}
}