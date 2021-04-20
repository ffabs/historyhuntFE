import React, { Component } from 'react';

class WurzburgWeather extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            sunrise: "",
            sunset: "",
            weather: "is fine",
            loaded: "no"
        };
    }

    loadWeather = event => {
        // fetch('https://fcc-weather-api.glitch.me/api/current?lat=49.79391&lon=9.95121')
        fetch('https://api.openweathermap.org/data/2.5/weather?id=2805615&appid=d8bd4ed0e2dd2c7b7a676613c6300127')
        .then(res => res.json())
        .then(resData => 
            this.setState({
                sunrise: resData.sys.sunrise,
                sunset: resData.sys.sunset,
                weather: "has " + resData.weather[0].main.toLowerCase(),
                loaded: "yes"
            })
        )
        .catch(err => console.log(err));
    }

    render() {
        let light;
        if (this.state.loaded === "no") {
            this.loadWeather();
        } else {
            let date = new Date();
            let hour = date.getHours();
            let minutes = date.getMinutes();
            let time = Number(hour + "." + minutes);

            let sunrise = this.state.sunrise;
            let sunriseDate = new Date(sunrise * 1000);
            let sunriseHours = sunriseDate.getHours();
            let sunriseMinutes = sunriseDate.getMinutes();
            let sunriseTime = Number(sunriseHours + "." + sunriseMinutes);

            let sunset = this.state.sunset;
            let sunsetDate = new Date(sunset * 1000);
            let sunsetHours = sunsetDate.getHours();
            let sunsetMinutes = sunsetDate.getMinutes();
            let sunsetTime = Number(sunsetHours + "." + sunsetMinutes);

            if (time < sunriseTime || time > sunsetTime) {
                light = "no";
            } else {
                light = "yes";
            }
        }        
        
        return ( 
            <div>
                {light === "no" &&
                    <div>It is probably too dark at this time...</div>
                }
                {light === "yes" &&
                    <div>It seems like the weather {this.state.weather} today.</div>
                }
            </div>  
        );
    }
}

export default WurzburgWeather;
