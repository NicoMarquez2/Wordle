import React, { useEffect, useState } from "react";
import WordInput from "./WordInput";

const GameTable = (props) => {

    const [inputWord, setInputWord] = useState("")
    const [activeInput, setActiveInput] = useState(1)
    const [isWinner, setIsWinner] = useState(false)
    const [click, setClick] = useState(false)
    const [error, setError] = useState(false)

    const handleKeyDown = (e) => {
        if(e.key == "Enter"){
            handleButton()
        }
    }
    
    /*useEffect(() => {
        console.log("MUESTRO PALABRA",inputWord)
    },[inputWord])

    function mostrarPalabra(){
        console.log(inputWord)
    }*/

    async function handleButton(){
        setClick(!click)
        console.log(error)
        if(error){
            console.log("TE FALTAN LETRAS PETE")
        } else {
            console.log(props.word)
            console.log(inputWord)
            if(props.word == inputWord){
                setIsWinner(true)
            } else if(activeInput != 6){
                setActiveInput(activeInput + 1)
            }
        }
    }

    return(
        <div className="table" onKeyDown={(e) => handleKeyDown(e)}>
            <WordInput word={props.word} setError={setError} click={click} setInputWord={setInputWord} disabled={(activeInput===1)? false : true}></WordInput>
            <WordInput word={props.word} setError={setError} click={click} setInputWord={setInputWord} disabled={(activeInput===2)? false : true}></WordInput>
            <WordInput word={props.word} setError={setError} click={click} setInputWord={setInputWord} disabled={(activeInput===3)? false : true}></WordInput>
            <WordInput word={props.word} setError={setError} click={click} setInputWord={setInputWord} disabled={(activeInput===4)? false : true}></WordInput>
            <WordInput word={props.word} setError={setError} click={click} setInputWord={setInputWord} disabled={(activeInput===5)? false : true}></WordInput>
            <WordInput word={props.word} setError={setError} click={click} setInputWord={setInputWord} disabled={(activeInput===6)? false : true}></WordInput>

            <button type="button" onClick={handleButton}>ENVIAR</button>
            {/*<button type="button" onClick={mostrarPalabra}>MOSTRAR PALABRA</button>*/}
        </div>
    )
}

export default GameTable
