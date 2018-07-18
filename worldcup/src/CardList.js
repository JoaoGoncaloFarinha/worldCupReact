import React from 'react';
import Card from './Card'

const CardList = ({countries}) => {
	return(
		<div>
		{countries.map((country, i) => { return(
			<Card className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'
			key={i}
			name={country.name}
			source={country.image_source} />
		)})}
		</div>
	)

}

export default CardList;