import React from 'react';
import ReactDOM from 'react-dom';
import _ from "lodash";

// Header

const Header = React.createClass({
	render() {
		return (
      <div>
      	<span>Ten Principles of Design</span>
      	<span>Dieter Rams</span>
      </div>
		)
	}
});

// Main Content Section 

const SliderImage = React.createClass({
	render() {
		return (
			<div>text about Dieter</div>
		)
	}
});

const SliderText = React.createClass({
	render() {
		return (
			<div>text about Dieter asfa</div>
		)
	}
});

const Slider = React.createClass({
	render() {
		return (
			<div>
				<div>content slider</div>
				<SliderImage />
				<SliderText />	
			</div>
		)
	}
});

// Footer

const Footer = React.createClass({
	render() {
		return ( 
			<div>footer</div>
		)
	}
})

const App = React.createClass({
  render () {
    return (
      <div>
      	<Header />
      	<Slider />
      	<Footer />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
