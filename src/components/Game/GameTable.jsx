import React, { useEffect, useState } from "react";

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
        if(props.word == inputWord){
            setIsWinner(true)
        } else if(activeInput != 6){
            setActiveInput(activeInput + 1)
        }
    }

    return(
        <div className="table" >
            <form className="inputRow" disabled={true}>
                <input name="input-1" className="tableInput" type="text" disabled={(activeInput===1)? false : true} onInput={handleInput}/>
                <input name="input-2" className="tableInput" type="text" disabled={(activeInput===2)? false : true} onInput={handleInput}/>
                <input name="input-3" className="tableInput" type="text" disabled={(activeInput===3)? false : true} onInput={handleInput}/>
                <input name="input-4" className="tableInput" type="text" disabled={(activeInput===4)? false : true} onInput={handleInput}/>
                <input name="input-5" className="tableInput" type="text" disabled={(activeInput===5)? false : true} onInput={handleInput}/>
            </form>
            <form className="inputRow" disabled={(activeInput===1)? false : true}>
                <input name="input-1" className="tableInput" type="text" disabled={(activeInput===1)? false : true} onInput={handleInput}/>
                <input name="input-2" className="tableInput" type="text" disabled={(activeInput===2)? false : true} onInput={handleInput}/>
                <input name="input-3" className="tableInput" type="text" disabled={(activeInput===3)? false : true} onInput={handleInput}/>
                <input name="input-4" className="tableInput" type="text" disabled={(activeInput===4)? false : true} onInput={handleInput}/>
                <input name="input-5" className="tableInput" type="text" disabled={(activeInput===5)? false : true} onInput={handleInput}/>
            </form>
            <form className="inputRow" disabled={(activeInput===1)? false : true}>
                <input name="input-1" className="tableInput" type="text" disabled={(activeInput===1)? false : true} onInput={handleInput}/>
                <input name="input-2" className="tableInput" type="text" disabled={(activeInput===2)? false : true} onInput={handleInput}/>
                <input name="input-3" className="tableInput" type="text" disabled={(activeInput===3)? false : true} onInput={handleInput}/>
                <input name="input-4" className="tableInput" type="text" disabled={(activeInput===4)? false : true} onInput={handleInput}/>
                <input name="input-5" className="tableInput" type="text" disabled={(activeInput===5)? false : true} onInput={handleInput}/>
            </form>
            <form className="inputRow" disabled={(activeInput===1)? false : true}>
                <input name="input-1" className="tableInput" type="text" disabled={(activeInput===1)? false : true} onInput={handleInput}/>
                <input name="input-2" className="tableInput" type="text" disabled={(activeInput===2)? false : true} onInput={handleInput}/>
                <input name="input-3" className="tableInput" type="text" disabled={(activeInput===3)? false : true} onInput={handleInput}/>
                <input name="input-4" className="tableInput" type="text" disabled={(activeInput===4)? false : true} onInput={handleInput}/>
                <input name="input-5" className="tableInput" type="text" disabled={(activeInput===5)? false : true} onInput={handleInput}/>
            </form>
            <form className="inputRow" disabled={(activeInput===1)? false : true}>
                <input name="input-1" className="tableInput" type="text" disabled={(activeInput===1)? false : true} onInput={handleInput}/>
                <input name="input-2" className="tableInput" type="text" disabled={(activeInput===2)? false : true} onInput={handleInput}/>
                <input name="input-3" className="tableInput" type="text" disabled={(activeInput===3)? false : true} onInput={handleInput}/>
                <input name="input-4" className="tableInput" type="text" disabled={(activeInput===4)? false : true} onInput={handleInput}/>
                <input name="input-5" className="tableInput" type="text" disabled={(activeInput===5)? false : true} onInput={handleInput}/>
            </form>
            <form className="inputRow" disabled={(activeInput===1)? false : true}>
                <input name="input-1" className="tableInput" type="text" disabled={(activeInput===1)? false : true} onInput={handleInput}/>
                <input name="input-2" className="tableInput" type="text" disabled={(activeInput===2)? false : true} onInput={handleInput}/>
                <input name="input-3" className="tableInput" type="text" disabled={(activeInput===3)? false : true} onInput={handleInput}/>
                <input name="input-4" className="tableInput" type="text" disabled={(activeInput===4)? false : true} onInput={handleInput}/>
                <input name="input-5" className="tableInput" type="text" disabled={(activeInput===5)? false : true} onInput={handleInput}/>
            </form>
            <button type="button" onClick={handleButton}>ENVIAR</button>
        </div>
    )
}

export default GameTable
