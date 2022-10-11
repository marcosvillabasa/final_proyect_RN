import data from '../../data/data.json'
import { matchTypes } from '../types'

const initialState = {
	matches: data,
	matchesFav: [],
	selected: null,
}

const { ADD_MATCH_FAV, REMOVE_MATCH_FAV } = matchTypes

const matchesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MATCH_FAV:
			const item = state.matches.find((match) => {
				return match.fixture.id === action.payload
			})
			let aux = []

			if (state.matchesFav.length === 0) {
				aux = [item]
			}
			if (
				!state.matchesFav.find((match) => match.fixture.id === action.payload)
			) {
				aux = [...state.matchesFav, item]
			} else {
				return state
			}

			return {
				...state,
				matchesFav: aux,
			}
		case REMOVE_MATCH_FAV:
			return {
				...state,
				matchesFav: state.matchesFav.filter(
					(match) => match.fixture.id !== payload.id
				),
			}

		default:
			return state
	}
}

export default matchesReducer
