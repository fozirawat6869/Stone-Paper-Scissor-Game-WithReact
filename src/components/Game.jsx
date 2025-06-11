// @ts-check


import useGameLogic from "./useGameLogic"


function Game() {
  

 const {allState,game}=useGameLogic() 
  return (
    <>
    <div>
        <h1>Welcome to Rock , Paper and Scissor Game</h1>
        <button onClick={()=>game('rock')} >Rock</button>
        <button onClick={()=>game('paper')}>Paper</button>
        <button onClick={()=>game('scisor')}>Scissor</button>
        <h2>Your choice: {allState.userChoice}</h2>
        <h2>Computer Choice: {allState.computerChoice}</h2>
        <h2>Your Score:{allState.userScore} </h2>
        <h2>Computer Score:{allState.computerScore} </h2>
        <h1>Winner:{allState.result}</h1>
    </div>
    </>
  )
}

export default Game