import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('action recived', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.push([action.payload.data]); 
            return [ action.payload.data, ...state]; // [city, city, city] Not [city, [city, city]]
    }

    return state;
}