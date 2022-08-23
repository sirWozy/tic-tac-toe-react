import Box from "./components/Box";
import {useState} from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [winner, setWinner] = useState(null)
  const player = "X"

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
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {winner && (
        <div className="p-6 mt-6 mb-8 rounded-md text-white bg-green-400 text-3xl">{`Winner is ${board[winner[0]]}`}</div>
      )}
      {!winner && (
        <div className="font-bold text-5xl mb-8 text-blue-500">
          {`You are ${player}`}
        </div>
      )}
      <div className="grid grid-cols-3 gap-6 place-content-center">
        {board.map((element, index) => {
          return <Box key={index} value={board[index]} winner={winner} onPress={() => handleClick(index)} />
        })}
      </div>
      <button className="rounded-md bg-blue-500 hover:bg-blue-400 transition-all p-5 mt-6 text-white font-bold" onClick={resetBoard}>Reset Board</button>
    </div>

  );
}

export default App;
