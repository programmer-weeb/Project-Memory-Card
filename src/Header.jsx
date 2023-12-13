/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react'

const headerStyle = {
	textAlign: 'center',
	backgroundColor: '#f0f0f0',
	padding: '20px',
	borderRadius: '8px',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	margin: '20px auto', // Center the header
}

export default function Header({ currentScore, highScore }) {
	return (
		<div style={headerStyle}>
			<h2 style={{ marginBottom: '10px' }}>
				Current Score: {currentScore}
			</h2>
			<h2>High Score: {highScore}</h2>
			<h5><a href="https://github.com/programmer-weeb/Project-Memory-Card">The Repo</a></h5>
		</div>
	)
}
