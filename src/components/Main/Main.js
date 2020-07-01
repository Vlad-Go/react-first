import React from 'react';

import Form from '../Form/Form';
import DataList from '../DataList/DataList';


import './Main.scss';


const API_KEY= '3bf2682057a1e3b0c70cc87c808409a5';

// const getWeather = async (e) => {
//   // e.preventDefault();
//
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=${API_KEY}`)
//     .then(response =>  response.json())
//     .then(data =>{
//         this.setState({
//         weather: data.weather.main,
//         weatherDescription:  data.weather.description,
//         temp: data.main.temp,
//         pressure: data.main.pressure,
//         sunrise: data.sys.sunrise,
//         sunset: data.sys.sunset,
//       });
//   } )
//
// }
// getWeather()








class  Main extends React.Component{
  state = {
    weather: undefined,
    weatherDescription: undefined,
    temp: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather(e)  {
    e.preventDefault();
    const city = e.target.elements.city.value;


     if (city) {
          console.log(city);
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
          .then(response =>  response.json())
          .then(data =>{
            const date_sunrise = new Date();
            const date_sunset = new Date();
            date_sunrise.setTime(data.sys.sunrise)
            date_sunrise.setTime(data.sys.sunset)
            console.log(data);

              this.setState({
              weather: data.weather[0].main,
              weatherDescription:  data.weather[0].description,
              temp: data.main.temp,
              pressure: data.main.pressure,
              sunrise:date_sunrise.getHours() + ':' + date_sunrise.getMinutes() + ":" +  date_sunrise.getSeconds(),
              sunset:date_sunset.getHours() + ':' + date_sunset.getMinutes() + ":" +  date_sunset.getSeconds(),
              error : undefined
            })

      })
      .catch(()=>{
          this.setState({
            error: 'Enter correct city name'
        })
      })
     }


  }

  render(){
    const {temp , sunset  ,weather , weatherDescription , sunrise , pressure , error} = this.state
        return (
          <div className="main">
              <h3 className="main__title">Enter city ...</h3>
               <Form  getingWeather={this.getWeather.bind(this)}/>
               <DataList temp={temp} weather={weather}  weatherDescription={weatherDescription}  sunrise={sunrise}  pressure={pressure}  sunset={sunset} error={error}/>
          </div>
          );
  }
}

export default Main;
