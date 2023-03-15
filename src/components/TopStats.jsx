import React, { useEffect, useState } from "react";

const TopStats = (props) => {
    const [list, setList] = useState([])

    const url = "http://localhost:8080/stats/all"

    async function getAllStats(){
        await fetch(url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) =>{
                setList(data)})
    }

    useEffect(() => {
        getAllStats()
    }, [])

    useEffect(() => {
        getAllStats()
    }, [props.refresh])


    return(
        <div className="topStats">
            <h1>TOP PUNTOS</h1>
            <div>
                {
                    list.map((user, key) => {
                        return(
                            <p key={key}>{user.name}: {user.points}</p>
                        )                 
                    })
                }
            </div>
        </div>
    )
}

export default TopStats