import * as React from 'react';
import {loremFirst, loremSecond, loremThird} from "../../constants/aboutFillers";
import "./About.scss";

function About() {
    return (
        <div className="page">
            <h1>About</h1>
            <div className="about-container">
                <div className="about-element">
                    <p className="about-description">
                        {loremFirst}
                    </p>
                </div>
                <div className="about-element">
                    <p className="about-description">
                        {loremSecond}
                    </p>
                </div>
                <div className="about-element">
                    <p className="about-description">
                        {loremThird}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;