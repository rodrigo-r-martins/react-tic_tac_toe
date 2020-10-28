import React, { useState } from 'react';
import '../styles/Board.css';
import Square from './Square';
import { calculateWinner } from '../calculateWinner';

const Board = () => {
    // Setting states
    const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)]);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(boardSquares);
    
    // Handling the click on squares
    const clickingSquare = index => {
        const squares = [...boardSquares];
        if (winner || squares[index]) return;
        squares[index] = xIsNext ? 'X' : 'O';
        setBoardSquares(squares);
        setXisNext(!xIsNext);
    }

    // Creating squares where users can choose
    const creatingSquare = index => {
        return (
            <Square 
                value={ boardSquares[index] } 
                onClick={ () => clickingSquare(index) }
            />
        );
    }

    // Restarting states so the game is restarted
    const restartingGame = () => {
        setBoardSquares([Array(9).fill(null)])
        setXisNext(true)
    }
    
    // Status shown on top of squares
    let status = winner 
        ? `Winner: ${winner}` 
        : `Next player: ${xIsNext ? 'X' : 'O'}`;
    
    return (
        <div className='app__board'>
            <div className='app__status'>
                { status }
            </div>
            <div className='board__squares'>
                { creatingSquare(1) }
                { creatingSquare(2) }
                { creatingSquare(3) }
            </div>
            <div className='board__squares'>
                { creatingSquare(4) }
                { creatingSquare(5) }
                { creatingSquare(6) }
            </div>
            <div className='board__squares'>
                { creatingSquare(7) }
                { creatingSquare(8) }
                { creatingSquare(9) }
            </div>
            <div>
                <button 
                    className='restart__button'
                    onClick={ () => restartingGame() }
                >
                    Restart
                </button>
            </div>
        </div>
    );
};

export default Board;
