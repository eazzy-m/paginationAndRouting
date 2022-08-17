import React, { useState } from 'react';
import {Link, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import Input from "../../components/input/Input";
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

                    <Input name="first_name" onChange={handleInput} required type="text" className="input" placeholder="First Name"/>
                    <Input name="last_name" onChange={handleInput} required type="text" className="input" placeholder="Last Name"/>
                    <Input name="user_name" onChange={handleInput} required type="text" className="input" placeholder="User Name"/>
                    <Input onChange={handleInput} required name="email" type="email" className="input" placeholder="Email"/>
                    <Input onChange={handleInput} required name="password" type="password" className="input" placeholder="Password"/>
                    <Input onChange={isPasswordCorrect} required name="repeat-password" type="password" className="input" placeholder="Repeat password"/>
                   <span className='alert-password-active'>{message}</span>

                    <SubmitButton/>
                </form>
                <Link className="link" to='/'>Sign in</Link>
            </div>
        </>
    );
}

export default Registration;