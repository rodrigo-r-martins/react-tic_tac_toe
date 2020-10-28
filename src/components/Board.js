import React, { useState } from 'react';
import '../styles/Board.css';
import Square from './Square';
import { calculateWinner } from '../calculateWinner';

const Board = () => {
    const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)]);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(boardSquares);
    
    const handleClick = index => {
        const squares = [...boardSquares];
        if (winner || squares[index]) return;
        squares[index] = xIsNext ? 'X' : 'O';
        setBoardSquares(squares);
        setXisNext(!xIsNext);
    }

    const renderSquare = index => {
        return (
            <Square 
                value={boardSquares[index]} 
                onClick={() => handleClick(index)}
            />
        );
    }

    const restartGame = () => {
        setBoardSquares([Array(9).fill(null)])
        setXisNext(true)
    }
    
    let status = winner 
        ? `Winner: ${winner}` 
        : `Next player: ${xIsNext ? 'X' : 'O'}`;
    
    return (
        <div className='app__board'>
            <div className='app__status'>
                {status}
            </div>
            <div className='board__squares'>
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
            </div>
            <div className='board__squares'>
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
            </div>
            <div className='board__squares'>
                {renderSquare(7)}
                {renderSquare(8)}
                {renderSquare(9)}
            </div>
            <div>
                <button 
                    className='restart__button'
                    onClick={ () => restartGame() }
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default Board;
