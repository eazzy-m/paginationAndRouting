import React, {useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import InputStyled from "../../components/input/InputStyled";
import SubmitButton from "../../components/submit-button/SubmitButton";

const Login = ({login}) => {
    const { isLogin } = useSelector(state => state.login);
    const initialData = {
        login: '',
        password: ''
    };

    const [data, setData] = useState(initialData);

    const submit = e => {
        e.preventDefault();
        setData(initialData);
        login(data);
    };

    const handleInput = e => {
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
                    <InputStyled
                        autoFocus={true}
                        name="login"
                        onChange={handleInput}
                        required
                        type="text"
                        placeholder="Username or Email"/>
                    <InputStyled
                        onChange={handleInput}
                        required
                        name="password"
                        type="password"
                        placeholder="Password"/>
                    <SubmitButton />
                </form>
                <Link className="link" to={'/registration'}>Sign up</Link>
            </div>
        </>
    );
};

export default Login;