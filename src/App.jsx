/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react'
import Header from './Header'
import GameBoard from './GameBoard'

function App() {
	const [currentScore, setCurrentScore] = useState(0)
	const [highScore, setHighScore] = useState(0)
	const [apiData, setApiData] = useState()
	const [cardsArray, setCardsArray] = useState([])

	useEffect(() => {
		getDataFromGifyAPI().then((apiData) => {
			console.log('useEffect then')
			setApiData(apiData)
			setCardsArray(apiData.data)
			console.log('cards array')
			console.log(cardsArray)
		})
	}, [])

	async function getDataFromGifyAPI() {
		const apiData = await fetch(
			'https://api.giphy.com/v1/gifs/search?api_key=84pyz1yqbOJGT2bT9eI2OPzrbAPF6F5s&q=cat&limit=15&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
		).then((response) => response.json())
		console.log('from getDataFromGifyAPI function')
		console.log(apiData)
		return apiData
	}

	function shuffleCardsArray() {
		setCardsArray((prevArr) => {
			const newArr = [...prevArr]

			let currentIndex = newArr.length,
				randomIndex

			// While there remain elements to shuffle.
			while (currentIndex > 0) {
				// Pick a remaining element.
				randomIndex = Math.floor(Math.random() * currentIndex)
				currentIndex--

				// And swap it with the current element.
				;[newArr[currentIndex], newArr[randomIndex]] = [
					newArr[randomIndex],
					newArr[currentIndex],
				]
			}

			return newArr
		})
	}

	function increaseTheScoreByOne() {
		setCurrentScore(currentScore + 1)
		if (currentScore >= highScore) {
			setHighScore(currentScore + 1)
		}
	}
	function resetTheScoreToZero() {
		setCurrentScore(0)
	}

	return (
		<>
			<Header currentScore={currentScore} highScore={highScore} />
			{cardsArray && (
				<GameBoard
					cardsArray={cardsArray}
					shuffleCardsArray={shuffleCardsArray}
					increaseTheScoreByOne={increaseTheScoreByOne}
					resetTheScoreToZero={resetTheScoreToZero}
				/>
			)}
		</>
	)
}

export default App
