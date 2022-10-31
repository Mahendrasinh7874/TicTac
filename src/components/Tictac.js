import React, { useState ,useEffect} from "react";
import Square from "./Square";
const initialState = ["","","","","","","","",""];
const Tictac = () => {
  const [value,setValue] = useState(initialState);
  const [isX,setIsX] = useState(true)

  const strings = Array.from(value);
  const squareClick = (index) => {
    strings[index] = isX ? "X" : "O";
    setValue(strings);
    setIsX(!isX);
  }
  
  useEffect(() => {
    const winner = chekcWinner();
    if(winner){
     alert(` ${winner} is won the game`);
     setValue(initialState);
    }
   }, [value])


 
  const chekcWinner = () => {
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
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="container">
        <h2>Tic Tac App</h2>
        <div className="row">
          <Square state={value[0]}  onClick={() => squareClick(0)}  />
          <Square state={value[1]} onClick={() => squareClick(1)} />
          <Square state={value[2]}  onClick={() => squareClick(2)}/>
        </div>
        <div className="row">
          <Square state={value[3]}  onClick={() => squareClick(3)} />
          <Square state={value[4]} onClick={() => squareClick(4)} />
          <Square state={value[5]}  onClick={() => squareClick(5)}/>
        </div>
        <div className="row">
          <Square state={value[6]} onClick={() => squareClick(6)} />
          <Square state={value[7]} onClick={() => squareClick(7)} />
          <Square state={value[8]}  onClick={() => squareClick(8)}/>
        </div>
      </div>
    </>
  );
};

export default Tictac;
