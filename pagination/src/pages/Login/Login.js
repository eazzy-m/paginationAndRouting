import React, {useState} from 'react';
import Input from "../../components/input/Input";
import SubmitButton from "../../components/submit-button/SubmitButton";

const Login = ({login}) => {

    const initialData = {
        user_name: '',
        email: '',
        password: '',
    };

    // const uselessData = {
    //     first_name: '',
    //     last_name: '',
    //     user_name: '',
    // };

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

    return (
        <>
            <h1>Login</h1>

            <div className="adding-user">
                <form method="POST" id="login-form" className="adding-user-form" onSubmit={submit}>

                    {/*<Input name="first_name" onChange={handleInput} required type="text" className="input" placeholder="First Name"/>*/}
                    {/*<Input name="last_name" onChange={handleInput} required type="text" className="input" placeholder="Last Name"/>*/}
                    <Input name="user_name" onChange={handleInput} required type="text" className="input" placeholder="User Name"/>
                    <Input onChange={handleInput} required name="email" type="email" className="input" placeholder="Email"/>
                    <Input onChange={handleInput} required name="password" type="password" className="input" placeholder="Password"/>

                    <SubmitButton/>
                </form>
            </div>
        </>
    );
};

export default Login;