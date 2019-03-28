import {createStore} from 'redux';
import mainReducer from './reducers.redux/mainReducer';
export default function store(initialState={store: JSON.parse(localStorage.getItem('shedule'))}) {
 return createStore(
   mainReducer,
   initialState,
 );
}