import React, { useEffect, useState } from "react";

const Letter = (props) => {

    const [active, setActive] = useState(false)
    const board = props.table
    useEffect(()=>{
        console.log(props.activeRow, props.activePosition)
        if(props.activeRow == props.attempt && props.activePosition == props.position){
            setActive(true)
        } else {
            setActive(false)
        }
    },[props.table])

    /*useEffect(()=>{
        console.log(board[props.attempt][props.position])
    },[])*/

    return(
        <div className={`${active ? 'active':'letter'}`}>{board[props.attempt][props.position]}</div>
    )
}

export default Letter