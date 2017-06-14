import { combineReducers } from 'redux';
import WeatherReducers from './reducer_weather';

const rootReducers = combineReducers({
  // state: (state = {}) => state
    weather: WeatherReducers
});

export default rootReducers;