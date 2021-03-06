import React, {Component}  from 'react';
import {countries} from './countries.js';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			countries: countries,
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value });
	}

	render(){
		const filteredCountries = this.state.countries.filter( countries =>{
			return countries.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		console.log(filteredCountries)
		return(
			<div className='tc'>
				<h1 className='f1'>WorldCup Teams</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList countries={filteredCountries} />
				</Scroll>
			</div>
		 );
	}
}

export default App;