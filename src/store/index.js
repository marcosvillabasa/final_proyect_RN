import { combineReducers, createStore } from 'redux'
import { matchesReducer } from './reducers'

const rootReducer = combineReducers({
	matches: matchesReducer,
})

export default createStore(rootReducer)
