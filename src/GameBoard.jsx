/* eslint-disable linebreak-style */
import React from 'react'

export default function GameBoard({ cardsArray, shuffleCardsArray }) {
	return (
		<div>
			<h1>cards</h1>
			{cardsArray.map((el) => {
				return (
					<div
						key={el.id}
						style={{
							display: 'flex',
							alignContent: 'center',
							alignItems: 'center',
							direction: '',
						}}
						
					>
						<img src={el.images.fixed_height.url} alt="" onClick={shuffleCardsArray} />
						{/* {JSON.stringify(el)} */}
						{/* {JSON.stringify(el.images.fixed_height.url)} */}
						{/* <br /><br /> */}
						<p>{el.slug}</p>
					</div>
				)
			})}
		</div>
	)
}
