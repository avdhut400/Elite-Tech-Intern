import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBAox.css"; 
import { useState } from 'react';

export default function SearchBox({ update }) {
    const [city, setCity] = useState(""); 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "37a36378b17c5e1ee7c623e9ef88572a";

    const getWeatherInfo = async () => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const json = await response.json();
        console.log(json);
        const result = {
            tempMax: json.main.temp_max,
            feels_like: json.main.feels_like,
            tempMin: json.main.temp_min,
            humid: json.main.humidity,
            weather: json.name
        };
        return result;
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const newInfo = await getWeatherInfo();
        update(newInfo);
        setCity("");
    };

    return (
        <div className="search-box-container">
            <h3 className="fade-in">🌤️ Search for the weather</h3>
            <form onSubmit={handleSubmit} className="form-slide">
                <TextField
                    id="outlined-basic"
                    label="City name"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    
                    required
                />
                <br /><br />
                <Button variant="outlined" color="success" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}
