import Box from "./components/Box";
import {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import Button from "./components/Button";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [winner, setWinner] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const player = "X"

  useEffect(() => {
    winner && setOpenModal(true)
  },[winner])

  const checkWinner = (board) => {
    const winnerBoard = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ]
    return winnerBoard.find(([tic, tac, toe]) => {
      if(board[tic] && board[tic] === board[tac] && board[tac] === board[toe]){
        return true
      }
      return false
    })
  }

  const playSecondPlayer = (board) => {
    const newBoard = []
    const prevBoard = [...board]
    board.forEach((boardItem, index) => {
      if(boardItem === ""){
        newBoard.push(index)
      }
    })
    const rnd = Math.floor(Math.random() * newBoard.length)
    prevBoard[newBoard[rnd]] = "O"
    setBoard(prevBoard)
    return prevBoard
  }

  const handleClick = (index) => {
    const newBoard = [...board]
    newBoard[index] = player
    setBoard(newBoard)
    setWinner(checkWinner(newBoard))
    if (!checkWinner(newBoard)){
      const prevBoard = playSecondPlayer(newBoard)
      setWinner(checkWinner(prevBoard))
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(""))
    setWinner(null)
    setOpenModal(false)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="font-bold text-5xl mb-8 text-blue-500">
          {`You are ${player}`}
        </div>
      <div className="grid grid-cols-3 gap-6 place-content-center">
        {board.map((element, index) => {
          return <Box key={index} value={board[index]} winner={winner} onPress={() => handleClick(index)} />
        })}
      </div>
      <Button onPress={() => resetBoard()} />
      <Popup open={openModal} position="right center">
        <div className="flex flex-col items-center justify-center bg-green-200 w-80 gap-4 h-80 rounded-md">
          <span className="text-2xl font-bold">Good job!</span>
          {winner &&
            <span className="text-5xl font-bold">{board[winner[0]]}</span>
          }
          <span className="text-2xl font-bold">You win this game!</span>
          <Button onPress={() => resetBoard()} />
        </div>
      </Popup>
    </div>
  );
}

export default App;
