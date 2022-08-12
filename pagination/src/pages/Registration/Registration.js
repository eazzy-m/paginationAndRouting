import React, {useState} from 'react';
import Input from "../../components/input/Input";
import "./Registration.css";
import Select from "../../components/select/Select";
import SubmitButton from "../../components/submit-button/SubmitButton";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Registration = ({postNewUser, ok}) => {
    const { isRegister } = useSelector((state) => state.registration);
    const navigate = useNavigate();

    const initialData = {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
    };
     const uselessData = {age: 0,
        latitude: -12.609311,
        longitude: -40.687713,
        role: '',
        address: "228 улица Пушкина дом Колотушкина, 0101",
        image: "http://placehold.it/32x32",
        phone: "+1 (844) 414-3567",}


    const [data, setData] = useState(initialData);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const submit = e => {
        e.preventDefault();
        if (password === data.password) {
            setData(initialData);
            postNewUser(data);
            setMessage('');
            console.log(isRegister)
            if (isRegister) {
                navigate("/")
            }
        } else {
            setMessage('Passwords are not the same');
        }
    };

    const isPasswordCorrect = e => {
        setPassword(e.target.value);
    }

    const handleInput = e => {
        const { name, value } = e.target;
        if (name === 'age') {
            setData({...data, [name]: value * 1});
        } else {
            setData({...data, [name]: value});
        }
    };

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
                    {/*<div className="input-wrapper">*/}
                    {/*    <div className="quantity-wrapper">*/}
                    {/*        <Input name="age" onChange={handleInput} required  min="16" max="99" type="number" className="input quantity" placeholder="Age"/>*/}
                    {/*    </div>*/}
                    {/*    <Select onChange={handleInput}/>*/}
                    {/*</div>*/}

                    {/*<div className='radio-container'>*/}
                    {/*    <Input onChange={handleInput} required type="radio" id="male" name="gender" value="male"/>*/}
                    {/*        <label htmlFor="male">Male</label><br/>*/}
                    {/*    <Input onChange={handleInput} type="radio" id="female" name="gender" value="female"/>*/}
                    {/*         <label htmlFor="female">Female</label><br/>*/}
                    {/*</div>*/}

                    <SubmitButton/>
                </form>
            </div>
        </>
    );
}

export default Registration;