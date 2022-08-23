import {useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import TsInput from "../../components/input/TsInput";
import TsSubmitButton from "../../components/submit-button/TsSubmitButton";
import * as React from "react";

const Login = ({login} : {login: (data : {login: string,password: string}) => void}) => {
    // @ts-ignore
    const { isLogin } = useSelector(state => state.login);
    const initialData = {
        login: '',
        password: ''
    };

    const [data, setData] = useState<{login: string, password: string}>(initialData);

    const submit = (e: React.FormEvent):void => {
        e.preventDefault();
        setData(initialData);
        login(data);
    };

    const handleInput = (e):void => {
        const { name, value } = e.target;
        setData({...data, [name]: value});
    };

    if (isLogin) {
        return <Navigate to="/users"/>
    }

    return (
        <>
            <h1>Login</h1>

            <div className="adding-user">
                <form method="POST" id="login-form" className="adding-user-form" onSubmit={submit}>
                    <TsInput
                        autoFocus={true}
                        name="login"
                        onChange={handleInput}
                        required
                        type="text"
                        placeholder="Username or Email"/>
                    <TsInput
                        onChange={handleInput}
                        required
                        name="password"
                        type="password"
                        placeholder="Password"/>
                    <TsSubmitButton />
                </form>
                <Link className="link" to={'/registration'}>Sign up</Link>
            </div>
        </>
    );
};

export default Login;