import React from 'react';

import AppInfo from './components/AppInfo/AppInfo';
import Main from './components/Main/Main';

import './App.css';

// const API_KEY = '3bf2682057a1e3b0c70cc87c808409a5';
//
// const getWeather =  () => {
//
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}`)
//     .then(response =>  response.json())
//     .then(data =>  console.log(data))
//
//    // this.setState({
//    //   temp: '13',
//    //   sunset: '13:00'
//    // })
//
// }
// getWeather()

const App = () =>(
    <div className="app">
         <AppInfo/>
         <Main/>
    </div>
  );

export default App;
