import React, { useEffect, useState } from "react";
import { useRef } from "react";

const WordInput = (props) => {
    const word = props.word
    
    const [letterOne, setLetterOne] = useState("")
    const [letterTwo, setLetterTwo] = useState("")
    const [letterThree, setLetterThree] = useState("")
    const [letterFour, setLetterFour] = useState("")
    const [letterFive, setLetterFive] = useState("")
    const [correct, setCorrect] = useState({
                                        first: false,
                                        second: false,
                                        third: false,
                                        fourth: false,
                                        fifth: false
                                    })

    const inputRefOne = useRef()
    const inputRefTwo = useRef()
    const inputRefThree = useRef()
    const inputRefFour = useRef()
    const inputRefFive = useRef()

    useEffect(() => {
        /*props.setInputWord(letterOne + letterTwo + letterThree + letterFour + letterFive)
        console.log("SETEO PALABRA")*/
        console.log("ALJKSNJKLASNDJKLASDjkasNDKJ")
        if(letterOne != "" || letterTwo != "" || letterThree != "" || letterFour != "" || letterFive != ""){
            props.setError(true)
        } else {
            props.setError(false)
            if(letterOne == word[0]){
                console.log("CORRECTO")
                setCorrect.first(true)
            }
        }
    }, [props.click])

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
        }
        
    }


    return(
        <form className="inputRow">
            <input ref={inputRefOne}
                autoComplete="off"
                autoFocus id="1"
                className={`tableInput ${correct.first = true ? "green" : "red"}`}
                type="text"
                maxLength="1" 
                disabled={props.disabled}
                onChange={(e) => handleInput(e)}/>
            <input ref={inputRefTwo}
                autoComplete="off" 
                id="2" 
                className="tableInput" 
                type="text" 
                maxLength="1" 
                disabled={props.disabled} 
                onChange={(e) => handleInput(e)}/>
            <input ref={inputRefThree} 
                autoComplete="off" 
                id="3" 
                className="tableInput" 
                type="text" 
                maxLength="1" 
                disabled={props.disabled} 
                onChange={(e) => handleInput(e)}/>
            <input ref={inputRefFour} 
                autoComplete="off" 
                id="4" 
                className="tableInput" 
                type="text" 
                maxLength="1" 
                disabled={props.disabled} 
                onChange={(e) => handleInput(e)}/>
            <input ref={inputRefFive}
                autoComplete="off" 
                id="5" 
                className="tableInput" 
                type="text" maxLength="1" 
                disabled={props.disabled} 
                onChange={(e) => handleInput(e)}/>
        </form>
    )
}

export default WordInput