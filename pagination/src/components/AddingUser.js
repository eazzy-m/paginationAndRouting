import React, {useState} from 'react';

import "./AddingUser.css";

function AddingUser({postNewUser}) {

    const initialData = {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
        gender: '',
        age: 0,
        latitude: -12.609311,
        longitude: -40.687713,
        role: '',
        address: "228 улица Пушкина дом Колотушкина, 0101",
        image: "http://placehold.it/32x32",
        phone: "+1 (844) 414-3567",
    };

    const [data, setData] = useState(initialData);

    const submit = (e) => {
        e.preventDefault();
        setData(initialData);
        postNewUser(data);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'age') {
            setData({...data, [name]: value * 1});
        } else {
            setData({...data, [name]: value});
        }
    };

    return (
        <>
            <h1>Adding User</h1>

            <div className="adding-user">
                <form method="POST" id="form" className="adding-user-form" onSubmit={submit}>
                    <input name="first_name" onChange={handleInput} required type="text" className="input" placeholder="First Name"/>
                    <input name="last_name" onChange={handleInput} required type="text" className="input" placeholder="Last Name"/>
                    <input name="user_name" onChange={handleInput} required type="text" className="input" placeholder="User Name"/>
                    <input onChange={handleInput} required name="email" type="email" className="input" placeholder="Email"/>
                    <input onChange={handleInput} required name="password" type="password" className="input" placeholder="Password"/>

                    <div className="quantity-wrapper">
                        <input name="age" onChange={handleInput} required  min="16" max="99" type="number" className="input quantity" placeholder="Age"/>
                    </div>

                    <div className="box">
                        <select onChange={handleInput} required form="form" name="role" id="pet-select">
                            <option value="">Your role</option>
                            <option value="admin">Admin</option>
                            <option value="observer">Observer</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <div className='radio-container'>
                        <input onChange={handleInput} required type="radio" id="male" name="gender" value="male"/>
                            <label htmlFor="male">Male</label><br/>
                        <input onChange={handleInput} type="radio" id="female" name="gender" value="female"/>
                             <label htmlFor="female">Female</label><br/>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddingUser;