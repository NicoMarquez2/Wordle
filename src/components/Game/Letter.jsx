import React, { useEffect, useState } from "react";

const Letter = (props) => {
    const board = props.table
    const letter = board[props.attempt][props.position]
    const [active, setActive] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [close, setClose] = useState(false)
    const [incorrect, setIncorrect] = useState(false)


    useEffect(()=>{
        if(letter.toLowerCase() == props.word[props.position]){
            setCorrect(true)
        } else if (letter != "" && props.word.includes(letter.toLowerCase())){
            setClose(true)
        } else if(letter != ""){
            setIncorrect(true)
        }
    },[props.activeRow])

    useEffect(()=>{
        if(props.activeRow == props.attempt && props.activePosition == props.position){
            setActive(true)
        } else {
            setActive(false)
        }

    },[props.table])


    return(
        <div id={`${correct?"correct":close?"close":incorrect?"incorrect": ""}`} className={`${active ? 'active':'letter'}`}>{letter}</div>
    )
}

export default Letter