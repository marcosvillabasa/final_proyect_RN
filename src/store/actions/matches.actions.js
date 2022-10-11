import { matchTypes } from '../types'
const { ADD_MATCH_FAV } = matchTypes

export const selectMatch = (id) => {
	return {
		type: ADD_MATCH_FAV,
		payload: id,
	}
}
