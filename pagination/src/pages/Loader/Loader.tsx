import * as React from 'react';

import './Loader.scss';
// @ts-ignore
import gear from '../../assets/gear/gear-svgrepo-com.svg';


const Loader: React.FC = () => {
    return (
        <div className="loading-container">
            <h2 className="loading-title">Is loading...</h2>
            <div className="gears-container">
                <div className="gear-big">
                    <img src={gear} alt="big-gear"/>
                </div>
                <div className="gear-small">
                    <img src={gear} alt="small-gear"/>
                </div>
            </div>
        </div>
    );
};

export default Loader;