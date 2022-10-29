import React from 'react';

const WeatherBox = (props) => {
    return (
        <div className='weather-box'>
            <img src={props.icon} alt="" />
            <div className="info">
                <h1>{props.city ?? 'unavailable'}</h1>
                <h2>{props.temperature ?? '--'}</h2>
            </div>
        </div>
    );
}

export default WeatherBox;
