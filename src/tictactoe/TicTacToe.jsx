import React from "react";
import "./TicTacToe.css"
import { Board } from "./Board";
import { useState } from "react";
import { useEffect } from "react";

const initialBoard = ["", "", "", "", "", "", "", "", "",];

export const TicTacToe = () => {
    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");

    const onSquareClick = (index) => {
        let strings = Array.from(gameState);

        if (status.includes("Winner")) {
            return
        }

  
        if (strings[index] !=="") {
            return;
        }

        strings[index] = isXTurn ? "X" : "0";

        /* yllä oleva koodi
        if (isXTurn):
            strings [index] = "X";
            else{
            strings[index] = "0";
            }
        */

        setGameState(strings);
        setIsXTurn(!isXTurn);
    }

    useEffect(() => {
        const winner = checkWinner();

        if (winner) {
            setStatus(`Winner: ${winner}`)
        } else if (!gameState.includes("")) {
            setStatus("It´s a draw")
        } else {
            setStatus(`${isXTurn ? "X" : "0"}'s turn`)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] === gameState[b] && gameState[a] === gameState[c]){
                return gameState[a]
            }
        }
        return null;
    }

    return (
<div>
    <div>
        <h1>Tic-Tac-Toe</h1>
        <Board gameState={gameState} onSquareClick={onSquareClick}/>
       {!status.includes("Winner") && (
        <>
        <span>{status}</span>
        <button onClick={()=> {
            setGameState(initialBoard);
            setIsXTurn(true);
        }}>tyhjennä</button>
        </>
       )}

{status.includes("Winner") && (
        <>
        <span style={{color: "green"}}>{status}</span>
        <button style={{background: "green"}}
        onClick={()=> {
            setGameState(initialBoard);
            setIsXTurn(true);
        }}>Pelaa uudestaan</button>
        </>
       )}
    </div>
</div>
    );
}