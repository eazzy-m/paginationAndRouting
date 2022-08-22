import * as React from "react";
import {Input} from "@mui/material";

import './InputStyled.scss';

interface tsInputProps {
    name: string,
    autoFocus?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type: string,
    required: boolean,
    placeholder: string
}

const TsInput: React.FC<tsInputProps> = ({name,
                                             autoFocus = false,
                                             placeholder,
                                             type,
                                             required,
                                             onChange}) => {
    return (
        <Input name={name}
               autoFocus={autoFocus}
               required={required}
               onChange={onChange}
               className="input"
               type={type}
               placeholder={placeholder}
        />
    )
};

export default TsInput;