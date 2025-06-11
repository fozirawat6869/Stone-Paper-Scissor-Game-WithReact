import { useState } from "react";

 function useGameLogic(){
 // const[userChoice,setUserChoice]=useState('')
    // const [computerChoice,setComputerChoice]=useState('')
    // const [userScore,setUserScore]=useState(0)
    // const [computerScore,setComputerScore]=useState(0)
    // const [result,setResult]=useState('')

    const [allState,setAllState]=useState({
        userChoice:'',
        computerChoice:'',
        userScore:0,
        computerScore:0,
        result:'',
    })
    
    
    function game(userMove){
        const options=['rock','paper','scisor']
        const randomChoice=options[Math.floor(Math.random()*3)]
        // setUserChoice(userMove) 
        // setComputerChoice(randomChoice)
        let result='';
        let userScore=allState.userScore;
        let computerScore=allState.computerScore;

        if(userMove===randomChoice){
        //    setResult("It's a Draw")
        result="It's a Draw"
      
        }else if  (
        (userMove==="rock" && randomChoice==='scisor')  ||
        (userMove==='paper' && randomChoice==='rock')   ||
        (userMove==='scisor'&& randomChoice==='paper')  )
        {
            // setResult("you win")
            // setUserScore(userScore+1)
            result="You Win"
            userScore=allState.userScore+1
          
        }else{
            // setResult("computer win")
            // setComputerScore(computerScore+1)
             result="Computer win"
             computerScore=allState.computerScore+1
        }
        setAllState({
         userChoice:userMove,
         computerChoice:randomChoice,
         userScore:userScore,
         computerScore:computerScore,
         result:result,
        })
 
    }
    return {allState,game}

}
export default useGameLogic