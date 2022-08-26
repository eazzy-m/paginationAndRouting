import * as React from 'react';

import './Loader.scss';

const Gear: string = require('../../assets/gear/gear-svgrepo-com.svg').default;

const Loader: React.FC = () => {
    return (
        <div className="loading-container">
            <h2 className="loading-title">Is loading...</h2>
            <div className="gears-container">
                <div className="gear-big">
                    <img src={Gear} alt="big-gear"/>
                </div>
                <div className="gear-small">
                    <img src={Gear} alt="small-gear"/>
                </div>
            </div>
        </div>
    );
};

export default Loader;