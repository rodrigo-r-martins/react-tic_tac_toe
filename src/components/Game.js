import React from 'react';
import Board from './Board';
import '../styles/Game.css';

const Game = () => {
    return (
        <div className='app__game'>
            <h1>Tic Tac Toe</h1>
            <div className='app__container'>
                <Board /> 
            </div>
        </div>
    )
}

export default Game;
