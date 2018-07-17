import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {countries} from './countries.js';
import portugal_logo from './flags/portugal.jpg'
import france_logo from './flags/france.png' 
import spain_logo from './flags/spain.png' 
import russia_logo from './flags/russia.jpg'  

ReactDOM.render(<div>
					<Card name={countries[0].name} source={russia_logo}/>
					<Card name={countries[1].name} source={portugal_logo}/>
					<Card name={countries[2].name} source={spain_logo}/>
					<Card name={countries[3].name} source={france_logo}/>
				</div>
, document.getElementById('root'));
registerServiceWorker();
