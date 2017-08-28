import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SkwPages from "./components/skwPages";

class App extends Component {
  constructor() {
		super();
	}

	componentDidMount() {
		document.querySelectorAll("div.loader")[0].setAttribute("style", "display : none");
	}

	render() {
		return (
				<div className="mainContainer">
					<SkwPages/>
				</div>
		);
	}
}

export default App;
