import React from 'react';
import {countries} from './countries.js';
import CardList from './CardList'

const App = () => {
	return(<div>
				<CardList countries={countries} />
			</div>	
	)
}

export default App;