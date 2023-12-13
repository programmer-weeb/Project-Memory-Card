/* eslint-disable linebreak-style */
import React, { useState } from 'react'

export default function GameBoard({ cardsArray, shuffleCardsArray }) {
	const [idOfClickedItems, setClickedItems] = useState([])

	function handleClickingACard(event, anElementOfArray) {
		console.log({ event, anElementOfArray })

		shuffleCardsArray()
		setClickedItems((prevClickedItems) => {
			// Check if the element already exists in the array
			if (!prevClickedItems.includes(anElementOfArray.id)) {
				// If it doesn't exist, add it to the array
				return [...prevClickedItems, anElementOfArray.id]
			} else {
				// If it exists, return the current array without any changes
				return prevClickedItems
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
						{/* <img src={el.images.fixed_height.url} alt="" onClick={shuffleCardsArray} /> */}
						<img src={el.images.fixed_height.url} alt="" />
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
