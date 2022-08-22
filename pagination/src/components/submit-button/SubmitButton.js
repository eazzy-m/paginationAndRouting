import React from 'react';
import Button from '@mui/material/Button';

import './SubmitButton.scss';

function SubmitButton() {
    return (
        <Button
            variant="contained"
            className="submit-button"
            type="submit"
            sx={{
                margin: "20px auto 100px;"
            }}
        >Submit</Button>
    )
}

export default SubmitButton;