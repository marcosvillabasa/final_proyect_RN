import { matchTypes } from '../types'
const { ADD_MATCH_FAV, REMOVE_MATCH_FAV } = matchTypes

export const selectMatch = (id) => {
	return {
		type: ADD_MATCH_FAV,
		payload: id,
	}
}

export const removeMatch = (id) => {
	return {
		type: REMOVE_MATCH_FAV,
		payload: id,
	}
}
