import React from 'react';

import './InputStyled.scss';
import {Input} from "@mui/material";

function InputStyled({name, type, onChange, required, placeholder, autoFocus=false}) {

    return (
        <Input name={name}
               autoFocus={autoFocus}
               className="input"
               type={type}
               onChange={onChange}
               required={required}
               placeholder={placeholder}/>
    );
}

export default InputStyled;