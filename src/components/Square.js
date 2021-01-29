import React from 'react';
import '../styles/Square.css';

const Square = ({ value, onClick }) => (
	<button 
		className='app__square' 
		onClick={ onClick }
	>
		{ value }
	</button>
)

export default Square;

