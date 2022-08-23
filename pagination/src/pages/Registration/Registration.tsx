import * as React from 'react';
import {Link, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import TsInput from "../../components/input/TsInput";
import TsSubmitButton from "../../components/submit-button/TsSubmitButton";
import "./Registration.scss";


const Registration = ({postNewUser}: {postNewUser : (data : {first_name: string, last_name: string,user_name: string,
        email: string, password: string}) => void}) => {
    // @ts-ignore
    const { isRegister } = useSelector((state) => state.registration);

    const initialData = {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
    };

    const [data, setData] = React.useState<{first_name: string, last_name: string, user_name: string,
                                            email: string, password: string}>(initialData);
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    const submit = (e: React.FormEvent):void => {
        e.preventDefault();
        if (password === data.password) {
            setData(initialData);
            postNewUser(data);
            setMessage('');
        } else {
            setMessage('Passwords are not the same');
        }
    };

    const isPasswordCorrect = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setData({...data, [name]: value});
    };

    if (isRegister) {
        return <Navigate to="/users"/>
    }

    return (
        <>
            <h1>Registration</h1>

            <div className="adding-user">
                <form method="POST" id="form" className="adding-user-form" onSubmit={submit}>

                    <TsInput  name="first_name" onChange={handleInput} required type="text" placeholder="First Name"
                                  autoFocus={true}/>
                    <TsInput  name="last_name" onChange={handleInput} required type="text" placeholder="Last Name"/>
                    <TsInput  name="user_name" onChange={handleInput} required type="text" placeholder="User Name"/>
                    <TsInput  name="email" onChange={handleInput} required type="email" placeholder="Email"/>
                    <TsInput  name="password" onChange={handleInput} required type="password" placeholder="Password"/>
                    <TsInput  name="repeat-password" onChange={isPasswordCorrect} required type="password" placeholder="Repeat password"/>
                    <span className='alert-password-active'>{message}</span>

                    <TsSubmitButton />
                </form>
                <Link className="link" to='/'>Sign in</Link>
            </div>
        </>
    );
}

export default Registration;