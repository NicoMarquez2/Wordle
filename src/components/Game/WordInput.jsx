import React, { useEffect, useState } from "react";
import { useRef } from "react";

const WordInput = (props) => {
    const [letterOne, setLetterOne] = useState("")
    const [letterTwo, setLetterTwo] = useState("")
    const [letterThree, setLetterThree] = useState("")
    const [letterFour, setLetterFour] = useState("")
    const [letterFive, setLetterFive] = useState("")

    const inputRefOne = useRef()
    const inputRefTwo = useRef()
    const inputRefThree = useRef()
    const inputRefFour = useRef()
    const inputRefFive = useRef()

    const handleInput = (e) => {
        if(e.target.id == 1) {
            setLetterOne(e.target.value)
            inputRefTwo.current.focus()
        } else if (e.target.id == 2) {
            setLetterTwo(e.target.value)
            inputRefThree.current.focus()
        } else if (e.target.id == 3) {
            setLetterThree(e.target.value)
            inputRefFour.current.focus()
        } else if(e.target.id == 4) {
            setLetterFour(e.target.value)
            inputRefFive.current.focus()
        } else {
            setLetterFive(e.target.value)
            props.word(letterOne + letterTwo + letterThree + letterFour + letterFive)
        }
        
    }


    return(
        <form className="inputRow">
            <input ref={inputRefOne} autoFocus id="1" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onChange={(e) => handleInput(e)}/>
            <input ref={inputRefTwo} id="2" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onChange={(e) => handleInput(e)}/>
            <input ref={inputRefThree} id="3" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onChange={(e) => handleInput(e)}/>
            <input ref={inputRefFour} id="4" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onChange={(e) => handleInput(e)}/>
            <input ref={inputRefFive} id="5" className="tableInput" type="text" maxLength="1" disabled={props.disabled} onChange={(e) => handleInput(e)}/>
        </form>
    )
}

export default WordInput