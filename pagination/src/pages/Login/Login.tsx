import {useState, ChangeEvent, FormEvent} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import TsInput from "../../components/input/TsInput";
import TsSubmitButton from "../../components/submit-button/TsSubmitButton";
import {IGlobalState} from "../../constants/interfaces";


const Login = ({login} : {login: (data : {login: string, password: string}) => void}) => {

    const isLogin  = useSelector<IGlobalState>((state) =>  state.login.isLogin);

    const initialData = {
        login: '',
        password: ''
    };

    const [data, setData] = useState<{login: string, password: string}>(initialData);

    const submit = (e: FormEvent):void => {
        e.preventDefault();
        setData(initialData);
        login(data);
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = e.target;
        setData({...data, [name]: value});
    };

    return (
        <>
            {!!isLogin && <Navigate to="/users"/>}
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