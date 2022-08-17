import React from 'react';
import Button from '@mui/material/Button';
import './SubmitButton.css';

function SubmitButton() {
    return (
        <Button variant="contained" sx={{
            width: "160px",
            marginTop: "20px",
            marginBottom: "100px",
            alignSelf: "center"
        }}>Submit</Button>
    )
}

export default SubmitButton;