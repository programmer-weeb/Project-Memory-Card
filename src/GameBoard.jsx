/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
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
			<div style={cardContainerStyle}>
				{cardsArray.map((el) => (
					<div
						key={el.id}
						style={elementOfCardArrayStyle}
						onClick={(event) => handleClickingACard(event, el)}
					>
						<img
							src={el.images.fixed_height.url}
							alt=""
							style={{ width: '100%', height: 'auto' }}
						/>
						<p
							style={{
								padding: '12px',
								textAlign: 'center',
								fontSize: '16px',
							}}
						>
							{el.title}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

const cardContainerStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
	gap: '16px',
	padding: '16px',
}

const elementOfCardArrayStyle = {
	border: '1px solid #ccc',
	borderRadius: '8px',
	overflow: 'hidden',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}
