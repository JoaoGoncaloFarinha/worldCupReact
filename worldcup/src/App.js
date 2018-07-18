import React from 'react';
import {countries} from './countries.js';
import portugal_logo from './flags/portugal.jpg';
import france_logo from './flags/france.png'; 
import spain_logo from './flags/spain.png'; 
import russia_logo from './flags/russia.jpg';  
import Card from './Card';

const App = () => {
	return(<div>
					<Card name={countries[0].name} source={russia_logo}/>
					<Card name={countries[1].name} source={portugal_logo}/>
					<Card name={countries[2].name} source={spain_logo}/>
					<Card name={countries[3].name} source={france_logo}/>
			</div>	
	)
}

export default App;