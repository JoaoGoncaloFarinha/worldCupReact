import React from 'react';
//import logo from './flags/russia.jpg';

const Card = (props) => {
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='countries' src={process.env.PUBLIC_URL + props.source} height='100' width='200'/>
			<div>
				<h2>{props.name}</h2>
			</div>
		</div>
	)

}

export default Card;