import React, { useEffect } from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Game from "./components/Game/Game";
import Register from "./components/Register";

function App() {
  const [userLogged, setUserLogged] = useState(false)
  

  useEffect(()=>{
    if(localStorage.userToken){
      setUserLogged(true)
    }
  },[])

  const setLogIn = () =>{
    setUserLogged(!userLogged)
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route
              path="/"
              element={userLogged ? <Game setLogin={setLogIn}></Game> : <Login setLogIn={setLogIn}></Login>}
            />
            <Route
              path="/register"
              element={<Register></Register>}
            /> 
        </Routes>      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
