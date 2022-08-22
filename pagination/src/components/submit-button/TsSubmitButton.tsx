import * as React from "react";
import {Button} from "@mui/material";

import './SubmitButton.scss';

const TsSubmitButton: React.FC = () => {
    return (
        <Button variant="contained"
                className="submit-button"
                type="submit"
                sx={{
                    margin: "20px auto 100px;"
                }}
        >Submit</Button>
    )
};

export default TsSubmitButton;