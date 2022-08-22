import * as React from 'react';

import "./NotFound.scss";
// @ts-ignore
import lens from "../../assets/microskope/microscope-lens-svgrepo-com.svg"


const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1 className="not-found-title">Page Not Found 404</h1>
            <div className="not-found-container">
                <img className="lens" src={lens} alt="lens"/>
            </div>
        </div>
    );
};

export default NotFound;