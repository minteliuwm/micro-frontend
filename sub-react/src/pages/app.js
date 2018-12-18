import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		return (
			<div>Hello React</div>
		);
	}
}

export default App;
