
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

import UsersList from "./components/UsersList";
import Header from "./components/Header";
import AddingUser from "./components/AddingUser";

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://core-area-api.herokuapp.com/users', {
            method: 'GET',
            headers: {
                authorization: 'super-token',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
            .then(data => setData(data));
    }, []);


    function postNewUser(data) {
        fetch('https://core-area-api.herokuapp.com/users',{
            method: 'POST',
            headers: {
                authorization: 'super-token',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data
            }),
        }).then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index path="/" element={<UsersList data={data}/>}/>
                <Route path="/adding-user" element={<AddingUser postNewUser={postNewUser}/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
