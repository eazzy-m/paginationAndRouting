import React, {useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Input} from "@mui/material";
//import Input from "../../components/input/Input";
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
                    <Input name="login" onChange={handleInput} required type="text"
                           sx={{
                               backgroundColor: "#4DC3FA",
                               fontWeight: 600,
                               marginTop: "20px",
                               height: "40px",
                               borderRadius: "5px"
                            }}
                           placeholder="username or email"/>
                    <Input onChange={handleInput} required name="password" type="password"
                           sx={{
                               backgroundColor: "#4DC3FA",
                               fontWeight: 600,
                               marginTop: "20px",
                               height: "40px",
                               borderRadius: "5px"
                           }}
                           placeholder="Password"/>

                    <SubmitButton/>
                </form>
                <Link className="link" to={'/registration'}>Sign up</Link>
            </div>
        </>
    );
};

export default Login;