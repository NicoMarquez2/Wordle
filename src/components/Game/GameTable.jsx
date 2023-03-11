import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import WordInput from "./WordInput";

const GameTable = (props) => {
    const validKeys = "qwertyuiopasdfghjklñzxcvbnm"

    const [table, setTable] =useState([
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]
    ])

    const [inputWord, setInputWord] = useState("")
    const [activeRow, setActiveRow] = useState(0)
    const [activePosition, setActivePosition] = useState(0)
    const [isWinner, setIsWinner] = useState(false)
    const [click, setClick] = useState(false)
    const [error, setError] = useState(false)

    function handleGameOver(isWinner){
        if(isWinner){
            console.log("ESAAAAA")
        } else {
            console.log("PT")
        }
    }

    const handleKeyDown = (e) => {
        const newTable =[...table]
        const found = validKeys.indexOf(e.key)
        if (e.key == "Enter") {
            handleSend()
        } else if (e.key == "Backspace") {
            if(activePosition == 0){
                newTable[activeRow][activePosition] = ""
                setTable(newTable)
            } else {
                newTable[activeRow][activePosition - 1] = ""
                setTable(newTable)
                setActivePosition(activePosition - 1)
            }
        } else if(found != -1){
            if(activePosition > 4) return
            newTable[activeRow][activePosition] = e.key.toUpperCase()
            setTable(newTable)
            setActivePosition(activePosition + 1)
        }
    }
    
    /*useEffect(() => {
        console.log("MUESTRO PALABRA",inputWord)
    },[inputWord])

    function mostrarPalabra(){
        console.log(inputWord)
    }*/

    function handleSend(){
        if(table[activeRow].toString().replace(/,/g,"").toLowerCase() === props.word){
            console.log("ESA")
            setIsWinner(true)
            handleGameOver(true)
        }
        if(activePosition < 5) return
        if(activeRow == 5){
            handleGameOver()
        } else {
            setActiveRow(activeRow + 1)
            setActivePosition(0)
        }
    }

    return(
        <div className="table" onKeyDown={(e) => handleKeyDown(e)}>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={4}/>
            </div>

            <button type="button" onClick={handleSend}>ENVIAR</button>
            {/*<button type="button" onClick={mostrarPalabra}>MOSTRAR PALABRA</button>*/}
        </div>
    )
}

export default GameTable
