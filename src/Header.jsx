/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react'

// Assuming you have a CSS file or use inline styles
// Add the following styles to create a centered and styled header

// CSS file or inline styles
const headerStyle = {
	textAlign: 'center',
	backgroundColor: '#f0f0f0',
	padding: '20px',
	borderRadius: '8px',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	margin: '20px auto', // Center the header
}

// Inside your component
export default function Header({ currentScore, highScore }) {
	return (
		<div style={headerStyle}>
			<h2 style={{ marginBottom: '10px' }}>
				Current Score: {currentScore}
			</h2>
			<h2>High Score: {highScore}</h2>
		</div>
	)
}
