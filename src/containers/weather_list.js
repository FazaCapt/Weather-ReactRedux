import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const Pressures = cityData.list.map(weather => weather.main.pressure)
        const Humidities = cityData.list.map(weather => weather.main.humidity)
        const {lon, lat} = cityData.city.coord;
        // const lat = cityData.city.coord.lat;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={Pressures} color="green" units="hPa" /></td>
                <td><Chart data={Humidities} color="Black" units="%" /></td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover" >
                <thead> 
                    <tr>
                        <th>City </th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humadity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    // const weather = state.weather
    return { weather };  // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);