import React from 'react';

import './Input.css';

function Input({name, className, type, onChange, required, placeholder}) {

    return (
        <input name={name}
               className={className}
               type={type}
               onChange={onChange}
               required={required}
               placeholder={placeholder}/>
    );
}

export default Input;