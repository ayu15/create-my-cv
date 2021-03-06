import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import IconExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import IconExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import MyStyles from '../styles/materialUIStyles';
import Snackbar from 'material-ui/Snackbar';

export default class SkwPages extends React.Component {

	constructor() {
		super();
		this.state = {
			scrolling: false,
			curPage: 1,
			numOfPages: 3,
			animTime: 1000,
			notify: true
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.handleArrowScroll = this.handleArrowScroll.bind(this);
		this.pagination = this.pagination.bind(this);
		this.navigateUp = this.navigateUp.bind(this);
		this.navigateDown = this.navigateDown.bind(this);
		// this.handleNotifyClose = this.handleNotifyClose.bind(this);
	}

	customSwipeEvent() {
		(function (d) {
			let
				ce = function (e, n) {
					let a = document.createEvent("CustomEvent");
					a.initCustomEvent(n, true, true, e.target);
					e.target.dispatchEvent(a);
					a = null;
					return false
				},
				nm = true, sp = {x: 0, y: 0}, ep = {x: 0, y: 0},
				touch = {
					touchstart: function (e) {
						sp = {x: e.touches[0].pageX, y: e.touches[0].pageY}
					},
					touchmove: function (e) {
						nm = false;
						ep = {x: e.touches[0].pageX, y: e.touches[0].pageY}
					},
					touchend: function (e) {
						if (nm) {
							ce(e, 'fc')
						} else {
							let x = ep.x - sp.x, xr = Math.abs(x), y = ep.y - sp.y, yr = Math.abs(y);
							if (Math.max(xr, yr) > 20) {
								ce(e, (xr > yr ? (x < 0 ? 'swl' : 'swr') : (y < 0 ? 'swu' : 'swd')))
							}
						}
						;
						nm = true
					},
					touchcancel: function (e) {
						nm = false
					}
				};
			for (let a in touch) {
				d.addEventListener(a, touch[a], false);
			}
		})(document);
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
		let screenWidth = window.matchMedia("(min-width: 600px)");
		if (screenWidth.matches) {
			this.customSwipeEvent();
			// this.skwPages.addEventListener('wheel', this.handleScroll, {passive: true});
			document.body.addEventListener('keydown', this.handleArrowScroll, {passive: true});
			document.body.addEventListener('swl', this.navigateUp, {passive: true});
			document.body.addEventListener('swr', this.navigateDown, {passive: true});
			document.body.addEventListener('swu', this.navigateDown, {passive: true});
			document.body.addEventListener('swd', this.navigateUp, {passive: true});
		}
	}

	componentWillUnmount() {
		// this.skwPages.removeEventListener('wheel', this.handleScroll, {passive: true});
		document.body.removeEventListener('keydown', this.handleArrowScroll, {passive: true});
		document.body.removeEventListener('swl', this.navigateUp, {passive: true});
		document.body.removeEventListener('swr', this.navigateDown, {passive: true});
		document.body.removeEventListener('swu', this.navigateDown, {passive: true});
		document.body.removeEventListener('swd', this.navigateUp, {passive: true});
	}

	handleArrowScroll(e) {
		if (this.state.scrolling) return;
		if (e.keyCode === 38) {
			this.navigateUp();
		} else if (e.keyCode === 40) {
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

	// handleNotifyClose() {
	// 	document.location.reload(true);
	// }

	render() {
		return (
			<div className="skw-pages" onWheel={this.handleScroll}
			     // ref={(elem) => { this.skwPages = elem; }}
			>
				<Snackbar
						className="new-update" style={{display : "none", "z-index": 2 }}
						open={this.state.notify}
						message="New version of page is available, refreshing automatically..."
				/>
				{this.state.curPage !== this.state.numOfPages ?
					<IconExpandMore className="ca3-scroll-down-svg" style={MyStyles.downArrow}/> : null}
				{this.state.curPage !== 1 ? <IconExpandLess className="ca3-scroll-up-svg" style={MyStyles.upArrow}/> : null}
				<Page1 active={this.state.curPage}/>
				<Page2 active={this.state.curPage}/>
				<Page3 active={this.state.curPage}/>
			</div>
		)
	}
}
