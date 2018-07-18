import React from 'react';
import {countries} from './countries.js';
import portugal_logo from './flags/portugal.jpg';
import france_logo from './flags/france.png'; 
import spain_logo from './flags/spain.png'; 
import russia_logo from './flags/russia.jpg';  
import Card from './Card';
import CardList from './CardList'

const App = () => {
	return(<div>
				<CardList countries={countries} />
			</div>	
	)
}

export default App;