import React, { useEffect, useState } from "react";
import WordInput from "./WordInput";

const GameTable = (props) => {

    const [inputWord, setInputWord] = useState("")
    const [activeInput, setActiveInput] = useState(1)
    const [isWinner, setIsWinner] = useState(false)

    const handleInput = (e) => {
        e.preventDefault()
        setInputWord(e.target.value)
    }

    async function handleButton(){
        console.log(props.word)
        console.log(inputWord)
        if(props.word == inputWord){
            setIsWinner(true)
        } else if(activeInput != 6){
            setActiveInput(activeInput + 1)
        }
        
    }

    return(
        <div className="table" >
            <WordInput word={setInputWord} handleInput={handleInput} disabled={(activeInput===1)? false : true}></WordInput>
            <WordInput word={setInputWord} handleInput={handleInput} disabled={(activeInput===2)? false : true}></WordInput>
            <WordInput word={setInputWord} handleInput={handleInput} disabled={(activeInput===3)? false : true}></WordInput>
            <WordInput word={setInputWord} handleInput={handleInput} disabled={(activeInput===4)? false : true}></WordInput>
            <WordInput word={setInputWord} handleInput={handleInput} disabled={(activeInput===5)? false : true}></WordInput>
            <WordInput word={setInputWord} handleInput={handleInput} disabled={(activeInput===6)? false : true}></WordInput>
      
            <button type="button" onClick={handleButton}>ENVIAR</button>
        </div>
    )
}

export default GameTable
