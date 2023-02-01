import React, { useEffect, useState } from "react";

const WordInput = (props) => {
    const [letterOne, setLetterOne] = useState("")
    const [letterTwo, setLetterTwo] = useState("")
    const [letterThree, setLetterThree] = useState("")
    const [letterFour, setLetterFour] = useState("")
    const [letterFive, setLetterFive] = useState("")
    const [activeInput, setActiveInput] = useState(1)

    const handleInput = () => {
        console.log("LKASDNLKASDnmlk")
        setActiveInput(activeInput + 1)        
    }


    return(
        <form className="inputRow">
            <input autoFocus name="input-1" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onInput={handleInput}/>
            <input name="input-2" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onInput={handleInput}/>
            <input name="input-3" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onInput={handleInput}/>
            <input name="input-4" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onInput={handleInput}/>
            <input name="input-5" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onInput={handleInput}/>
        </form>
    )
}

export default WordInput