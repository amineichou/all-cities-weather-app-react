import React, { useEffect, useState } from 'react';
import WeatherBox from '../components/WeatherBox';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { SpinnerRoundOutlined } from 'spinners-react';
import { useRef } from 'react';

const Home = () => {
    const [load, setLoad] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [searchItem, setSearchItem] = useState("");


    const searchRef = useRef(null);

    const handlesearchItem = () => {
        setSearchItem(searchRef.current.value);
    }

    useEffect(() => {
        axios.get('https://get-world-cities-current-weather.onrender.com/get')
            .then(res => {
                setWeatherData(res.data);
            })
        setLoad(true)
    }, [])

    const ShowData = weatherData.filter(cityWeather => {
        if (cityWeather.city.toLowerCase().includes(searchItem.toLowerCase()))
            return cityWeather;
        return null;
    }).map((cityWeather,index) => {
        return <WeatherBox
            key={index}
            city={cityWeather.city}
            temperature={cityWeather.temperature}
            icon={cityWeather.icon}
        />;
    })

    return (
        <div className="home">
            <div className="search-container">
                <div className="search">
                    <FaSearch />
                    <input type="text" name="search" id="search" placeholder={`search ${ShowData.length} cities`} autoComplete='off' ref={searchRef} onChange={handlesearchItem} />
                </div>
            </div>
            <div className='home-container'>
                {
                    load ? ShowData : <SpinnerRoundOutlined color='#892be2' size={200} style={{ width: '300px', padding: '150px 0' }} />
                }
                {
                    ShowData.length === 0 ? <h1 style={{ width: '300px', padding: '150px 0', textAlign: 'center', color: '#892be2' }}>city not found!</h1> : null
                }
            </div>
        </div>
    );
}

export default Home;
