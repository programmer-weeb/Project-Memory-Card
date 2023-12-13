/* eslint-disable linebreak-style */
import React, { useState } from 'react'

export default function GameBoard({
	cardsArray,
	shuffleCardsArray,
	increaseTheScoreByOne,
	resetTheScoreToZero,
}) {
	const [idOfClickedItems, setClickedItems] = useState([])

	function handleClickingACard(event, anElementOfArray) {
		shuffleCardsArray()
		setClickedItems((prevClickedItems) => {
			// Check if the element already exists in the array
			if (!prevClickedItems.includes(anElementOfArray.id)) {
				increaseTheScoreByOne()
				return [...prevClickedItems, anElementOfArray.id]
			} else {
				resetTheScoreToZero()
				return []
			}
		})
		console.log(idOfClickedItems)
	}

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
						onClick={(event) => handleClickingACard(event, el)}
					>
						<img src={el.images.fixed_height.url} alt="" />
						<p>{el.slug}</p>
					</div>
				)
			})}
		</div>
	)
}
