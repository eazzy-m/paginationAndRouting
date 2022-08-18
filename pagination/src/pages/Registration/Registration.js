import React, { useState } from 'react';
import {Link, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import InputStyled from "../../components/input/InputStyled";
import SubmitButton from "../../components/submit-button/SubmitButton";

import "./Registration.scss";
const Registration = ({postNewUser}) => {
    const { isRegister } = useSelector((state) => state.registration);

    const initialData = {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
    };


    const [data, setData] = useState(initialData);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const submit = e => {
        e.preventDefault();
        if (password === data.password) {
            setData(initialData);
            postNewUser(data);
            setMessage('');
        } else {
            setMessage('Passwords are not the same');
        }
    };

    const isPasswordCorrect = e => {
        setPassword(e.target.value);
    };

    const handleInput = e => {
        const { name, value } = e.target;
        if (name === 'age') {
            setData({...data, [name]: value * 1});
        } else {
            setData({...data, [name]: value});
        }
    };

    if (isRegister) {
        return <Navigate to="/users"/>
    }

    return (
        <>
            <h1>Registration</h1>

            <div className="adding-user">
                <form method="POST" id="form" className="adding-user-form" onSubmit={submit}>

                    <InputStyled  name="first_name" onChange={handleInput} required type="text" className="input" placeholder="First Name"
                                  autoFocus={true}/>
                    <InputStyled  name="last_name" onChange={handleInput} required type="text" className="input" placeholder="Last Name"/>
                    <InputStyled  name="user_name" onChange={handleInput} required type="text" className="input" placeholder="User Name"/>
                    <InputStyled  name="email" onChange={handleInput} required type="email" className="input" placeholder="Email"/>
                    <InputStyled  name="password" onChange={handleInput} required type="password" className="input" placeholder="Password"/>
                    <InputStyled  name="repeat-password" onChange={isPasswordCorrect} required type="password" className="input" placeholder="Repeat password"/>
                   <span className='alert-password-active'>{message}</span>

                    <SubmitButton/>
                </form>
                <Link className="link" to='/'>Sign in</Link>
            </div>
        </>
    );
}

export default Registration;